# Aula de hoje - Modules Introdução

## Aviso

Essa aula não faz parte desse modulo (DOM), mas é uma coisa nova <br>
que veio no ES6, e serve para organizar melhor o código. Então <br>
resolvi trazer aqui mesmo...

## Módulos

#### Manutenção

Dividir o código em diferentes arquivos com funções específicas (módulos) <br>
facilita a manutenção.

#### Compartilhamento

O compartilhamento de código com outros projetos é facilitado, pois basta <br>
você importar um módulo específico.

#### Nativo no ES6+

Ferramentas que permitem dividirmos o código em módulos já existem a <br>
bastante tempo. Grunt, Gulp, Webpack, Browserify, Parcel e outras. Mas <br>
agora os módulos são nativos.

## Modules ES6

Basta adicionar **type="module"** na tag script do HTML. Utilize a <br>
palavra chave **export** na frente do valor que deseja exportar (use <br>
default se for único). E **import nome from arquivo.js** para <br>
importar.

```html
    <script type="module" src="js/script.js"></script>
```

```js
    // arquivo scroll-suave.js
    export default function scrollSuave() {
        ...
    };
```

```js
    // arquivo script.js
    import scrollSuave from './scroll-suave.js';

    scrollSuave();
```

*Geralmente um valor por módulo.*

## Named Exports

Você pode exportar mais de um valor. Quando for importar utilize <br>
as chaves para especificar cada valor. O nome importado deve ser <br>
igual ao exportado.

```js
    // arquivo scroll.js
    export function scrollSuave() {
        ...
    };
    export function scrollAnimacao() {
        ...
    };
```

```js
    // arquivo script.js
    import { scrollSuave, scrollAnimacao } from './scroll.js';
    scrollSuave();
    scrollAnimacao();
```

```js
    // Importe todos os valores em um objeto
    import * as scroll from './scroll.js';
    scroll.scrollSuave();
    scroll.scrollAnimacao();
```

## Valores do Export

Podemos exportar objetos, funções, classes, números, strings e <br>
mais.

```js
    // arquivo configuracao.js
    export function scrollSuave() {};
    export const ano = 2000;
    export const obj = {nome: 'Ford'};
    export const str = 'Frase';
    export class Carro {};
```

```js
    // arquivo script.js
    import * as conf from './configuracao.js';
    conf.str;
    conf.obj;
    conf.ano;
```

## Características

#### Strict mode

**'use strict'** por padrão em todos os arquivos.

#### Variáveis ficam no module apenas

Não vazam para o escopo global.

#### This fora de um objeto faz referência a undefined

Ao invés de fazer referência ao window.

#### Assíncrono

## use strict

O modo estrito previne que algumas ações consideradas erros. <br>
Basta adicionarmos 'use strict' no topo de um arquivo, que <br>
ele entrará neste modo.

```js
    'use strict';

    nome = 'Ford'; // erro, variável global
    delete Array.prototype; // erro, não deletável
    window.top = 200; // erro, não pode mudar
    const arguments = 3.14; // escrever em palavra reservada
```

*Por padrão todo module está no* <br>
*modo estrito*