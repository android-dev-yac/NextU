/**
 * Created by vvelasquezs on 22/11/15.
 */
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