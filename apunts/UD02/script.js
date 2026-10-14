// Funcions, paràmetres, retorn i callback

// Funcions         Agrupar i reutilitzar un comportament
// Parametres       Fer configurable una funció
// Arrow functions  Compactar sintaxi; funcions com a valor
// CallBack         Delegar una acció a una altra funció

function saludar() {
    console.log('Hola cara de bola');
}

function calcularAreaRectangle(base, altura) {
    return base * altura;
}
let area = calcularAreaRectangle(10, 20);
console.log(area);

// Expressions de funció
const calcularDescompte = function(preu, percentatge) {
    return preu * percentatge / 100;
}
console.log(calcularDescompte(30,5));

// Factorial de un número: 4! = 4*(4-1)*(4-2)*(4-3) = 4*3*2*1

const factorial = function calcularFactorial(numero) {
    if (numero < 1) return 1;
    return numero * calcularFactorial(numero-1);

}

console.log(factorial(6));


// Funcions com a valors

function saludar(nom) {
    return `Hola, ${nom}`;
}

const saluda = saludar;

console.log(saluda('Sergi'));

function crearMissatge(nom, modul) {
    return `${nom} cursa ${modul}`;
}
console.log(crearMissatge('Sergi'));
console.log(crearMissatge('Sergi', 'DWEC'));
console.log(crearMissatge('Sergi', true));


// Paràmetres REST
function sumar(... numeros) {
    let total = 0;

    for(const numero of numeros) {
        total += numero;
    }
    return total;
}
console.log(sumar(1,2,3,4,5,6));

// function calcularMitjana(nota1, nota2) {
//     if(!Number.isFinite(nota1) || !Number.isFinite(nota2)) {
//         return null;
//     }
//     return (nota1+nota2)/2;
// }

// Hecho con REST
function calcularMitjana(... notas) {
    let total = 0;
    for(const nota of notas) {
        if(!Number.isFinite(nota)) {
            return null;
        }
        total += nota;
    }
    return total / notas.length;
}

console.log(calcularMitjana(1,2,3,4,5,6,7));

// Arrow functions

const multiplicar = (a, b) => {
    return a * b;
};
console.log(multiplicar(2,6));


const retornObjecte = nom => ({nom: nom, actiu: true});


console.log(retornObjecte('Sergi'));


// CALLBACKS

// function executarOperacio(a,b, operacio) {
//     return operacio(a,b);
// }

// function sumar(a,b) {
//     return a + b;
// }

// const resultat = executarOperacio(4, 3, sumar);
// resultat = executarOperacio(10, 2, (a, b) => a / b);
// console.log(resultat);

function procesar(texto, transformacio) {
    let trimmed = texto.trim();

    return transformacio(trimmed);
}

const majuscules = texto => texto.toUpperCase();
const contarCaracteres = texto => texto.length;

let resultat = procesar('  Palabra ', majuscules);
console.log(resultat);
console.log(procesar('  Palabra ', contarCaracteres));

// Callbacks síncron i asíncrons
// Síncron
function saludar1(nom, callback) {
    console.log(`Hola ${nom}`);
    callback();
    console.log(`La funció ha acabat`);
}

console.log('Inici del programa')
saludar1("Joan", ()=> {
    console.log('Estic executant el callback!');

});
console.log('Final del programa');

// Asíncron

// console.log("Inici");

// setTimeout(()=> {
//     console.log('Han pasat 2 segons...');
// }, 2000);

// console.log("Final");

function executarAsincronament(callback, temps) {
    console.log("Abans d'executar el callback");

    setTimeout(callback, temps);

    console.log("Després de programar el callback");
}

executarAsincronament(()=> {
    console.log("Callback asíncron");
}, 3000);