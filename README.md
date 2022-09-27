# Angular WebComponents Library

A ideia desse workspace é criar uma biblioteca de WebComponents, projeto feito como estudo para algo que estamos precisando atualmente no trabalho. Está ainda em seus primeiros passos e tenho algumas coisas para fazer, mas por hora já é o suficiente para ter um componente, uma aplicação para apresentação e uma para build.

## Projetos no workspace

Esse workspace contém alguns projetos, cada um com sua função especifica e uma finalidade.

### Library

A biblioteca dos componentes em si. Um projeto apenas para criação dos componentes e expor eles para outras aplicações.

### Presenting

Responsável por usar o so componentes para apresenta-los. Usado para server e aplicação em ambientes de QA/DEV e afins, porém não para produção.

### Bundling

Responsável por fazer o build dos componentes para produção. É nela que teremos as classes necessárias para transformar os componentes em webcomponents, além de junção dos arquivos e disponbibilização dos arquivos finais para serem usados nas aplicaçãoes.

## Proximos passos 

*Documentação:*

Não é uma aplicação complexa, na verdade são aplicação ligeiramente simples para quem já tem algum conhecimento de Angular. Mas o bundling pode ser um pouco confuso dependendo do conhecimento que a pessoa tem de Node, pois existem algun scripts que fazem o build e junção de todos os componentes.

*Bundling da biblioteca:*

A ideia é ser uma biblioteca E ter componentes separados, pois caso um usuário queira usar apenas um componente, ele pode puxar apenas o script do componente que ele quer. Porém, da forma que está feito hoje, é feito um build separado de cada componente, e para ter um build da biblioteca como um todo, temos duas opções:

- Um script que junta todos os componentes em um unico arquivo com exports deles.
- Buildar toda a biblioteca em um unico arquivo.

Estou mais inclinado a fazer da segunda forma, pois da primeira, cada arquivo tem os arquivos basicos do Angular necessários para fazer o componente funcionar, e sabemos que o Angular não é o Framework com melhor desempenho em questão de bundle, sendo assim, conforme crescem o numero de componentes, cresce exponencialmente a quantidade de arquivos basicos repetidos, pois todo componente tera esses arquivos.

Fazer da segunda forma pode assegurar que vamos ter apenas uma copia dos componentes básicos do Angular necessários para que a biblioteca funcione (espero rsrsrs).

*Limpeza do Bundling:*

O projeto de Bundling é responsável apenas pelo build, porém ele é do tipo application e tem as configurações de application no angular.json. Não preciso de um app, de um main e nenhum arquivo que faça parte de uma aplicação Angular, porém preciso entender como fazer e excluir isso.
