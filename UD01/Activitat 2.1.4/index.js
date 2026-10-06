const btnAjuda = document.getElementById("btnAjuda");
console.log(location.href) //Mostra la url
btnAjuda.addEventListener("click", () => {
    window.open("ajuda.html", "Pagina de ajuda", "width=600","height=450");
    
});
