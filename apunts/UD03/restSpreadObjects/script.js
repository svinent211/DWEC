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

const productes = [{nombre: "raton", preu: 20}, {nombre: "teclado", preu: 35}, {nombre: "monitor", preu: 200}, {nombre: "RTX 5090", preu: 999999999}];
console.log(productes); 

productesmas20 = productes.filter(producte => producte.preu > 20);
console.log(productesmas20);

const persona = {nom2: "Joana", edat: 33};
const {nom2, edat} = persona;
console.log(nom2, edat)

const matricula = "5656XCV";
const modelo = "Ford";
const cotxe = {matricula, modelo};
console.log(cotxe);