

// 4. Literals i assignacions
const curs = 2026; //numeric
const modul = 'DWEC';
const modulOptatiu = "ERD";
const actiu = true;
const grups = ['DAM A', 'DAM B'];
const grupsMal = ['DAM A', "DAM B", 9, true, NaN, null]; //Pot tenir elements de diferents tipus, pero NO és RECOMENABLE
const sessio = {numero: 4, durada: 55, aula: '116'};
const buit = null;

// const nom = 'Laia';
// const nota = 9.5;
// const missatge = nom + ' ha obtingut un ' + nota;
// const missatgePlantilla = `${nom} ha obtingut un ${nota}`;
// console.log(missatge);
// console.log(missatgePlantilla);

//Assignació simple i composta
// =
let x = 10;
// +=
x = x +3;
x += 3;
x -= 3;
x = 9;
x /= 3;
console.log(x);
// ??= -> Assigna valor només si el valor és null o undefined
let nombre;
console.log(nombre);
nombre ??= 'Sergi';
console.log(nombre);


//  5. Operadors i expressions
// + suma, concatena
// - resta
// * multiplicació, / divisió
// % residu
// ** -> potencia 2**3 (2*2*2)
// ++, -- increment o decrement 1 unitat

// Comparació
// ==, != NO MIRA TIPUS
let cincNum = 5;
let cincCad = '5';
console.log(cincNum == cincCad);
console.log(cincNum != cincCad);

// ===, !== SÍ mira tipus
console.log(cincNum === cincCad);
console.log(cincCad !== cincNum);

// <,>,<=,>=
// Operadors lògics i valors truthy falsy
// && i lògic AND
// || o lògic OR nom || "Anònim"
// ?? quantitat ?? 1
let quantitat = 5;
console.log(quantitat ?? 10);
console.log(null ?? 10);

// Precedència i parèntesis
let calcul = (2 + 3) * 4; //Parentesis -> */ -> +-
console.log(calcul);

// Comparació de nombres, cadenes i objectes
const aa = [1, 2];
const bb = [1, 2];
const cc = aa;
let comparacio = aa === bb;
console.log(comparacio);
console.log(aa === cc);

//  Es falsy: false, 0, -0, 0n, "", ''. null, undefined, NaN
console.log("Falsys");
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean('0')); //Cuidado que esto es string
console.log(Boolean(""));
console.log(Boolean(null));

// Es truthy: true, 'false', [], {},
console.log("Truthy"); 
console.log(Boolean('false'));
console.log(Boolean([]));
console.log(Boolean({}));


let nom = 'Anna';
if (nom) console.log('El nom ve informat');
nom = '';
if (nom) console.log('El nom ve informat');

const resultat = 0;
if(!resultat) {
    console.log('El resultat és falsy')
}

let nota = 0;
if(nota != null && nota != undefined) {
    console.log(`Nota registrada: ${nota}`);
}

// 6. Conversió i coerció de tipus
let valor = '12.3';
console.log(typeof valor);
valor = Number(valor); //Conversión explícita
console.log(typeof valor);
valor = String(valor); //Conversión explícita
console.log(typeof valor);

valor = '';
console.log(typeof valor);
valor = Boolean(valor);
valor = '8.64€';
console.log(valor);
console.log(typeof valor);
valor = parseFloat(valor, 10);
console.log(valor);
console.log(typeof valor);


const quantitatText = '3';
const quantitatNumber = Number(quantitatText);

if(Number.isNaN(quantitatNumber)) {
    console.log("No és numérica");

}else {
    console.log(quantitatNumber * 10 / 32);
}

// Coerció (converisó implícita)

let valor2 = 2;
console.log(valor2);
console.log(typeof valor2);
valor2 = '5' + 2; //Conversion implicita, se concatena el numero al texto y queda string
console.log(valor2);
console.log(typeof valor2);
valor2 = true + 1; //Usa el true como un 1, la suma da 2
console.log(valor2);
console.log(typeof valor2);

// Condicionals

//Anidamiento if, else if, else
let edat = 18;
if(edat > 18) {
    console.log('És major d\'edat');
} else if(edat === 18){
    console.log('Tot just major d\'edat');
} else {
    console.log('NO és major d\'edat')
}

// Condicions compostes
// edat = 19;
// const teEntrada = true;
// const estaBloquejat = false;
// const teAcces = (edat>= 18) && teEntrada && !estaBloquejat;
// if (teAcces) {
//     console.log('Te accés');
// }else {
//     console.log('Accés denegat')
// }

// Operador ternari
const nota2 = 10;
const missatge = (nota2 >= 5) ? 'Aprovat' : 'Suspés';
console.log(missatge);

// Switch

let dia = 'dilluns';
dia = 'divendres';
switch( dia) {
    case 'dilluns':
        console.log('Comença la setmana');
        break;
    case 'divendres':
        console.log('Comença el cap de setmana');
        break;
    case 'dissabte':
        console.log('No tenc calsse!');
        break;
    case 'diumenge':
        console.log('Demà ja és dilluns...');
        break;
    default:
        console.log('Un dia qualsevol de la setmana...')
        break;
}

// Bucles
// for
for (let i = 0; i < 5; i++) {
    console.log('i:', i);
}

// while
let saldo = 100;
const cost = 30;
while (saldo >= cost) {
    console.log(`Saldo: ${saldo}`);
    saldo -= cost;
}

// do while
let intent = 0;

do {
    console.log(`Intent: ${intent+1}`);
    intent++;
}while (intent < 5);

// for of
const moduls = ['DWEC', 'ERD', 'Projecte'];

for (const modul of moduls) {
    console.log(modul);
}

for (const caracter of 'Projecte') {
    console.log(caracter);
}

// break i continue
for(let numero = 0; numero < 100; numero++) {
    if (numero === 3) continue;
    if (numero === 7) continue;
    if (numero >= 10) break;
    console.log(numero);

}




// Cadenes de text
console.log('Cadenes de text');
let a = "      dobles       ";
const b = ' Simples ';
const c = `accent greu`;

console.log(a,b,c);

console.log(c.length);
a = a.toUpperCase();
a = a.toLowerCase();
console.log(a);
a = a.trim();//Quita espacios antes y despues del texto
console.log(a);

let incluyex = a.includes('bles');
console.log(incluyex);
console.log('Empieza por d?', a.startsWith('d'));
console.log('Acaba por s?', a.endsWith('s'));

console.log(a.slice(1,3));
console.log(a.replace('o', '*'));
let sincensura = "Este puto cabron me ha hecho esto"
let censurado = sincensura.replace('puto','****').replace('cabron','******');
console.log(censurado);

let arrayDeCadena = a.split('o');
console.log(arrayDeCadena);

if (b.toLowerCase().trim() === 'simples') {
    console.log('Afirmatiu');
}else {
    console.log('Nop');
}

// Templates
const nom3 = 'Pepe';
const nota3 = 9.2;

console.log(`${nom} ha tret un ${nota}`);
const preu = 19.95;
const unitats = 3;
console.log(`Total: ${(preu < 10 ? 10* unitats : preu * unitats).toFixed(2)}€`);

// Text multilinea
const resum = `Comanda
Producte: teclat
Quantitat: 2
Estat: Ok`;
console.log(resum);

console.log(Number(''));


//ACTV 2.1
const nom_producte = 'Mouse pad';
const preu_producte = 18.95;
let estoc = 4;

estoc = comprar(2, estoc);
estoc = comprar(1, estoc);
estoc = comprar(2, estoc);


function comprar(unitats, estoc) {
    const hihaestoc = estoc >= unitats;
    if (hihaestoc) {
        estoc -= unitats;
        console.log(`Gracies per comprar ${unitats} unitats de ${nom_producte}`)
    }else {
        console.log(`No hi ha prou estoc, queden ${estoc} unitats`);
    }
    return estoc;
};



//Activitat contar vocals accents ` i ´ Mostrar text, longitud, cuantas vocals té, decidir si es text llarg (>=15 caracters) o curt (<15)
const entrada = ''
let vocals = 0;

if(entrada) {
    //Contar vocals i accents
    for (let k = 0; k < paraula.length; k++) {
        let c = paraula[k].toLowerCase();
        if(c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u' || c === 'á' || c === 'é' || c === 'í' || c === 'ó' || c === 'ú' ||  c === 'à' || c === 'è' || c === 'ì' || c === 'ò' || c === 'ù') {
            vocals++;
            console.log(vocals);
        }
    }


}else {
    console.log("No hi ha entrada")
}