const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const firstValue = comidas.shift(),
    lastValue = comidas.pop();

comidas.push('Arroz');
comidas.unshift('Peixe', 'Batata');

console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Gustavo', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

estudantes.sort();
estudantes.reverse();

console.log(estudantes.includes('Joana')); // true
console.log(estudantes.includes('Juliana')); // false

let html = `<section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split('section').join('ul');
html = html.split('div').join('li');

console.log(html);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const arrayOriginal = carros.slice();
carros.pop();

console.log(arrayOriginal);



/* Fiquei alguns dias sem dar commits e estudar, pois minha
casa está em construção, e eu estou ajudando... */