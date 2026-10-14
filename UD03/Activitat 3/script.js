
const inputNombre = document.getElementById("inputNombre");
const divResposta = document.getElementById("divResposta");


inputNombre.addEventListener("change", ()=> {

    //Agafar valor de l'input i pasar type a number
    const nombre = inputNombre.value * 1;

    // Controlar que sigui nombre ent
    if (!nombre || nombre <= 0 || !Number.isInteger(nombre)) {
        divResposta.textContent = 'Entrada invalida. Introdueix un nombre enter positiu'
        return;
    }
    
    // Guardar dades
    let sumaDivisorsPropisR = sumaDivisorsPropis(nombre);
    
    // Insertar dades dins el div
    divResposta.textContent = `ANÀLISI DEL NOMBRE ${nombre}
    ${esParell(nombre) ? 'És parell' : 'És imparell'} 
    ${esPrimer(nombre) ? 'És primer' : 'No és primer'}
    Divisors propis: ${divisorsPropis(nombre)}
    Suma dels divisors propis: ${sumaDivisorsPropisR}
    El nombre ${nombre} és ${classificarNombre(nombre, sumaDivisorsPropisR)}. 
`;
});


//Funcions

function esParell(nombre) { 
 
    return nombre % 2 === 0;
} 
function esPrimer(nombre) { 
    
    if (nombre < 2) return false; // El 1 no es primo
    for(let i = 2; i < nombre; i++) {
        if (nombre % i === 0) return false;
    }
    return true;
}

function divisorsPropis(nombre) {
    let text = "1";
    for(let i = 2; i < nombre; i++) {
        if (nombre % i === 0) text += `, ${i}`;
    }
    return text;
}

function sumaDivisorsPropis(nombre) { 
    let total = 0;
    for(let i = 1; i < nombre; i++) {
        if (nombre % i === 0) total += i;
    }
    return total;
} 

function classificarNombre(nombre, sumaDivisors) { 
    if(sumaDivisors > nombre) return 'abundant';
    if(sumaDivisors < nombre) return 'deficient';
    if(sumaDivisors === nombre) return 'perfecte';
    }

