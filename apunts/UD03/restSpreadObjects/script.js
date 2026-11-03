//  Desestructuració d'Arrays
const colors = ['vermell', 'verd', 'blau'];

const [primerColor, segonColor, tercerColor] = colors;
console.log(primerColor);
console.log(segonColor);
console.log(tercerColor);

// Ometre elements
const valors = [10, 20, 30, 40];

const [primerValor,,tercerValor] = valors;
console.log(primerValor);
console.log(tercerValor);

// Valors predeterminats
const dades = ["Aina"];
const [nom, ciutat='Mô'] = dades;
console.log(nom, ciutat);

// Intercanviar variables
let a = 5;
let b = 9;
// Variables = valores
[a,b] = [b, a];
console.log(a,b);

//  Rest aplicat a arrays ... AGRUPA elements restants
const puntuacions = [95, 88, 76, 70];
const [millor, segon, ...resta] = puntuacions;
console.log(millor, segon, resta);


// Spread aplicat a Arrays ... EXPANDEIX 
const original = [3, 1, 8];
const copia = [...original]; // Sense ... fot un array dins s'array, en fa de 2 dimensions. Amb ... fot cada element de l'array individualment dins l'array
console.log(copia);
copia.sort((a,b)=> a -b);
console.log(original);
console.log(copia);

// Combinar arrays
const grupA = ['Aina', 'Biel'];
const grupB = ['Carla', 'Martin'];

const alumnat = [...grupA, ...grupB];
console.log(alumnat);

// Passar elements com a arguments.
const valorsInici = [4, 5, 9, 2];

console.log(Math.max(... valorsInici));
console.log(Math.min(... valorsInici));
// Crear funcion bucle que sume todos los valores de dentro

function sumar (...valors) {
    return valors.reduce((acumulador, valorActual) => acumulador + valorActual, 0);    
}
console.log(`Suma total: ${sumar(...valorsInici)}`);

// Afegir elements sense modificar l'original
const tasques = ['Estudiar', 'Practicar'];
const novesTasques = ['Planificar', ... tasques, 'Revisar'];
// console.log(tasques);
// console.log(novesTasques);


// OBJECTES

const alumne = {
    nom: "Anna",
    edat: 19,
    curs: "DAW B",
    centre: "IES Joan Ramis i Ramis",
    "telefon mobil": 55565656565,
    "++--": 67
};

console.log(alumne.nom);
console.log(alumne["curs"]);
const propietat = "++--";
console.log(alumne[propietat]);
alumne.nom = "Sergi";
console.log(alumne.nom);
// Afegir nou atribut
alumne.direccio = "Pccomponentes";
console.log(alumne.direccio);
// Eliminar atribut
delete alumne["++--"];
console.log(alumne["++--"]);

console.log(`\n\n`)
// Metodos como atributo
const compte = {
    titular: "David",
    saldo: 100,
    direccion: {
        calle: "Por allí",
        numero: 67
    },
    ingressar(quantitat) {
        this.saldo += quantitat;
    },
    mostrarSaldo: function() {
        console.log(`Titular: ${this.titular}\nSaldo: ${this.saldo}`);
    },
    mostrarNom: ()=> {
        // arrow function no poden accedir a "this."
        console.log(this.titular);
    }

}
console.log(compte.saldo);
compte.ingressar(20);
console.log(compte.saldo);
compte.mostrarSaldo();
compte.mostrarNom();
console.log(`Calle: ${compte.direccion.calle}`);
console.log(`Numero: ${compte.direccion.numero}`);

const referenciaCompte = compte;
console.log(referenciaCompte.titular);
const copiaCompte = {...referenciaCompte}; // Rest copia els valors, no la referencia

const productes1 = [{nombre: "raton", preu: 20}, {nombre: "teclado", preu: 35}, {nombre: "monitor", preu: 200}, {nombre: "RTX 5090", preu: 999999999}];
console.log(productes1); 

productesmas20 = productes1.filter(producte => producte.preu > 20);
console.log(productesmas20);

const persona = {nom2: "Joana", edat: 33};
const {nom2, edat} = persona;
console.log(nom2, edat)

const matricula = "5656XCV";
const modelo = "Ford";
const cotxe = {matricula, modelo};
console.log(cotxe);

const productes = [
    {id: 1, nom: "Teclat", preu: 39.99, estoc: 8, categoria: "Perifèrics"},
    {id: 2, nom: "Monitor", preu: 189.99, estoc: 3, categoria: "Pantalles"},
    {id: 3, nom: "Ratoli", preu: 25.60, estoc: 0, categoria: "Perifèrics"}
];
// console.log(productes[0].nom); // [0] accedir al primer
// console.log(productes.at(-1).nom); // .at(-1) per accedir a l'últim

//Recorrer i desestructurar

for( const{nom, preu, estoc} of productes) {
    const estat = estoc > 0 ? 'disponible' : 'esgotat';
    console.log(`${nom}: ${preu.toFixed(2)}€ - ${estat}`);
}

const disponibles = productes.filter((p)=> p.estoc > 0);
const etiquetes = productes.map(({nom, preu})=> `${nom} - ${preu}`);
console.log('Disponibles:', disponibles);
console.log(etiquetes);

// find --> cercar identificador = 2

let id2 = productes.find((p) => p.id === 2);
id2 = productes.find(({id}) => id === 2);
console.log(id2); 
let catPeriferics = productes.find( ({categoria} )=> categoria === "Perifèrics");

// Preu > 0, estoc >= 0
let dadesValides = productes.every(({preu, estoc}) => preu > 0 && estoc >= 0);
console.log(dadesValides); 

// reduce --> unitats totals
let unitatsTotals = productes.reduce((acumulador, {estoc}) => acumulador += estoc, 0);
console.log("Unitats totals:", unitatsTotals);

// Encadenar operacions
const aparador = productes
    .filter(({estoc}) => estoc > 0)
    .toSorted((a,b) => a.preu - b.preu)
    .map(({nom, preu}) => ({nom, preuAmbIva: preu * 1.21}));

console.log(aparador);


// Referències i Mutacions
// Operacions que mutan
    // 1. push, pop, shift, unshift
    // 2. splice
    // 3. sort, reverse
    // 4. obj.propietat = valor

// Alternatives inmutables
    // 1. spread (...), slice, concat
    // 2. slice, filter, toSpliced
    // 3. toSorted, toReversed
    // 4. {...obj, prop: valor}

// Patrons d'Actualització immutable
// Afegir i eliminar
const nou = {id: 4, nom: "Webcam", estoc: 5, preu: 55.90};
const ampliats = [...productes, nou];
console.log(ampliats);    

// Actualitzar
function canviarEstoc(llista, id, nouEstoc) {
    return llista.map(p => p.id === id ? {...p, estoc: nouEstoc} : p);

};
const actualitzats = canviarEstoc(ampliats, 4, 67);
console.log(actualitzats);

// Còpia superficial i dades imbricades
const usuari = {
    nom: "Pere",
    contacte: {
        correu: "pere@daw.ramis",
        ciutat: "Sevilla"
    }
};

const usuariActualitzat = {
    ...usuari,
    contacte: {
        ...usuari.contacte,
        ciutat: "València"        
    }
};
console.log(usuariActualitzat);