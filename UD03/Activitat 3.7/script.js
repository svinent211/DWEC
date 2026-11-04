
class Producte {
    constructor(id, nom, preu, estoc = 0) {

        if(!Number.isInteger(id)) throw new TypeError(`L'id ha de ser un valor enter.`);
        if(typeof nom !== "string" || !nom?.trim()) throw new Error(`El nom es obligatori.`);
        if(typeof estoc !== "number" || estoc < 0 || !Number.isInteger(estoc)) throw new RangeError("Valors d'estoc incorrectes");
        if(typeof preu !== "number" || preu <= 0) throw new RangeError("El preu ha de ser superior a 0");
        this.id = id;
        this.nom = nom;
        this.preu = preu;
        this.estoc = estoc;
    }

    hiHaEstoc(unitats = 1) {
        return this.estoc >= unitats;
    }

    valorEstoc() {
        return this.preu * this.estoc;
    }

    get etiqueta() {
        return `${this.nom} - ${this.preu.toFixed(2)}€`;
    }

    static desDeProducte(dades) {
        return new Producte(dades.id, dades.nom, dades.preu, dades.estoc);
    }

}

const productesOrigin = [
    new Producte(1, "Teclat", 29.99, 100),
    new Producte(2, "Ratolí", 14.95, 25)
]
function importarProductes(textJSON) {

    const productes = [];
    const errors = [];
    try {
        const productesParsed = JSON.parse(textJSON);
        const ids = [];
        
        if(!Array.isArray(productesParsed)) throw Error(` El text importat ha de ser un array`);
        
        productesParsed.forEach((p, index)=> {
                try {
                    if(p === null || typeof p !== "object") throw new TypeError("El registre ha de ser un objecte");
                    if(!Number.isInteger(p.id)) throw new TypeError(`L'id ha de ser un valor enter.`);
                    if(ids.includes(p.id)) throw new Error(`L'id ha de ser unic.`);
                    if(typeof p.nom !== "string" || !p.nom?.trim()) throw new Error(`El nom es obligatori.`);
                    if(typeof p.estoc !== "number" || p.estoc < 0 || !Number.isInteger(p.estoc)) throw new RangeError("Valors d'estoc incorrectes");
                    if(typeof p.preu !== "number" || p.preu <= 0) throw new RangeError("El preu ha de ser superior a 0");
                    productes.push(Producte.desDeProducte(p));
                    ids.push(p.id);
                }catch (error) {
                    errors.push(`Posició ${index}: ${error.message}`);
                }
            });




    }catch (error) {
        errors.push(`Error d'importació: ${error.message}`);
    }


    return {productes, errors};
}





console.log("1. JSON mal format");
console.log(importarProductes('{ id: 1, nom: "Teclat" }'));
console.log("2. Arrel no array");
console.log(importarProductes('{"id": 1, "nom": "Teclat"}'));
console.log("3. Validacions individuals");
console.log(importarProductes(`[
    {"id": 1, "nom": "Teclat", "preu": 20, "estoc": 5},
    {"id": 2, "nom": "", "preu": 15, "estoc": 5},
    {"id": 3, "nom": "Ratolí", "preu": -5, "estoc": 5},
    {"id": 4, "nom": "Pantalla", "preu": 100, "estoc": 2.5},
    {"id": 5, "nom": "Monitor", "preu": 100, "estoc": 10}
]`));
console.log("4. IDs duplicats");
console.log(importarProductes(`[
    {"id": 1, "nom": "", "preu": 20, "estoc": 5},
    {"id": 1, "nom": "Teclat", "preu": 20, "estoc": 5},
    {"id": 1, "nom": "Ratolí", "preu": 15, "estoc": 10}
]`));

console.log("5. Valors limit i instancies");

const resultat = importarProductes(`[
    {"id": 0, "nom": "Producte mínim", "preu": 0.01, "estoc": 0},
    {"id": 1, "nom": "Producte normal", "preu": 100, "estoc": 1},
    {"id": 2, "nom": "Preu zero", "preu": 0, "estoc": 5},
    {"id": 3, "nom": "Estoc negatiu", "preu": 10, "estoc": -1}
]`);

console.log(resultat);
console.log("Són instàncies de Producte:", resultat.productes.every(p => p instanceof Producte));
