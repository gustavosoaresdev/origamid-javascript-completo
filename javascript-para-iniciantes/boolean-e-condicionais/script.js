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

var possuiGraduacao2 = true;
var possuiDoutorado2 = false;

if (possuiDoutorado2) {
    console.log('Possui graduação e doutorado');
}
else if (possuiGraduacao2) {
    console.log('Possui graduação, mas não possui doutorado');
}
else {
    console.log('Não possui graduação');
}

//  retorna Possui graduação, mas não possui doutorado

/* ================================================================================= */w