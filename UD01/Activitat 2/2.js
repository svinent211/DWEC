const nota = 10;
const valid = nota >= 0 && nota <= 10;
if (valid) {
    if (nota >=9) {
        console.log('Excel·lent');
    }else if (nota >=7) {
        console.log('Notable');
    }else if (nota >= 5) {
        console.log('Bé');
    }else {
        console.log('Suspès');
    }
}else {
    console.log('La nota no es un valor vàlid (entre 0 i 10');
}



// 2.2.2

for (let i = 1; i <=30; i++) {
    let mult3 = i % 3 === 0;
    let mult5= i % 5 === 0;
    let both = mult3 && mult5;

    if (both) {
        console.log(`${i} FizzBuzz`);
    }else if (mult3) {
        console.log(`${i} Fizz`);
    }else if (mult5) {
        console.log(`${i} Buzz`);
    }else {
        console.log(`${i}`);
    }
}

// 2.2.3

const paraula = 'Estadístiques';
let vocals = 0;
for (let k = 0; k < paraula.length; k++) {
    let c = paraula[k].toLowerCase();
    if(c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u' || c === 'á' || c === 'é' || c === 'í' || c === 'ó' || c === 'ú' ||  c === 'à' || c === 'è' || c === 'ì' || c === 'ò' || c === 'ù') {
        vocals++;
        console.log(vocals);
    }
}

console.log(`Longitud: ${paraula.length}`);
console.log(`1ra lletra: ${paraula.charAt(0)}`);
console.log(`Última lletra: ${paraula.charAt(paraula.length-1)}`);
console.log(`Majúscules: ${paraula.toUpperCase()}`);
console.log(`Nº de vocals: ${vocals}`);


// 2.2.4

const opcio = 'crear';
switch (opcio) {
    case 'crear':
        console.log('Creat');
        break;
    case 'consultar':
        console.log('Consultant');
        break;
    case 'modificar':
        console.log('Modificat');
        break;
    case 'eliminar':
        console.log('Eliminat');
        break;
    default:
        console.log('Opció desconeguda');
        break;
}


// 2.2.5

const entrada = ' Ser _gi ';
const nom = entrada.trim();
const caractersvalids = '1234567890qwertyuiopasdfghjklñzxcvbnm_-';
let esValid = true;
let motiu = '';
if (nom.length > 15 || nom.length < 4) {
    esValid = false;
    motiu = 'debe tener entre 4 y 15 caracteres.';
}else {
    
    for(const lletra of nom.toLowerCase()) {
        if(lletra === ' ') {
            esValid = false;
            motiu = 'no puede tener espacios interiores.';
            break;  
        }
        if(!caractersvalids.includes(lletra)) {            
            esValid = false;
            motiu = 'caracter invalido, solo se permiten numeros, letras, guion o guion bajo.';
            break;
        }
        
    }
}
if(esValid) {
    console.log("El nombre es válido.");
}else {
    console.log(`El nombre no es válido: ${motiu}`);
}
