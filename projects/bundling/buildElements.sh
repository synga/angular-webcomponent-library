#!/bin/sh

rm -r -f dist/ && # remove tudo que tem na dist
mkdir -p dist/components && # cria a pasta dist/components
node compileElements.js && # executa o compile
rm -r -f dist/temp # remove a pasta temporaria
