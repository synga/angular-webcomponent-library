# Bundling

Projeto voltado para fazer o build dos WebComponents, contendo scripts para isso e abstrações necessárias para transformar os Components em WebComponents validos.

## Conteúdos de pastas

### dist

Todo build de componentes é feito para essa pasta. Dentro dela é criada uma pasta de `component` que contém os WebComponents. A pasta `dist` é limpa toda vez que o build é feito, sendo assim, todo arquivo dentro dela é excluido.

### src

Aqui ficam os conteúdos utilizados dentro para build dos WebComponents. Apenas algumas pastas tem conteúdos relevantes para o build.

`abstract`:

Contém uma abstração de um modulo que transforma o componente em um WebComponent efetivamente. Essa classe pode ser estendida pelo modulos, também presentes nesse projeto, para serem feitas as implementações necessárias.

Essa abstração foi criada única e exclusivamente para retirar essa responsabilidade da `library` e fazer com que o papel dela seja apenas conter o código dos componentes para serem compartilhados pelo workspace, deixando todo o build no escopo do `bundling`. Além disso, diminuímos código repetido.

`components`:

A pasta de components contém o código que transforma os componentes em WebComponents. Dentro de `components` temos pastas para cada componente existente na `library`. Vemos que o nome das pastas de componentes segue o nome dos mesmos componentes na `library`, sem nenhum prefixo do componente, pois o prefixo é adicionado no script de building.

Cada pasta de componente contém 2 arquivos. Um `module` do componente, responsável por estender o modulo abstraido, buscar o componente na library e criar esse WebComponent. Já o `compile` tem a mesma função do `main.ts` de uma aplicação comum. Faz o bootstrap do modulo e é usado na compilação dele pelo script.

## Scripts

### buildElements.sh

Um script de bash que faz a limpeza da pasta `dist`, cria uma nova pasta de `components`, compila os elementos que são jogados temporariamente em uma pasta `temp`, e por ultimo limpa a pasta temp.

### compileElements.js

O script que realmente faz o build. Os passos são os seguintes:

- É lido o conteúdo da pasta `components`, que retorna um array de strings.
- Com esse array de string, é feito um forEach que chama uma função que vai fazer a compilação dos componentes.
- Com o nome, são criadas 3 contantes com comandos a serem executados.
- - No primeiro, é feito o build do componente para produção, usando o arquivo de `compile` do componente.
- - No segundo, como o build retorna mais de 1 arquivo, é feio um `cat` para concatenar esses arquivos em um só.
- - Por ultimo, é copiado o WebComponent que esta em `temp` para a pasta principal de distribuição.
- Os comandos são executados.
