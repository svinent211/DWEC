// Arrays i funcions d'Ordre Superior (AFOS)

// forEach, map i filter

const arrayProva = [2, 4, 6, 1, -2];

// arrayProva.nomMetode((element, index, arrayComplet)=> {
// instruccions del callback
// });

// forEach
const llenguatges = ["Python", "Javascript", "Java", "C#"];

llenguatges.forEach((llenguatge, index) => {

    console.log(`${index + 1}.${llenguatge}`);
});

// map --> Aplica callback a cada element i retorna array nou amb el resultat
const preus = [10, 25, 40];

const preusIVA = preus.map(preu => {
    return preu * 1.21;
});

console.log(preus, preusIVA);

// filter --> aplica un callback que decideix quins elements conserva. Es un filtre

const notes = [3, 7, 9, 1, 8, 5, 10, 2];

// const aprovades = notes.filter((nota) => {
//     return nota >= 5;
// });

const aprovades = notes.filter(nota => nota >= 5);

const paraules = ['Hola', 'Paralelismo', 'ordenador', 'Disco', 'Mano', 'Pie', 'Dedo', 'Pantalla', 'Supercalifragilisticoespialidoso'];

const mes5char = paraules.filter(paraula => paraula.length >= 5);
console.log(mes5char);

// Encadenament de mètodes
const resultat = notes
    .filter(nota => nota % 2 === 0)
    .map(nota => nota * 10);
console.log(notes, resultat);


const temperaturesC = [12, 18, 25, 30, 2, 8, 0, -10];

const temperaturesAltesF = temperaturesC
    .filter(c => c >= 20)
    .map(c => c * 1.8 + 32);

    console.log(temperaturesC, temperaturesAltesF);
console.log(`Temperatures Celcius: ${temperaturesC}`);
console.log(`Temperatures Altes Fahrenheit: ${temperaturesAltesF}`);

// find, some, every, reduce i sort

// find --> retorna primer element que compleix el callback o undefined si no hi ha cap
const nombres = [4, 9, 12, 7, 18];
const primerMajorQue10 = nombres.find((nombre)=> {
    //Quan troba un que compleix atura
    return nombre > 10;
});
console.log(primerMajorQue10);

// some --> Comprova que algun element compleixi, deixa de recorrer l'array quan troba un true
const notes1 = [3, 7, 9, 1, 8, 5, 10, 2];
const algunaAprovada = notes.some((nota)=> {
    return nota >= 5;
});

console.log(`Alguna aprovada: ${algunaAprovada}`);

// every --> Comprova que tots els elements compleixen la condició. Deixa de recorrer l'array quan troba un false

totesAprovades = notes1.every((nota) => {
    console.log(nota);
    return nota >= 5;
});
console.log(`Totes aprovades ${totesAprovades}`);

console.log("Proves array buit");
arrayBuit = [];
console.log('Some ' + arrayBuit.some((n) => {
    return n > 0;
}));
console.log('Every ' + arrayBuit.every((n) => {
    return n > 0;
}));

// reduce --> combina tots els elements d'un array per produir un únic resultat

/* 
    array.reduce((acumulador, element)=> {
        return nouAcumulador;
    }, valorInicial);
*/

const imports = [10, 25, 8.5, 12];

const total = imports.reduce((acumulador, importActual) => {
    console.log(`Acumulador: ${acumulador}`);
    console.log(`Import actual: ${importActual}`);
    return acumulador + importActual;
}, 0);
console.log(`Total: ${total}`);

const palabras3 = ['Swiper', 'no', 'robes'];
const frase = palabras3.reduce((acumulador, palabraActual)=> {
    return acumulador + palabraActual + ' ';
}, '');

console.log(frase);

const maxImport = imports.reduce((max, importActual)=> {
    return max >= importActual ? max : importActual;
}, -Infinity);
console.log(`Max import: ${maxImport}`);

// sort --> 
// Per defecte: Compara els valors com a cadenes
const numeros = [2, 100, 20, 3];
// numeros.sort();

// ordenació numèrica: funció comparadora
numeros.sort((a, b)=> b - a); //a - b ascendente b - a descendente
console.log(numeros);
numeros.sort((a, b)=> a - b); //a - b ascendente b - a descendente
console.log(numeros);

// ordenació de cadenes
const noms = ['Úrsula', 'aina', 'Biel', 'carla'];
noms.sort();
console.log(noms);

// localCompare
noms.sort((a, b) => a.localeCompare(b, "ca", {sensitivity: "base"}));
console.log(noms);

const originals = [5, 2, 10, -4];
const copia = originals.slice();
copia.sort((a, b)=> a - b);
console.log(originals);
console.log(copia);