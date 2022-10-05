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

function Carro(marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}

const honda = new Carro('Honda', 3000);
const fiat = new Carro('Fiat', 4000);

console.log(honda); // Carro {marca: 'Honda', preco: 3000}
console.log(fiat); // Carro {marca: 'Fiat', preco: 4000}

/* agora sim! com a constructor functions, podemos criar
novos objetos baseado nela, e não vai afetar / alterar o
objeto (Carro) de jeito nenhum. */

/* ================================================================================= */

function Carro2(marca, precoInicial) {
    this.taxa = 1.2;
    const precoFinal = precoInicial * this.taxa;
    console.log(this); // Carro2 {taxa: 1.2}

    this.marca = marca;
    console.log(this); // Carro2 {taxa: 1.2, marca: 'Mazda'}

    this.preco = precoFinal;
    console.log(this); // Carro2 {taxa: 1.2, marca: 'Mazda', preco: 6000}
}

const mazda = new Carro2('Mazda', 5000);

/* ================================================================================= */