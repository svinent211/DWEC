console.log('Hola');
/*
Comentario en bloque
*/
// Comentario en linea

/*
    CONCEPTES
    windows     windows.location.href
    document    document.title
    iframe      <iframe src="pagina2.html/>"
    window.open window.open(url, nom)
    opener 

*/

//console.log('window.location.href: ', window.location.href);
//console.log('document.title:', document.title);

const btnObrir = document.getElementById("btnObrir");
btnObrir.addEventListener('click', () => {
    const finestra = window.open('../../ajuda.html', 'ajuda', 'width=800','height=1000');
    
    if(!finestra) {
        console.warn('El navegador ha blocat la finestra emergent');
    }
});

