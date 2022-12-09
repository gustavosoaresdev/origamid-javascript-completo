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