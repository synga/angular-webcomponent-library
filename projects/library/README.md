# Library

Esse projeto abstrai os componentes da library em realmente uma biblioteca.

Todo o código para criação dos componentes é feito aqui para que possa ser compartilhado entre outras aplicações, como o bundling, que faz o build da aplicação.

## Criando componentes compartilhaveis.

Não há muitas regras para a criação de novos componentes para serem compartilhados, é algo bem simples e temos apenas duas regras.

1 - Os componentes devem ser criados dentro de `components` e qualquer componente que faça parte de um WebComponent devem ser criados dentro da própria pasta do componente, como por exemplo:

```
|_ components
  |_ badge -> WebComponent
    |_ badge-icon -> componente presente dentro do WebComponent
```

Caso um componente seja compartilhado entre varios WebComponents, pode ser criado uma pasta `shared` no mesmo nível de `components`, por exemplo.

2 - Todo componente criado deve ser compartilhado pelo arquivo `public-api.ts`. Esse arquivo serve apenas para centralizar o compartilhamento dos componentes e seus módulos.
