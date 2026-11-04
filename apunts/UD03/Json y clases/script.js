// JSON: Javascript Object Notation

// Representar i intercanviar dades

const objecteJSON = [
    {
    "id": 5,
    "nom": "Joan",
    "preu": 10.3,
    "disponible": true,
    "etiquetes": ["audio", "bluetooth"],
    "fabricant": null
    }
];

// Serialització amb JSON.stringify
const producte = {
    id: 7,
    nom: "Auriculars",
    preu: 49.99
};
const text = JSON.stringify(producte);

console.log(text);
console.log(typeof text);
const textLlegible = JSON.stringify(producte, null, 2);
console.log(textLlegible);

const dada = {
    nom: "Prova",
    valor: undefined,
    calcular() {return 10},
    data: new Date("2026-11-03")
}

console.log(JSON.stringify(dada, null, 2));

// Deserialització amb JSON.parse
const nouProducte = {
    id: 7,
    nom: "Auriculars",
    preu: 49.99
};
try {
    let p = JSON.stringify(nouProducte);
    p = JSON.parse(p);
    console.log(p.nom);
    console.log(esValid(p));
}catch (error) {
    console.error("JSON no vàlid o incorrecte, ", error.message);
}

function esValid(p) {
    return p != null &&
    typeof p === "object" &&
    Number.isInteger(p.id) &&
    typeof p.nom === "string" && p.nom.trim() !== "" &&
    typeof p.preu === "number" && p.preu > 0;
}


// Classes

// class Producte {
//     constructor(id, nom, preu, estoc = 0) {

//         if(!Number.isInteger(id)) throw new TypeError("L'id ha de ser un valor enter.");
//         if(!nom?.trim()) throw new Error("El nom es obligatori.");

//         if(preu <= 0 || estoc < 0) throw new RangeError("Valors d'estoc incorrectes");
//         this.id = id;
//         this.nom = nom;
//         this.preu = preu;
//         this.estoc = estoc;
//     }

//     hiHaEstoc(unitats = 1) {
//         return this.estoc >= unitats;
//     }

//     valorEstoc() {
//         return this.preu * this.estoc;
//     }

//     get etiqueta() {
//         return `${this.nom} - ${this.preu.toFixed(2)}€`;
//     }

//     static desDeProducte(dades) {
//         return new Producte(dades.id, dades.nom, dades.preu, dades.estoc);
//     }


// }

// const teclat = new Producte(1, "Teclat", 29.99, 10);
// console.log(teclat.etiqueta);
// console.log(teclat);
// const ratoli = Producte.desDeProducte();

const productes = [
    new Producte(1, "Teclat", 29.99, 100),
    new Producte(2, "Ratolí", 14.95, 25)
];


// Perdemos metodos y todo lo que no guarda JSON.stringify()
const text1 = JSON.stringify(productes, null, 2);
console.log(text1);
const dades = JSON.parse(text1);
console.log(dades);

// Recuperar amb metode
const nousProductes = dades.map((p)=> {
    return Producte.desDeProducte(p)
});

console.log(nousProductes);
console.log(nousProductes[0].valorEstoc());