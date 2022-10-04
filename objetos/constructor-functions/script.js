const carro = {
    marca: 'Marca',
    preco: 0,
}

// const honda = carro;
// honda.marca = 'Honda';
// honda.preco = 2000;

// const fiat = carro;
// fiat.marca = 'Fiat';
// fiat.preco = 3000;

/* dessa forma acima, não é uma cópia, pois na verdade estamos
alterando o objeto (carro). */

/* ================================================================================= */

function Carro() {
    this.marca = 'Marca';
    this.preco = 2000;
}

const honda = new Carro();
honda.marca = 'Honda';
honda.preco = 3000;

const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 4000;

console.log(honda); // Carro {marca: 'Honda', preco: 3000}
console.log(fiat); // Carro {marca: 'Fiat', preco: 4000}

/* agora sim! com a constructor functions, podemos criar
novos objetos baseado nela, e não vai afetar / alterar o
objeto (Carro) de jeito nenhum. */

/* ================================================================================= */