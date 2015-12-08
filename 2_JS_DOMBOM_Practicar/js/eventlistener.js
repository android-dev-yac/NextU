/* ======  Evenlistener_7 ====== */

var nombre = "Virginia";
var edad = 30;
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    saludos(nombre, edad);
});

function saludos(nombre, edad){
    var text = "";
    text += "<li>" + nombre + "</li>" + "<li>" + edad + "</li>"
    document.getElementById("list").innerHTML = text;
}
/* ======  Fin Evenlistener_7 ====== */

/* ======  Evenlistener_8 ====== */

var btn = document.getElementById("btn");
var formWidth = document.getElementById("formText").value;
var cambioWidth = document.getElementById("formText");
btn.addEventListener("click", function(){
    cambioWidth.style.width = formWidth;
});
alert("funciona");

/* ======  Fin Evenlistener_8 ====== */