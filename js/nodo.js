/* ====== Nodo_1 ====== */
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){

    var div = document.getElementsByTagName("div")[0]; // Recorremos el arreglo de nodos hijos que nos devuelve la propiedad childNodes del elemento Div
    var text = "";

    for(var i = 0; i < div.childNodes.length; i++) {
        text += div.childNodes[i].nodeName + "<br>"; // Concatenamos el nombre de los nodos hijos a la variable de texto
    }

    document.getElementById("mensaje").innerHTML = text; // Cambiamos el HTML del párrafo con id mensaje con el string texto.
});

/* ====== Fin Nodo_1 ====== */

/* ====== Nodo_3 ====== */

var parrafo = document.createElement("p");
var text2 = document.createTextNode("Este añadir");

parrafo.appendChild(text2);
document.body.appendChild(parrafo);

/* ====== Fin Nodo_3 ====== */