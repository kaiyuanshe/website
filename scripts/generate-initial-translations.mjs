import { readFile, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import parser from "@babel/parser";
import traverseModule from "@babel/traverse";

const traverse = traverseModule.default;
const separator = "KYSSEPARATOR9F3A";
const sourceFiles = execFileSync(
  "rg",
  ["--files", "src", "-g", "*.ts", "-g", "*.tsx"],
  { encoding: "utf8" },
)
  .trim()
  .split("\n")
  .filter(Boolean);

const containsChinese = (value) => /[\u3400-\u9fff]/u.test(value);
const normalize = (value) => value.replace(/\s+/g, " ").trim();
const strings = new Set();

for (const file of sourceFiles) {
  const source = await readFile(file, "utf8");
  const ast = parser.parse(source, {
    sourceType: "module",
    plugins: ["typescript", "jsx"],
  });

  traverse(ast, {
    JSXText(path) {
      const value = normalize(path.node.value);
      if (value && containsChinese(value)) strings.add(value);
    },
    StringLiteral(path) {
      if (path.parentPath.isImportDeclaration()) return;
      if (path.parentPath.isExportNamedDeclaration()) return;

      const value = normalize(path.node.value);
      if (value && containsChinese(value)) strings.add(value);
    },
    TemplateElement(path) {
      const value = normalize(path.node.value.cooked || "");
      if (value && containsChinese(value)) strings.add(value);
    },
  });
}

const outputPath = "locales/en/initial.json";
let existing = {};

try {
  existing = JSON.parse(await readFile(outputPath, "utf8"));
} catch {
  // The first run starts with an empty catalog.
}

const pending = [...strings].filter((value) => !existing[value]);

for (let index = 0; index < pending.length; index += 10) {
  const batch = pending.slice(index, index + 10);
  const payload = JSON.parse(
    execFileSync(
      "curl",
      [
        "-sS",
        "--fail",
        "--retry",
        "4",
        "--retry-all-errors",
        "--max-time",
        "30",
        "-X",
        "POST",
        "https://translate.googleapis.com/translate_a/single",
        "-H",
        "Content-Type: application/x-www-form-urlencoded",
        "--data-urlencode",
        "client=gtx",
        "--data-urlencode",
        "sl=zh-CN",
        "--data-urlencode",
        "tl=en",
        "--data-urlencode",
        "dt=t",
        "--data-urlencode",
        `q=${batch.join(`\n${separator}\n`)}`,
      ],
      { encoding: "utf8" },
    ),
  );
  const translated = payload[0]
    .map((part) => part[0])
    .join("")
    .split(separator)
    .map(normalize);

  if (translated.length !== batch.length) {
    throw new Error(`Translation batch ${index / 20 + 1} could not be split`);
  }

  batch.forEach((source, itemIndex) => {
    existing[source] = translated[itemIndex];
  });

  await writeFile(outputPath, `${JSON.stringify(existing, null, 2)}\n`);
  process.stdout.write(
    `Translated ${Math.min(index + 10, pending.length)}/${pending.length}\r`,
  );
  await new Promise((resolve) => setTimeout(resolve, 350));
}

const sorted = Object.fromEntries(
  Object.entries(existing).sort(([left], [right]) => left.localeCompare(right)),
);

await writeFile(outputPath, `${JSON.stringify(sorted, null, 2)}\n`);
console.log(
  `\nWrote ${Object.keys(sorted).length} initial translations to ${outputPath}`,
);
