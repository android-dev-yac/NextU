$(document).ready(function(){

    $('.btn1').click(function(){

        var id = $('#campId').val();
        var nombre = $('#campNombre').val();
        var apellido = $('#campApellido').val();

        var persona =  {
            id: id,
            nombre: nombre,
            apellido: apellido
        };

        localStorage.setItem(id, JSON.stringify(persona));

        listarPersona();

        $('#campId').val("");
        $('#campNombre').val("");
        $('#campApellido').val("");

    });

    function listarPersona() {

        var elements = '<h3>Lista Persona:</h3>';

        for (var i = 0; i < localStorage.length; i++) {
            var clave = localStorage.key(i);
            var persona = $.parseJSON(localStorage.getItem(clave));

            elements +=  persona.id + '-' + persona.nombre + '-' + persona.apellido;
        }
        $('.p1').html(elements);
    }
    listarPersona();

});