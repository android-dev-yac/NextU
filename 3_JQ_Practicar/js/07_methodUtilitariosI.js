$(document).ready(function() {
    var persona = {
        nombre: null,
        edad: null,
        estatura: null,
        peso: null,
        init: function(propiedades) {
            persona.propiedades = propiedades;
        },
        leerPropiedades: function() {
            return persona.propiedades;
        }
    };

    /*======== Boton Registar Persona ======== */
    $("#btnRegistar").click(function(){
        var nombre = $("#campo1").val();
        var edad = $("#campo2").val();
        var estatura = $("#campo3").val();
        var peso = $("#campo4").val();

        var propiedades = {
            nombre: nombre,
            edad: edad,
            estatura: estatura,
            peso: peso
        };
        persona.init(propiedades);
        limpiarCampos();
        alert("Registar guardada");
    });

    /*======== Boton Mostrar Persona ======== */
    $("#btnPMostrar").click(function(){
        var textAdd = "";
        var propiedades = persona.leerPropiedades();

        textAdd += "<p><strong>" + "Nombre: " + "</strong>" + propiedades.nombre + "</p>";
        textAdd += "<p><strong>" + "Edad: " + "</strong>" + propiedades.edad + "</p>";
        textAdd += "<p><strong>" + "Estatura: " + "</strong>" + propiedades.estatura + "</p>";
        textAdd += "<p><strong>" + "Peso: " + "</strong>" + propiedades.peso + "</p>";

        $("#mensaje1").html(textAdd);
    });

    /*======== Boton Mostrar Calcular ======== */
    $("#btnCalcular").click(function(){
        var messajeCalc = "";

        var propiedades = persona.leerPropiedades();
        var estatura = propiedades.estatura;
        var peso = propiedades.peso;

        var imc = peso / Math.pow(estatura, 2);
        var estado = "";

        if (imc < 18.5) {
            estado = "Demasiado delgado(a)";
        }else if(imc >= 18.5 && imc < 25) {
            estado = "Normal"
        }else if(imc >= 25 && imc < 30){
            estado = "Ligero Sobrepeso";
        }else {
            estado = "Obesidad";
        }

        messajeCalc += "<p>" + "El indice de Masa Corporal de " + propiedades.nombre + " es: " + "<strong>" + imc.toFixed(2) + "</strong>" + " por la razon su estado es " + "<strong>" + estado + "</strong>"  + "</p>";

        $("#mensaje2").html(messajeCalc);

    });

    /*======== Limpiar Campo ======== */
    function limpiarCampos(){
        var clearField = $("input[name='question']");
        for(var i = 0; i < clearField.length; i++){
            clearField[i].value = "";
        }
    }
});