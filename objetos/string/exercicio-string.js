// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 49',
    }
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((transacao) => {
    const valorLimpo = +transacao.valor.slice(3);

    if (transacao.descricao.startsWith('Taxa')) {
        taxaTotal += valorLimpo;
    } else {
        recebimentoTotal += valorLimpo;
    }
});

console.log('Taxa total:', taxaTotal); // 297
console.log('Recebimento total:', recebimentoTotal); // 148

/* Confesso que esse primeiro exercício foi um pouco desafiador! hahaha */

/* ================================================================================= */

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';');

console.log(arrayTransportes);

/* ================================================================================= */

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
            </ul>`;

html = html.split('span').join('a');
console.log(html);

/* ================================================================================= */

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase[frase.length - 1]); // !

// OU
console.log(frase.slice(-1)); // !

/* ================================================================================= */

// Retorne o total de taxas
const transacoes2 = [
    'Taxa do Banco', '   TAXA DO PÂO', '  taxa do mercado',
    'depósito Bancário', 'TARIFA especial'
];

let taxasTotal = 0;
transacoes2.forEach((transacao) => {
    const valorLimpo = transacao.trim().toLowerCase();
    if (valorLimpo.startsWith('taxa')) {
        taxasTotal++;
    }
});

console.log(taxasTotal); // 3