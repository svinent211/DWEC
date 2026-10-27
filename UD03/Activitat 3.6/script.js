// 3.6.1 Desestructura un array amb nom, primer llinatge i segon llinatge. Assigna un valor predeterminat al segon llinatge.

const array = ['Sergi', 'Vinent'];
const [nom, primerLlinatge, segonllinatge='Sintes'] = array;
console.log(`Nom complet: ${nom} ${primerLlinatge} ${segonllinatge}`);

// 3.6.2 Separa el primer element d’un array i guarda la resta mitjançant rest.
const array2 = [1,2,3,4,5,6];

const [primerElement, ...restant] = array2;
console.log(primerElement);
console.log(restant);

// 3.6.3 Combina dos arrays i afegeix un element al principi i un altre al final emprant spread.
const element1 = 'Element 1';
const elementFinal = 'Element final';
const arrayA = ['Llibre', 'nom'];
const arrayB = ['resta', 'array'];
const arraysCombinats = [element1, ...arrayA, ...arrayB, elementFinal];
console.log("Arrays combinats", arraysCombinats);

// 3.6.4 Crea un objecte llibre amb títol, autor, pàgines i un mètode resum() que mostri una frase descriptiva.
const llibre = {
    titol: 'Lord of mysteries',
    autor: 'CF',
    pagines: 1432,
    resum: function() {
        console.log(`${this.titol} és un llibre de l'autor ${this.autor} que consta de ${this.pagines} pagines.`)
    }
};
console.log(llibre.titol);
console.log(llibre['autor']);
let element = 'pagines'
console.log(llibre[element]);
llibre.resum();
// 3.6.5 Crea un objecte comptador amb una propietat valor i mètodes incrementar(), decrementar() i mostrar().
const comptador = {
    valor: 0,
    incrementar: function(quantitat) {
        this.valor += quantitat;
    },
    decrementar: function(quantitat) {
        this.valor -= quantitat;
    },
    mostrar: function() {
        console.log(`Valor actual: ${this.valor}`);
    }
}
comptador.mostrar();
comptador.incrementar(360);
comptador.decrementar(120);
comptador.mostrar();

// 3.6.6 Copia un producte amb spread, canvia’n el preu i comprova que l’original no s’ha modificat.

const producte2025 = {
    nom: 'RTX 5090',
    preu: 2500
};
console.log(`Producte 2025: ${producte2025.nom}\nPreu: ${producte2025.preu}`);

const producte2026 = {...producte2025};
producte2026.preu = 12000;
console.log(`Producte 2026: ${producte2026.nom}\nPreu: ${producte2026.preu}`);
console.log(`Producte 2025: ${producte2025.nom}\nPreu: ${producte2025.preu}`);