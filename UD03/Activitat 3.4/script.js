// 3.4.1 Mostra amb forEach els elements d’un array de noms precedits per la seva posició..
const noms = ['Sergi', 'Sebas', 'David', 'Joaquin', 'Leiner', 'Ayoub'];

noms.forEach( (nom, i) => {
    console.log(`En la posició nº${i+1} hi ha en ${nom}`);
});

// 3.4.2 A partir d’un array de preus, crea amb map un array amb un descompte del 15 %..
const preus = [9.95, 18.79, 2, 200];
const preusDescomptats = preus.map(preu => preu * (1-0.15));
console.log(`Preus descomptats:`);
preusDescomptats.forEach((p)=> console.log(p.toFixed(2)));

// 3.4.3 A partir d’un array de paraules, conserva amb filter les que tenguin cinc caràcters o més.
const paraules = ['ordinador', 'pantalla', 'conservar', 'sol', 'mapa', 'positiu', 'son'];
const mes5char = paraules.filter(p => p.length >= 5);
console.log(mes5char);

// 3.4.4 Converteix un array de minuts en textos del tipus “2 h 15 min” mitjançant map.
const arrayMinuts = [50, 90, 130, 180, 315];

const minutsFormatejats = arrayMinuts.map((total)=> {
    let minuts = total % 60;
    let hores = (total - minuts) / 60;
    return `${hores} h ${minuts} min`;
});
console.log(minutsFormatejats);

// 3.4.5 Encadena filter i map per obtenir el quadrat de tots els nombres positius d’un array.

const nombres = [1, 2, 3, -4, -5, 6, 7, -8, -9];
const quadrat = nombres
    .filter(nombre => nombre > 0)
    .map(nombre => nombre*nombre);
console.log(quadrat);

// 3.4.6 Demana una paraula i filtra totes les cadenes d’un array que la contenguin, ignorant majúscules i minúscules.

let paraula = 'de';
const arrayCadenes = ['Devorar', 'Domicilio', 'Alardear', 'Casa', 'Ordenador'];

const coincidencies = arrayCadenes.filter(cadena => cadena.toLowerCase().includes(paraula.toLowerCase()));
console.log(coincidencies);