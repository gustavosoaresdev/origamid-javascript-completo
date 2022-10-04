const carro = {
    marca: 'Marca',
    preco: 0,
}

const honda = carro;
honda.marca = 'Honda';
honda.preco = 2000;

const fiat = carro;
fiat.marca = 'Fiat';
fiat.preco = 3000;

/* dessa forma acima, não é uma cópia, pois na verdade estamos
alterando o objeto (carro). */

/* ================================================================================= */