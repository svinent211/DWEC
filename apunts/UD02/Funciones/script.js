// Funcions d'Ordre Superior
function calcular(a,b,operacio) {
    return operacio(a,b)
}

const sumar = (a,b) => a + b;
const multiplicar = (a,b) => a * b;

console.log(calcular(10,2, sumar));
console.log(calcular(10,2, multiplicar));


function creaMultiplicador(factor) {
    return function(numero) {
        return factor * numero
    };
}

const duplicar = creaMultiplicador(2);
const triplicar = creaMultiplicador(3);

console.log(duplicar(3));
console.log(triplicar(3));

// Arrays
console.warn("Arrays")
const notes = [7.5, 5.0, 3.5, 10];
console.log(notes);
console.log(Array.toString(notes));
console.log(notes[0]);
const buit = [];
buit[0] = 1;
buit[buit.length] = 2;
buit.push(20);
console.log(buit);

const colors = new Array("vermell", "groc", "verd", "blau");
const cotxes = new Array(1);
cotxes[0] = "ford";
cotxes[1] = "tesla";
console.log(cotxes);

// const multi = [1,"a",NaN, true];
// console.log(multi);

const colors2 = ["magenta", "turquesa"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
for(const color of colors) {
    console.log(color);
}
let index = 0;

// Calcular suma y cuantos han aprovado y la media de la clase
let suma = 0;
let aprovados = 0;
for (nota of notes) {
    suma += nota;
    if(nota >= 5) aprovados++;
}
let media = (suma / notes.length).toFixed(2);

console.log(
    `Han aprobado ${aprovados} alumnos
La nota media es: ${media}`);