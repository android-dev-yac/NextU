/*=============== JSON registrar ===============*/
var estudiantes = [];

/*=============== Botones ID variable ===============*/
var btnRegistrar = document.getElementById("btn-registar");
var btnMostrarRegistrar = document.getElementById("btn-mostraregistrar");
var btnMostrarMayor = document.getElementById("btn-mostrarmayor");
var btnMostrarMenor = document.getElementById("btn-mostrarmenor");

/*=============== Table Add Style ===============*/
document.getElementById('tablEstudiante').className = "table-striped";
document.getElementById('tablEstudiante').className = "table";

/*=============== Boton Registar Estudiante ===============*/
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

    var resultado = "";
    resultado += '<thead>' + '<tr><th>Código</th><th>Nombre</th><th>Nota</th></tr>' + '</thead>';
    for (var i = 0, registrar; i < estudiantes.length; i++) {
        resultado += '<tbody><tr><td>' + estudiantes[i].codigo + '</td>';
        resultado += '<td>' + estudiantes[i].nombre + '</td>';
        resultado += '<td>' + estudiantes[i].notas + '</td></tr>';
    }
    resultado += '</tbody>'
    document.getElementById('tablEstudiante').innerHTML = resultado;

});

/*=============== Boton Mostrar Promedio ===============*/
btnMostrarRegistrar.addEventListener("click", function () {

    var promedio = "";
    var xSum = 0;
    promedio += '<thead>' + '<tr><th>Nota</th></tr>' + '</thead>';
    for (var i = 0; i < estudiantes.length; i++) {
        xSum += parseInt(estudiantes[i].notas);
        promedio += '<tbody><tr><td>' + estudiantes[i].notas + '</tr>';
    }
    promedio += '<tr><td>' + '<strong>' + 'Total: ' + '</strong>' + xSum / estudiantes.length + '</td></tr>';
    promedio += '</tbody>';
    document.getElementById('tablEstudiante').innerHTML = promedio;

});

/*=============== Boton Mostrar Notas Mayores ===============*/
btnMostrarMayor.addEventListener("click", function () {

    var promMay = "";
    promMay += '</*/!*<!--thead-->*!/*/>' + '<tr><th>Código</th><th>Nombre</th><th>Nota</th></tr>' + '</thead>';
    for (var i = 0; i < estudiantes.length; i++) {
        var xSub = Number(estudiantes[i].notas).toFixed(1);
        if(xSub >= 4.0) {
            promMay += '<tbody><tr><td>' + estudiantes[i].codigo + '</td>';
            promMay += '<td>' + estudiantes[i].nombre + '</td>';
            promMay += '<td>' + xSub + '</td></tr>';
        }
    }
    promMay += '</tbody>'
    document.getElementById('tablEstudiante').innerHTML = promMay;

});

/*=============== Boton Mostrar Notas Menores ===============*/
btnMostrarMenor.addEventListener("click", function () {

    var promMen = "";
    promMen += '<thead>' + '<tr><th>Código</th><th>Nombre</th><th>Nota</th></tr>' + '</thead>';
    for (var i = 0; i < estudiantes.length; i++) {
        var xBaja = Number(estudiantes[i].notas).toFixed(1);
        if(xBaja <= 3.9) {
            promMen += '<tbody><tr><td>' + estudiantes[i].codigo + '</td>';
            promMen += '<td>' + estudiantes[i].nombre + '</td>';
            promMen += '<td>' + xBaja + '</td></tr>';
        }
    }
    promMen += '</tbody>'
    document.getElementById('tablEstudiante').innerHTML = promMen;

});