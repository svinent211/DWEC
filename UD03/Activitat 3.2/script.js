const btnPagar = document.getElementById("btnPagar");
const inputHoraEntrada = document.getElementById("inputHoraEntrada");
const inputHoraSortida = document.getElementById("inputHoraSortida");
const inputTipus = document.getElementById("inputTipus");
const info = document.getElementById("info");

btnPagar.addEventListener("click", ()=> {
    info.innerHTML = "";
    //Guardar hores entrada y sortida sense espais
    const horaEntrada = inputHoraEntrada.value.trim();
    const horaSortida = inputHoraSortida.value.trim();
    
    if(!esHoraValida(horaEntrada)) {
        //Mostrar error si la hora no és vàlida
        info.innerHTML = `<p style="color: red;">La hora d'entrada no segueix el format d'hora (HH:MM)</p>`;
    }else if (!esHoraValida(horaSortida)) {
        info.innerHTML = `<p style="color: red;">La hora de sortida no segueix el format d'hora (HH:MM)</p>`;
    }else {
        //Calcular durada de l'estacionament
        const minuts = calcularDurada(horaEntrada, horaSortida);
        //Calcular l'import base (sense descomptes)
        const importBase = calcularImportBase(minuts);

        let descompte;
        let tipusDescompte;

        //Segons la opció escollia elegir el callback
        switch(inputTipus.value) {
 
            case 'electric':
                descompte = descompteElectric;
                tipusDescompte = 'Vehicle elèctric';
                break;
            case 'resident':
                descompte = descompteResident;
                tipusDescompte = 'Resident';
                break;
            default:
                descompte = senseDescompte;
                tipusDescompte = 'Sense descompte';
                break;
        }
        // Calcular import final amb descompte
        const importFinal = calcularImportFinal(importBase, descompte);
        // Mostrar resum de l'estacionament
        info.innerHTML = `
        <div style="padding-left: 20px; border: 1px solid black; max-width: 400px">
            <h2>RESUM DE L’ESTACIONAMENT</h2>
            <p>Entrada: ${horaEntrada}</p>
            <p>Sortida: ${horaSortida}</p>
            <p>Durada: ${formatarDurada(minuts)}</p>
            <p>Import Base: ${importBase.toFixed(2)}</p>
            <p>Tipus de descompte: ${tipusDescompte}</p>
            <p>Descompte: ${descompte(importBase).toFixed(2)}</p>
            <h3>TOTAL: ${importFinal.toFixed(2)}€</h3>
        </div>
        `;


    }


    
});



function esHoraValida(hora) {
    //Es valida que l'hora segueixi el format HH:MM
    if(hora.length !== 5) {
        return false;
    }else if (hora.substring(0,2)*1 < 0 || hora.substring(0,2)*1 > 23) {
        return false;
    }else if (hora.substring(3,5)*1 < 0 || hora.substring(3,5)*1 > 59) {
        return false;
    }else if (hora.charAt(2) !== ':') {
        return false;
    }
    return true;
}




function senseDescompte(importBase) {
    return importBase * 0;
}

function descompteElectric(importBase) {

    return importBase * 0.2;
}

function descompteResident(importBase) {

        return importBase * 0.3;
}

// També s’ha de crear una funció que rebi una altra funció com a paràmetre:
function calcularImportFinal(importBase, aplicarDescompte) {
    const importTotal = importBase - aplicarDescompte(importBase);
    return importTotal;
}


function convertirAMinuts(hora) {
// Converteix "08:35" en minuts
    const horaAminuts = hora.substring(0,2)*60;
    return horaAminuts + hora.substring(3,5)*1;

}

function calcularDurada(entrada, sortida) {
// Calcula la durada i té en compte el canvi de dia
    const minutsEntrada = convertirAMinuts(entrada);
    const minutsSortida = convertirAMinuts(sortida);
    const mateixDia = minutsEntrada < minutsSortida;

    if (mateixDia) {
        return minutsSortida - minutsEntrada;
    }else {
        return (1440 - minutsEntrada) + minutsSortida;
    }

}

function calcularImportBase(minuts) {
// Aplica les tarifes progressives
    let importBase = 0;    
    if(minuts < 31) return 0;
    if(minuts >= 301) {
        const tier3 = (minuts - 300);
        importBase += tier3*0.01;
        minuts -= tier3;
    }
    if (minuts >=121) {
        const tier2 = (minuts - 120);
        importBase += tier2*0.02;
        minuts -= tier2;
    }
    if (minuts >=31) {
        const tier1 = (minuts - 30);
        importBase += tier1*0.03;
        minuts -= tier1;
    }
    return importBase > 18 ? 18 : importBase;;
    
}

function formatarDurada(minuts) {
// Retorna un text com "2 h i 45 min"
    let hores = 0;
    while (minuts >= 60) {
        hores++;
        minuts -= 60;
    }
    return `${hores} h i ${minuts} min`;
}