var myJSON = [
    {
        "codigo" : "001",
        "nombre" : "Virginia"
    },{
        "codigo" : "002",
        "nombre" : "Andrés"
    },{
        "codigo" : "003",
        "nombre" : "John"
    }
];

function leerJSON(json) {
    var outs = "";
    var i;
    for(i = 0; i<json.length; i++){
    outs += "Código: " + json[i].codigo + " " +"Nombre: " + json[i].nombre + "<br>";
    }
    document.getElementById("datos").innerHTML = outs;

}
leerJSON(myJSON);


