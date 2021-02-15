// initialize scrollspy
$("body").scrollspy({
    target: ".dotted-scrollspy",
});

// initialize lightbox
$(function () {
    $("#mdb-lightbox-ui").load("../mdb-addons/mdb-lightbox-ui.html");
});

$(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse("hide");
});

/* WOW.js init */
new WOW().init();

function nuevo() {
    console.log("yaaaaaaaaa");
}

/* metodo o funcion ver cliente, lo usare como evento de un boton */
function fcliente() {
    document.getElementById("cliente").style["display"] = "block"; /* mostrar */
    document.getElementById("supervisor").style["display"] = "none"; /* ocultar */
    document.getElementById("caja").style["display"] = "none"; /* ocultar */
    document.getElementById("producto").style["display"] = "none"; /* ocultar */
}

function fsupervisor() {
    document.getElementById("cliente").style["display"] = "none"; /* ocultar */
    document.getElementById("supervisor").style["display"] = "block"; /* mostrar */
    document.getElementById("caja").style["display"] = "none"; /* ocultar */
    document.getElementById("producto").style["display"] = "none"; /* ocultar */
}
