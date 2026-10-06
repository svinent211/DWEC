//Activitat contar vocals accents ` i ´ Mostrar text, longitud, cuantas vocals té, decidir si es text llarg (>=15 caracters) o curt (<15)
const entrada = 'Habitació d\'hotel'
let vocals = 0;
let dreta = 0;
let esquerra = 0;
let longitud = 0;
let dieresis = 0;

if(entrada) {
    //Guardar longitud
        longitud = entrada.length;
    //Contar vocals i accents
    for (let k = 0; k < entrada.length; k++) {
        let c = entrada[k].toLowerCase();
        if(c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
            vocals++;
        }
        if( c === 'á' || c === 'é' || c === 'í' || c === 'ó' || c === 'ú') {
            vocals++;
            dreta++;
        }
        if(c === 'à' || c === 'è' || c === 'ì' || c === 'ò' || c === 'ù') {
            vocals++;
            esquerra++;
        }
        if(c === 'ä' || c === 'ë' || c === 'ï' || c === 'ö' || c === 'ü') {
            vocals++;
            dieresis++;
        }
        

    }
    console.log(`La entrada és: ${entrada}
        Te una longitud de ${longitud} carácters
        Te ${vocals} vocals
        Te ${dreta} accents cap a la dreta
        Te ${esquerra} accents cap a l'esquerra
        Te ${dieresis} dieresis
        El text és ${longitud >= 15 ? 'llarg' : 'curt'}`);


}else {
    console.log("No hi ha entrada")
}