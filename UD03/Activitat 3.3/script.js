// 3.2.1 Crea una funció executarOperacio(a, b, callback) i prova-la amb callbacks per sumar,
// restar i calcular el màxim.
console.warn("3.2.1 Crea una funció executarOperacio(a, b, callback) i prova-la amb callbacks per sumar, restar i calcular el màxim.");

function executarOperacio(a, b, callback) {
    return callback(a,b);
}
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const maxim = (a,b) => a > b ? a : b;

console.log(`Suma de 2 i 3: ${executarOperacio(2,3,sumar)}`);
console.log(`Resta de 2 i 3: ${executarOperacio(2,3,restar)}`);
console.log(`Maxim entre 2 i 3: ${executarOperacio(2,3,maxim)}`);
// 3.2.2 Crea un array amb cinc temperatures. Mostra-les amb for i torna-les a mostrar amb for...of.
console.warn("3.2.2 Crea un array amb cinc temperatures. Mostra-les amb for i torna-les a mostrar amb for...of");
const temps =  [10.5, 20.1, 32.3, 40.2, -18.8];

console.log("Temperatures for")
for (let i = 0; i < temps.length; i++) {
    console.log(`Temperatura nº${i}: ${temps[i]}`);
}


let i = 0;
console.log("Temperatures for of")
for (const temp of temps) {
    i++
    console.log(`Temperatura nº${i}: ${temp}`);

}


// 3.2.3 Calcula manualment la suma, la mitjana, el valor màxim i el valor mínim d’un array de
// nombres.
console.warn("3.2.3 Calcula manualment la suma, la mitjana, el valor màxim i el valor mínim d’un array de nombres.");
const array = [1,2,3,4,5,6,7,8,9,10];

let suma = 0;
let max = 0;
let min = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > array[max]) max = i;
    if (array[i] < array[min]) min = i;
    suma += array[i];
    
}
let mitjana = suma / array.length;

console.log(`Suma = ${suma}
    Mitjana = ${mitjana}
    Max = ${array[max]}
    Min = ${array[min]}`);

// 3.2.4 Crea una funció comptarMajorsQue(valors, limit) que retorni quants elements superen el
// límit.
console.warn("3.2.4 Crea una funció comptarMajorsQue(valors, limit) que retorni quants elements superen el límit.");

function comptarMajorsQue(limit, valors) {
    let superen = 0;
    for (const valor of valors) {
        if (valor > limit) superen++;
    }
    return superen;
}
const valors = [10,20,30,40,50,60,70,80,90,100];
const limit = 55;
console.log(`Superen el limit ${comptarMajorsQue(limit, valors)} valors`);

// 3.2.5 Crea una funció transformarArray(valors, callback) que construeixi i retorni un array nou
// aplicant el callback a cada element.

console.warn("3.2.5 Crea una funció transformarArray(valors, callback) que construeixi i retorni un array nou aplicant el callback a cada element.");

function transformarArray(valors, callback) {
    return callback(valors);
}

function doubleNumbers (entrada) {
    const valors = [...entrada];
    for (let i = 0; i < valors.length; i++) {
        valors[i] = valors[i] * 2;
    }
  return valors;
}
function restar1aNumbers (entrada) {
        const valors = [...entrada];
        for (let i = 0; i < valors.length; i++) {
        valors[i] = valors[i] - 1;
    }
  return valors;
}

const nombres = [2,4,6,7,8,9,10];
const doble = doubleNumbers;
const restar1 = restar1aNumbers;
console.log(transformarArray(nombres, doble));
console.log(transformarArray(nombres, restar1));