// Requisits obligatoris
// ● Classe LiniaComanda amb producte, preu i quantitat; mètode subtotal().
// ● Classe Comanda amb id, client, estat i línies; mètodes total(), totalUnitats() i resum().
// ● Mètodes estàtics desDeObjecte per reconstruir totes les instàncies imbricades.
// ● Funció importarComandes(text): parse segur, validació i missatges d’error.
// ● afegirComanda, eliminarComanda i canviarEstat han de retornar arrays nous.
// ● Cerca per client, filtre per estat i ordenació per total sense mutar l’original.
// ● Informe amb facturació total, comanda més cara, nombre de comandes per estat i productes venuts.
// ● Exportació final amb JSON.stringify(..., null, 2).
const textInicial = '[{"id":101,"client":"Aina","estat":"pendent","linies":[{"producte":"Teclat","preu":39.95,"quantitat":2}, {"producte":"Ratolí","preu":24.5,"quantitat":1}]},{"id":102,"client":"Biel","estat":"enviada","linies":[{"producte":"Monitor","preu":189.9,"quantitat":1}]}]';

class LiniaComanda {
    constructor(producte, preu, quantitat) {
        if(typeof producte !== "string" || producte.trim() === "") throw new TypeError("El producte ha de ser un string no buit");
        if(!Number.isFinite(preu) || preu < 0) throw new RangeError(`El preu de ${producte} ha de ser >= 0`);
        if(!Number.isInteger(quantitat) || quantitat <= 0) throw new RangeError(`La quantitat de ${producte} ha de ser un enter > 0`);
        this.producte = producte;
        this.preu = preu;
        this.quantitat = quantitat;
    }

    subtotal() {
        return this.preu * this.quantitat;
    }

    static desDeObjecte(dades) {
        if(dades === null || typeof dades !== "object") throw new TypeError("L'entrada ha de ser un objecte");
        
        return new LiniaComanda(dades.producte, dades.preu, dades.quantitat);
    }

}

class Comanda {
    constructor(id, client, estat, linies) {
        if(!Number.isInteger(id)) throw new TypeError(`L'id ha de ser un valor enter.`);
        if(typeof client !== "string" || client.trim() === "") throw new TypeError("El client ha de ser un string no buit");
        if(typeof estat !== "string" || estat.trim() === "") throw new TypeError("L'estat ha de ser un string no buit");
        if(!Array.isArray(linies)) throw new TypeError(`Les linies han de ser un array`);
        linies.forEach((l) => {
            if(!(l instanceof LiniaComanda)) throw new TypeError('Linies ha de ser un array de LiniaComanda');
        });
        if(id <= 0) throw new Error("L'id ha de ser major a 0");
        this.id = id;
        this.client = client;
        this.estat = estat;
        this.linies = [...linies];


    }

    total() {
        return this.linies.reduce((acumulador, liniaActual) => acumulador + liniaActual.subtotal(), 0);
    }
    totalUnitats() {
        return this.linies.reduce((acumulador, liniaActual) => acumulador + liniaActual.quantitat, 0);
    }

    resum() {
        return `\tComanda id: ${this.id}\n\tProductes: ${this.linies.length}\n\tTotal unitats: ${this.totalUnitats()}\n\tTotal: ${this.total().toFixed(2)}€`;
    }

    static desDeObjecte(dades) {
        if(dades === null || typeof dades !== "object" || Array.isArray(dades) ) throw new TypeError("L'entrada ha de ser un objecte");
        if(!Array.isArray(dades.linies)) throw new Error("L'entrada ha de tenir l'array 'linies'");
        const linies = dades.linies.map((l)=> LiniaComanda.desDeObjecte(l));
        return new Comanda(dades.id, dades.client, dades.estat, linies);
    }

    toJSON() {
        return {id: this.id, client: this.client, estat: this.estat, linies: this.linies};
    }
}

function importarComandes(text) {
    const errors = [];
    const comandes = [];

    try {
        const array = JSON.parse(text);
        const ids = [];

        if(!Array.isArray(array)) throw TypeError("El text importat ha de ser un array");

        array.forEach((comanda, index)=> {
            try {

                if(ids.includes(comanda.id)) throw new Error("L'id ha de ser unic");
                
                comandes.push(Comanda.desDeObjecte(comanda));
                ids.push(comanda.id);
            }catch (error) {
                errors.push(`Posició nº${index+1}: ${error.message}`);
            }
        });
    }catch(error) {
        errors.push("Error d'importació:" + error.message);
    }
    return {comandes, errors};
}
function afegirComanda(comandes, comanda) {
    if (!(comanda instanceof Comanda)) throw new TypeError("Nomes pots afegir instancies de comanda");
    return [...comandes, comanda];
}
function eliminarComanda(comandes, id) {
    return comandes.filter((c) => c.id !== id);
}
function canviarEstat(comandes, id, estat) {
    if(typeof estat !== "string" || estat.trim() === "") throw new TypeError("Error d'entrada: No s'ha pogut modificar l'estat, l'entrada ha de ser un string no buit");
    return comandes.map((c) => c.id === id ? new Comanda(c.id, c.client, estat, c.linies) : c);
}
function cercaPerClient(comandes, client) {
    client = client.trim().toLowerCase();
    return comandes.filter((comanda)=> comanda.client.toLowerCase().includes(client));
}

function filterPerEstat(comandes, estat) {
    estat = estat.trim().toLowerCase();
    return comandes.filter((comanda)=> comanda.estat.toLowerCase() === estat);
}

function ordenarPerTotal(comandes) {
    comandes = [...comandes];
    return comandes.sort((a, b)=> b.total() - a.total());
    
}

function informe(comandes) {
    if(!Array.isArray(comandes) || comandes.length == 0 || !(comandes.at(0) instanceof Comanda)) throw new TypeError('Comandes ha de ser un array no buit'); 
    const total = comandes.reduce((acumulador, c) => acumulador + c.total(), 0);
    const mesCar = comandes.reduce((mesCar, c) => mesCar.total() > c.total() ? mesCar : c, comandes[0]);

    const estats = [];
    let respostaEstats = '';
    comandes.forEach((c) => estats.includes(c.estat) ?  '' : estats.push(c.estat));
    estats.forEach((e) => {
        const length = comandes.filter((c) => c.estat === e).length;
        respostaEstats += 'Nº comandes amb estat ' + e + ':' + length + `\n`;
    });

    const nProductes = comandes.reduce((ac, c) => ac + c.totalUnitats(), 0);
    return `Informe facturació\nNºProductes: ${nProductes}\n\nComanda mes cara: \n${mesCar.resum()}\n\n${respostaEstats}Total: ${total.toFixed(2)}€`;

}

function exportarComandes(comandes) {
    return JSON.stringify(comandes, null, 2);
}

const text1comanda = JSON.parse(`{"id":103,"client":"Sergi","estat":"pendent","linies":[{"producte":"Teclat","preu":39.95,"quantitat":2}, {"producte":"Ratolí","preu":24.5,"quantitat":1}]}`);
const comanda = Comanda.desDeObjecte(text1comanda);
console.log(comanda);

let {comandes, errors} = importarComandes(textInicial);
console.log('Comandes', comandes);
console.log('Errors', errors)

comandes = afegirComanda(comandes, comanda);
console.log(`Afegir comanda: `, comandes);
comandes = eliminarComanda(comandes, 103);
console.log(`Eliminar comanda: `, comandes);
comandes = canviarEstat(comandes, 101, 'entregat');
console.log(`Canviar estat: `, comandes);
console.log('Cerca per client', cercaPerClient(comandes, 'Aina'));
const ordenat = ordenarPerTotal(comandes);
console.log('Array ordenat DESC', ordenat);
console.log('Preus per ordre del nou array')
ordenat.forEach((c)=> console.log(c.total()));
console.log('Array no modificat', comandes);

console.log(informe(comandes));

const string = exportarComandes(comandes);
console.log(string);

const mostrarMissatge = document.querySelector(".mostrarMissatge");
mostrarMissatge.innerHTML = `<h2>Informe</h2><pre>${informe(comandes)}</pre><h2>Exportació</h2><pre>${exportarComandes(comandes)}</pre>`;