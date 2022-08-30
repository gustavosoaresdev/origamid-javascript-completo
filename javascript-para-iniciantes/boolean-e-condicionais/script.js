var possuiGraduacao = false;
var possuiDoutorado = true;

console.log(possuiGraduacao, possuiDoutorado);  //  false true

/* ================================================================================= */

if (possuiGraduacao) {
    console.log('É verdadeiro');    //  false
}
else if (possuiDoutorado) {
    console.log('Possui doutorado');    //  true
}
else {
    console.log('Não possui nada');
}

/* ================================================================================= */