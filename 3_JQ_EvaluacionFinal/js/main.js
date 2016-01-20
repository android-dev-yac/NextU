$(function() {

    $('#btnRegistar').click(function(){

        var codigo = $('#campCodigo').val();
        var nombre = $('#campNombre').val();
        var apellidos = $('#campApellidos').val();
        var carrera = $('#campCarrera').val();
        var nota = $('#campNota').val();

        if (codigo==null || codigo=="", nombre==null || nombre=="", apellidos==null || apellidos=="", nota==null || nota=="", carrera==null || carrera=="") {
            alert("Por favor rellene Campo Obligatorio");
            return false;
        }

        limpiarCampo();

    });

    function limpiarCampo(){
        var clearField = $('input [name="question"]');
        for(var i = 0; i < clearField.length; i++){
            clearField[i].value = '';
        }

    }



});
