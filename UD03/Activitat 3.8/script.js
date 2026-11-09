class CompteBancari {
    constructor(titular, saldo = 0) {

        if(typeof titular !== "string" || titular.trim() === "") throw new Error(`Es obligatori tenir titular.`);
        if(typeof saldo !== "number" || saldo < 0) throw new RangeError("El saldo ha de començar en positiu");
        this.titular = titular;
        this.saldo = saldo;
    }
    
    ingresar(quantitat) {
        
        if(typeof quantitat !== "number" || quantitat <= 0) throw new RangeError("La quantitat ha de ser un nombre positiu");
        this.saldo += quantitat;
        
        
    }

    retirar(quantitat) {

        if(typeof quantitat !== "number" ||  quantitat <= 0 || quantitat > this.saldo) throw new RangeError("La quantitat ha de ser un nombre positiu i no se pot retirar més del que hi ha al compte");
        
        this.saldo -= quantitat;
    }
    transferirA(altreCompte, quantitat) {
        if(altreCompte === this || !altreCompte instanceof CompteBancari) throw new TypeError("El destí ha de ser un altre compte bancari")
        this.retirar(quantitat);
        altreCompte.ingresar(quantitat);
    }
    get resum() {
        return `Titular: ${this.titular} \nSaldo: ${this.saldo.toFixed(2)}`;
    }
    toJSON() {
        return {titular: this.titular, saldo: this.saldo};
    }

    static desDeObjecte(dades) {
        if (typeof dades !== "object") throw new TypeError("L'entrada ha de ser un objecte");
        return new CompteBancari(dades.titular, dades.saldo);
    }

}

const c1 = new CompteBancari("Sergi", 2048.37);
const c2 = new CompteBancari("David", 67.67);
const c3 = new CompteBancari("Sebas", 5434.21);

console.log("Comptes origen")
console.log(c1, c2, c3);
prova("c1 ingressar 'a'", () => c1.ingresar("a"));
prova("c2 ingressar -10", () => c2.ingresar(-10));
prova("c3 ingressar 121.34", () => c3.ingresar(121.34));


console.log("Després de l'ingres");
console.log(c1.resum);
console.log(c2.resum);
console.log(c3.resum);
prova("c1 retirar ''", () => c1.retirar(""));
prova("c2 retirar 0.01", () => c2.retirar(0.01));
prova("c3 retirar 500", () => c3.retirar(500));

console.log("Després de retirar");
console.log(c1, c2, c3);
const saldoTotal = [c1, c2, c3].reduce((acumulador, c) => acumulador + c.saldo, 0);
console.log("Saldo total: ", saldoTotal);

const json1 = c1.toJSON()
console.log(json1);
const json2 = c2.toJSON()
console.log(json2);
const json3 = c3.toJSON()
console.log(json3);
const cb1 = provaReturn("DesdeObjecte json1", ()=> CompteBancari.desDeObjecte(json1));
const cb2 = provaReturn("DesdeObjecte json2", ()=> CompteBancari.desDeObjecte(json2));
const cb3 = provaReturn("DesdeObjecte json3", ()=> CompteBancari.desDeObjecte(json3));
console.log(cb1, cb2, cb3);


function prova(etiqueta, operacio) {
    try {
        operacio();
        console.info(`${etiqueta}: Exitòs`);

    } catch (error) {
        console.error(`${etiqueta}: ${error.message}`);
    }
}
function provaReturn(etiqueta, operacio) {
    try {
        const resultat = operacio();
        console.info(`${etiqueta}: Exitòs`);
        return resultat;

    } catch (error) {
        console.error(`${etiqueta}: ${error.message}`);
    }
}


// REVISA OPENCODE. ERRORES CRITICOS