import { Project } from "ts-morph";
import { getAutorestOptions } from "../../autorestSession";

const esLintConfig = {
  plugins: ["@azure/azure-sdk"],
  extends: ["plugin:@azure/azure-sdk/azure-sdk-base"],
  rules: {
    "@azure/azure-sdk/ts-modules-only-named": "warn",
    "@azure/azure-sdk/ts-apiextractor-json-types": "warn",
    "@azure/azure-sdk/ts-package-json-types": "warn",
    "@azure/azure-sdk/ts-package-json-engine-is-present": "warn",
    "tsdoc/syntax": "warn"
  }
}

export function generateEsLintConfig(project: Project) {
  const { generateMetadata } = getAutorestOptions();
  if (!generateMetadata) {
    return;
  }
  project.createSourceFile(".eslintrc.json", JSON.stringify(esLintConfig), {
    overwrite: true
  });
}
