import { readFile, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import parser from "@babel/parser";
import traverseModule from "@babel/traverse";
import generateModule from "@babel/generator";
import types from "@babel/types";

const traverse = traverseModule.default;
const generate = generateModule.default;
const sourceFiles = execFileSync(
  "rg",
  ["--files", "src/pages", "src/components", "-g", "*.tsx"],
  { encoding: "utf8" },
)
  .trim()
  .split("\n")
  .filter(Boolean);

const containsChinese = (value) => /[\u3400-\u9fff]/u.test(value);
const normalize = (value) => value.replace(/\s+/g, " ").trim();

for (const file of sourceFiles) {
  const source = await readFile(file, "utf8");
  const ast = parser.parse(source, {
    sourceType: "module",
    plugins: ["typescript", "jsx"],
  });
  let changed = false;

  traverse(ast, {
    JSXText(path) {
      const value = normalize(path.node.value);
      if (!value || !containsChinese(value)) return;

      path.replaceWith(
        types.jsxElement(
          types.jsxOpeningElement(
            types.jsxIdentifier("LocalizedText"),
            [],
            false,
          ),
          types.jsxClosingElement(types.jsxIdentifier("LocalizedText")),
          [types.jsxExpressionContainer(types.stringLiteral(value))],
          false,
        ),
      );
      changed = true;
    },
  });

  if (!changed) continue;

  const alreadyImported = ast.program.body.some(
    (node) =>
      types.isImportDeclaration(node) &&
      node.source.value === "@/components/LocalizedText",
  );

  if (!alreadyImported) {
    const importNode = types.importDeclaration(
      [types.importDefaultSpecifier(types.identifier("LocalizedText"))],
      types.stringLiteral("@/components/LocalizedText"),
    );
    const lastImportIndex = ast.program.body.findLastIndex((node) =>
      types.isImportDeclaration(node),
    );
    ast.program.body.splice(lastImportIndex + 1, 0, importNode);
  }

  const output = generate(
    ast,
    {
      retainLines: true,
      jsescOption: { minimal: true },
    },
    source,
  );
  await writeFile(file, `${output.code}\n`);
}
