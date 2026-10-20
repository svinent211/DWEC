// 3.5.1 Empra find per obtenir la primera temperatura inferior a zero i controla el cas en què no existeixi.
const temperatures = [20, -5, 15, 30, 44];
let menor0 = temperatures.find(t => t < 0);
if (menor0 !== undefined) {
    console.log(menor0);
}else {
    console.log('No hay ninguna temperatura bajo 0')
}

// 3.5.2 Comprova amb some si un array conté algun múltiple de 5.
const arrayNumeros = [2, 3, 6, 21, 20, 99];
let teMultiple5 = arrayNumeros.some((n) => n % 5 === 0);
console.log(`Conté algun múltiple de 5?: ${teMultiple5}`);

// 3.5.3 Comprova amb every si totes les contrasenyes d’un array tenen almenys vuit caràcters.
const passwords = ['password','pass1234', 'qa1234', '01011996'];
let totes8oMes = passwords.every((p) => p.length >= 8);
console.log(`Totes les password tenen almenys 8 caràcterrs: ${totes8oMes}`);

// 3.5.4 Calcula amb reduce el total i la mitjana d’un array de despeses.
const despeses = [900, 20, 200, 250, 28.99];
let total = despeses.reduce((acumulador, despesaActual) => acumulador + despesaActual, 0);
let mitjana = (total / despeses.length);
console.log(
`Total despeses = ${total.toFixed(2)}
Mitjana despeses = ${mitjana.toFixed(2)}`);

// 3.5.5 Ordena una còpia d’un array de nombres de major a menor sense modificar l’original.
copia = arrayNumeros.slice();
copia.sort((a, b) => b - a);
console.log(`Original = ${arrayNumeros}`);
console.log(`Copia = ${copia}`);

// 3.5.6 A partir d’un array de paraules, troba la primera que comenci per vocal, comprova si totes tenen contingut i calcula el total de caràcters.
const arrayParaules = ['Devorar', 'Domicilio', 'Alardear', '', 'Casa', 'Ordenador'];
const primerVocal = arrayParaules.find((paraula) => esVocal(paraula.charAt(0)));
const totesContingut = arrayParaules.every(p => p.length > 0);
const totalCaracters = arrayParaules.reduce((acumulador, paraulaActual) => acumulador + paraulaActual.length, 0);

console.log(`Arrau paraules: ${arrayParaules}`);
console.log(`Primera que comença per vocal: ${primerVocal}`);
console.log(`Totes tenen contingut: ${totesContingut}`);
console.log(`Total caràcters: ${totalCaracters}`);

function esVocal (c) {
    return 'aàáeèéiíìoòóuùú'.includes(c.toLowerCase());
}