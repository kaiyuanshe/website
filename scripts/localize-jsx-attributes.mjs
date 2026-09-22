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

const untranslatedAttributes = new Set([
  "action",
  "className",
  "color",
  "href",
  "htmlFor",
  "id",
  "key",
  "method",
  "name",
  "placement",
  "rel",
  "src",
  "target",
  "type",
  "value",
]);
const containsChinese = (value) => /[\u3400-\u9fff]/u.test(value);

function isComponentFunction(path) {
  if (path.isFunctionDeclaration()) {
    const name = path.node.id?.name || "";
    return /^[A-Z]/.test(name) || path.parentPath.isExportDefaultDeclaration();
  }

  if (path.isArrowFunctionExpression() || path.isFunctionExpression()) {
    const parent = path.parentPath;
    return (
      parent.isVariableDeclarator() &&
      types.isIdentifier(parent.node.id) &&
      /^[A-Z]/.test(parent.node.id.name)
    );
  }

  return false;
}

function findComponent(path) {
  return path.findParent(
    (candidate) => candidate.isFunction() && isComponentFunction(candidate),
  );
}

for (const file of sourceFiles) {
  const source = await readFile(file, "utf8");
  const ast = parser.parse(source, {
    sourceType: "module",
    plugins: ["typescript", "jsx"],
  });
  const owners = new Set();
  let changed = false;

  traverse(ast, {
    JSXAttribute(path) {
      if (!types.isJSXIdentifier(path.node.name)) return;
      if (untranslatedAttributes.has(path.node.name.name)) return;
      if (!types.isStringLiteral(path.node.value)) return;
      if (!containsChinese(path.node.value.value)) return;

      const owner = findComponent(path);
      if (!owner) return;

      path.node.value = types.jsxExpressionContainer(
        types.callExpression(types.identifier("translateUiText"), [
          types.stringLiteral(path.node.value.value),
        ]),
      );
      owners.add(owner);
      changed = true;
    },
    JSXExpressionContainer(path) {
      const expression = path.get("expression");
      if (
        expression.isTemplateLiteral() &&
        expression.node.quasis.some((quasi) =>
          containsChinese(quasi.value.cooked || ""),
        )
      ) {
        const owner = findComponent(path);
        if (!owner) return;

        expression.replaceWith(
          types.callExpression(types.identifier("translateUiText"), [
            expression.node,
          ]),
        );
        owners.add(owner);
        changed = true;
        return;
      }

      if (!expression.isConditionalExpression()) return;

      for (const branchName of ["consequent", "alternate"]) {
        const branch = expression.get(branchName);
        if (!branch.isStringLiteral() || !containsChinese(branch.node.value)) {
          continue;
        }

        const owner = findComponent(path);
        if (!owner) continue;

        branch.replaceWith(
          types.callExpression(types.identifier("translateUiText"), [
            types.stringLiteral(branch.node.value),
          ]),
        );
        owners.add(owner);
        changed = true;
      }
    },
  });

  if (!changed) continue;

  for (const owner of owners) {
    if (owner.scope.hasBinding("translateUiText")) continue;

    if (!types.isBlockStatement(owner.node.body)) {
      owner.node.body = types.blockStatement([
        types.returnStatement(owner.node.body),
      ]);
    }

    owner.node.body.body.unshift(
      types.variableDeclaration("const", [
        types.variableDeclarator(
          types.objectPattern([
            types.objectProperty(
              types.identifier("translateText"),
              types.identifier("translateUiText"),
              false,
              false,
            ),
          ]),
          types.callExpression(types.identifier("useTranslation"), []),
        ),
      ]),
    );
  }

  const alreadyImported = ast.program.body.some(
    (node) =>
      types.isImportDeclaration(node) &&
      node.specifiers.some(
        (specifier) =>
          types.isImportSpecifier(specifier) &&
          types.isIdentifier(specifier.imported, { name: "useTranslation" }),
      ),
  );

  if (!alreadyImported) {
    const importNode = types.importDeclaration(
      [
        types.importSpecifier(
          types.identifier("useTranslation"),
          types.identifier("useTranslation"),
        ),
      ],
      types.stringLiteral("@/hooks/useTranslation"),
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
