var empresa = {
    ced: null,
    nombre: null,
    direccion: null,
    telefonos: null,
    email: null,

    init: function(propiedades) {
        empresa.propiedades = propiedades;
    },
    leerPropiedad: function(){
        return empresa.propiedades;
    }
};

var btnRegistrar = document.getElementById("btn-registar");
var btnMostrarRegistrar = document.getElementById("btn-mostrar");

btnRegistrar.addEventListener('click', function(){
    var cedula = document.getElementById("campo1").value;
    var nombre = document.getElementById("campo2").value;
    var direccion = document.getElementById("campo3").value;
    var telefono = document.getElementById("campo4").value;
    var celular = document.getElementById("campo5").value;
    var email = document.getElementById("campo6").value;

    var numerosTel = [telefono, celular];

    var propiedades = {
        ced: cedula,
        nombre: nombre,
        direccion: direccion,
        telefonos: numerosTel,
        email: email
    }

    empresa.init(propiedades);
    limpiarCampos();
    alert("Empresa guardada");
});
btnMostrarRegistrar.addEventListener('click', function(){
    var addText = "";
    var propiedades = empresa.leerPropiedad();

    addText += "<p>" + "<strong>" + "Cédula: " + "</strong>" + propiedades.ced + "/<p>";
    addText += "<p>" + "<strong>" + "Nombre: " + "</strong>" + propiedades.nombre + "/<p>";
    addText += "<p>" + "<strong>" + "Dirección: " + "</strong>" + propiedades.ced + "/<p>";
    addText += "<p>" + "<strong>" + "Teléfono: " + "</strong>" + propiedades.telefonos[0] + "/<p>";
    addText += "<p>" + "<strong>" + "Celular: " + "</strong>" + propiedades.telefonos[1] + "/<p>";
    addText += "<p>" + "<strong>" + "Email: " + "</strong>" + propiedades.email + "/<p>";

    document.getElementById("addEmpresa").innerHTML = addText;
});
function limpiarCampos(){
    var clearField = document.getElementsByName('question')
    for(var i = 0; i < clearField.length; i++){
        clearField[i].value = '';
    }
}