var estudiantes = [];

var btnRegistrar = document.getElementById("btn-registar");
var btnMostrarRegistrar = document.getElementById("btn-mostraregistrar");
var btnMostrarMayor = document.getElementById("btn-mostrarmayor");
var btnMostrarMenor = document.getElementById("btn-mostrarmenor");

// Boton Registar Estudiante
btnRegistrar.addEventListener("click", function () {

    var formCodigo = document.getElementById("formCodigo").value;
    var formNombre = document.getElementById("formNombre").value;
    var formNotas = document.getElementById("formNotas").value;

    if (formCodigo==null || formCodigo=="", formNombre==null || formNombre=="", formNotas==null || formNotas=="")
    {
        alert("Por favor rellene Campo Obligatorio");
        return false;
    }

    var estudianteNuevo = {
        "codigo": formCodigo,
        "nombre": formNombre,
        "notas": formNotas
    };
    estudiantes.push(estudianteNuevo);

    var clearField = document.getElementsByName('question')
    for(var i = 0; i < clearField.length; i++){
        clearField[i].value = '';
    }
    å
});

/*=============== Boton Mostrar Registrar ===============*/
btnMostrarRegistrar.addEventListener("click", function () {
    var resultado = "";
    resultado += '<table>' + '<thead><tr><th>Código</th><th>Nombre</th><th>Nota</th></tr></thead>';
    for (var i = 0; i < estudiantes.length; i++) {
        resultado += '<tbody><tr><td>' + estudiantes[i].codigo + '</td>';
        resultado += '<td>' + estudiantes[i].nombre + '</td>';
        resultado += '<td>' + estudiantes[i].notas + '</td></tr></tbody>';
    }
    resultado += '</table>'
    document.getElementById('tablEstudiante').innerHTML = resultado;


});

/*=============== Boton Mostrar Notas Mayores ===============*/
btnMostrarMayor.addEventListener("click", function () {
    var promMay = "";
    promMay += '<table>' + '<thead><tr><th>Código</th><th>Nombre</th><th>Nota</th></tr></thead>';
    for (var i = 0; i < estudiantes.length; i++) {
        var xSub = Number(estudiantes[i].notas).toFixed(1);
        if(xSub >= 4.0) {
            promMay += '<tbody><tr><td>' + estudiantes[i].codigo + '</td>';
            promMay += '<td>' + estudiantes[i].nombre + '</td>';
            promMay += '<td>' + xSub + '</td></tr></tbody>';
        }
    }
    promMay += '</table>'
    document.getElementById('tablEstudiante').innerHTML = promMay;
});

/*=============== Boton Mostrar Notas Mayores ===============*/
btnMostrarMayor.addEventListener("click", function () {
    var promMay = "";
    promMay += '<table>' + '<thead><tr><th>Código</th><th>Nombre</th><th>Nota</th></tr></thead>';
    for (var i = 0; i < estudiantes.length; i++) {
        var xSub = Number(estudiantes[i].notas).toFixed(1);
        if(xSub >= 4.0) {
            promMay += '<tbody><tr><td>' + estudiantes[i].codigo + '</td>';
            promMay += '<td>' + estudiantes[i].nombre + '</td>';
            promMay += '<td>' + xSub + '</td></tr></tbody>';
        }
    }
    promMay += '</table>'
    document.getElementById('tablEstudiante').innerHTML = promMay;
});