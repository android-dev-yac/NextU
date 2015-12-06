var estudiantes = [];

var btnRegistrar = document.getElementById("btn-registar");
var btnMostrarRegistrar = document.getElementById("btn-mostraregistrar");
var btnMostrarMayor = document.getElementById("btn-mostrarmayor");
var btnMostrarMenor = document.getElementById("btn-mostrarmenor");

btnRegistrar.addEventListener("click", function () {

    var formCodigo = document.getElementById("formCodigo").value;
    var formNombre = document.getElementById("formNombre").value;
    var formNotas = document.getElementById("formNotas").value;

    if (formCodigo==null || formCodigo=="", formNombre==null || formNombre=="", formNotas==null || formNotas=="")
    {
        alert("Please Fill All Required Field");
        return false;
    }

    var estudianteNuevo = {
        "codigo": formCodigo,
        "nombre": formNombre,
        "notas": formNotas
    };
    estudiantes.push(estudianteNuevo);
});
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