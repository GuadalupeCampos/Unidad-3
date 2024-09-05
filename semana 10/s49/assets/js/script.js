$(document).ready(function(){
document.querySelector("#title").innerHTML = "DOM con JS";
//Con JQuery
$("#title").html("DOM con JQuery");

//Seleccionar por clase
$(".demo").html("Clase seleccionada");
//solo usar el primero de una clase
$(".demo").first().html("Primer elemento de la clase");

//Seleccionar elemento y cambiar un atributo
// .attr ("atributo", "valor")
$ ("img").attr(
    "src",
    "https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg"
);
$("img").attr("title", "Un koala");
//Evento de click 
$("#btn").click(() => $("#resultado").toggle());
});
