const fs = require("fs");
const { execSync } = require("child_process");

const components = fs.readdirSync(`src/components`);
components.forEach((component) => compileComponent(component));

function compileComponent(component) {
  console.log(`\t- ${component}`);
  const buildJsFiles = `ng run bundling:build:production --aot --main=projects/bundling/src/components/${component}/compile.ts`;
  const bundleIntoSingleFile = `cat dist/temp/runtime.js dist/temp/main.js dist/temp/polyfills.js > dist/temp/vtr-${component}.js`;
  const copyBundledComponent = `cp dist/temp/vtr-${component}.js dist/components/`;

  execSync(
    `${buildJsFiles} && ${bundleIntoSingleFile} && ${copyBundledComponent}`
  );
}
