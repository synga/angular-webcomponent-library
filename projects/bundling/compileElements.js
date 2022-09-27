const fs = require('fs');
const {execSync} = require('child_process');

const components = fs.readdirSync(`src/components`);
components.forEach(component => compileComponent(component));

function compileComponent(component) {
    console.log(`\t- ${component}`);

    /**
     * Da um build em um elemento dentro do projeto. Por que separado assim? Posso dar um build passando o main dentro de outro
     * projeto? preciso ter a criação do webcomponent em si dentro do projeto de bundling e não do library?
     */
    const buildJsFiles = `ng run bundling:build:production --aot --main=projects/bundling/src/components/${component}/compile.ts`;
    const bundleIntoSingleFile = `cat dist/temp/runtime.js dist/temp/main.js dist/temp/polyfills.js > dist/temp/vtr-${component}.js`;
    const copyBundledComponent = `cp dist/temp/vtr-${component}.js dist/components/`;

    execSync(`${buildJsFiles} && ${bundleIntoSingleFile} && ${copyBundledComponent}`);
}
