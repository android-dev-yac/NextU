var estudiantes = [];

var btnRegistrar = document.getElementById("btn-registar");
var btnMostrarRegistrar = document.getElementById("btn-mostraregistrar");
var btnMostrarMayor = document.getElementById("btn-mostrarmayor");
var btnMostrarMenor = document.getElementById("btn-mostrarmenor");

/*=============== Boton Registar Estudiante ===============*/
btnRegistrar.addEventListener("click", function () {

    var formCodigo = document.getElementById("formCodigo").value;
    var formNombre = document.getElementById("formNombre").value;
    var formNotas = parseInt(document.getElementById("formNotas").value);

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
    resultado += '<table>' + '<thead><tr><th>Código</th><th>Nombre</th><th>Nota</th></tr></thead>';
    for (var i = 0; i < estudiantes.length; i++) {
        resultado += '<tbody><tr><td>' + estudiantes[i].codigo + '</td>';
        resultado += '<td>' + estudiantes[i].nombre + '</td>';
        resultado += '<td>' + estudiantes[i].notas + '</td></tr></tbody>';
    }
    resultado += '</table>'
    document.getElementById('tablEstudiante').innerHTML = resultado;
    table.classList.add("table-striped");
    table.classList.add("table");



});

/*=============== Boton Mostrar Registrar ===============*/
btnMostrarRegistrar.addEventListener("click", function () {

    var table = document.getElementById("tablEstudiante");

    table.classList.add("table-striped");
    table.classList.add("table");

    var resultado = "";
    resultado += '<thead>' + '<tr><th>Código</th><th>Nombre Completo</th><th>Nota</th></tr>';

    for(var i = 0; i < estudiantes.length; i++){
        var tr = document.createElement("tr");
        var td_codigo = document.createElement("td");
        var td_nombre = document.createElement("td");
        var td_notas = document.createElement("td");

        table.appendChild(tr);

        var codigo = document.createTextNode(estudiantes[i].codigo);
        var nombre = document.createTextNode(estudiantes[i].nombre);
        var notas = document.createTextNode(estudiantes[i].notas);

        td_codigo.appendChild(codigo);
        td_nombre.appendChild(nombre);
        td_notas.appendChild(notas);

        table.appendChild(tr);

    }
    resultado = '</thead>';
    table.innerHTML = resultado;


});

/*=============== Boton Mostrar Notas Mayores ===============*/
btnMostrarMayor.addEventListener("click", function () {

    var promMay = "";
    promMay += '<table>' + '<thead><tr><th>Código</th><th>Nombre</th><th>Nota</th></tr></thead>';
    for (var i = 0; i < estudiantes.length; i++) {
        var xSub = estudiantes[i].notas;
        if(xSub >= 4.0) {
            promMay += '<tbody><tr><td>' + estudiantes[i].codigo + '</td>';
            promMay += '<td>' + estudiantes[i].nombre + '</td>';
            promMay += '<td>' + xSub + '</td></tr></tbody>';
        }
    }
    promMay += '</table>'
    document.getElementById('tablEstudiante').innerHTML = promMay;

});

/*=============== Boton Mostrar Notas Menores ===============*/
btnMostrarMenor.addEventListener("click", function () {

    var promMen = "";
    promMen += '<table>' + '<thead><tr><th>Código</th><th>Nombre</th><th>Nota</th></tr></thead>';
    for (var i = 0; i < estudiantes.length; i++) {
        var xBaja = estudiantes[i].notas;
        if(xBaja <= 3.9) {
            promMen += '<tbody><tr><td>' + estudiantes[i].codigo + '</td>';
            promMen += '<td>' + estudiantes[i].nombre + '</td>';
            promMen += '<td>' + xBaja + '</td></tr></tbody>';
        }
    }
    promMen += '</table>'
    document.getElementById('tablEstudiante').innerHTML = promMen;

});