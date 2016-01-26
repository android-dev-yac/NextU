$(function() {
    /* ============ contador para registar el codigo ============ */
    var contador;
    if(localStorage.length > 0) {
        contador = localStorage.length + 1;
    } else {
        contador = 1;
    }
    $('#campCodigo').val(contador);

    /* ============ Input Fade Carrera ============ */
    $('#campCarrera').focus(function(){
        $(this).next('.infbanner').fadeIn(1000);
    });
    $('#campCarrera').blur( function() {
        $(this).next('.infbanner').fadeOut(1000);
    });
    /* ============ Botón de Registrar ============ */
    $('#btn-registar').click(function(){
        var codigo = $('#campCodigo').val();
        var nombre = $('#campNombre').val();
        var apellidos = $('#campApellidos').val();
        var carrera = $('#campCarrera').val();
        var notas = $('#campNota').val();

        if (codigo==null || codigo=="", nombre==null || nombre=="", apellidos==null || apellidos=="", notas==null || notas=="", carrera==null || carrera=="") {
            alert("Por favor rellene Campo Obligatorio");
            return false;
        }
        var estudiantes = {
            codigo: codigo,
            nombre: nombre,
            apellidos: apellidos,
            carrera: carrera,
            notas: notas
        };
        localStorage.setItem(codigo, JSON.stringify(estudiantes));
        contador = localStorage.length + 1;

        registrarEstudiantes();
        limpiarCampo();
    });
    /* ============ Botón de Promedio para mostrar ============ */
    $('#btn-promedio').click(function(){
        var promedio = '';
        promedio += '<thead>';
        promedio += '<th>CÓDIGO</th>';
        promedio += '<th>NOMBRE</th>';
        promedio += '<th>APELLIDOS</th>';
        promedio += '<th>NOTAS</th>';
        promedio += '</thead>';

        for (var i = 0; i < localStorage.length; i++) {

            var clave = localStorage.key(i);
            var estudiantes = $.parseJSON(localStorage.getItem(clave));

            promedio += '<tbody>';
            promedio += '<tr>';
            promedio += '<td>' + estudiantes.codigo + '</td>';
            promedio += '<td>' + estudiantes.nombre + '</td>';
            promedio += '<td>' + estudiantes.apellidos + '</td>';
            promedio += '<td>' + estudiantes.notas + '</td>';
            promedio += '</tr>';
        }
        promedio += '</tbody>';
        $('#tablEstudiante').html(promedio);
    });

    /* ============ Botón de Promedio Mayor para mostrar ============ */
    $('#btn-mayor').click(function(){

       var promedioMayor = '';
        promedioMayor += '<thead>';
        promedioMayor += '<th>CÓDIGO</th>';
        promedioMayor += '<th>NOMBRE</th>';
        promedioMayor += '<th>APELLIDOS</th>';
        promedioMayor += '<th>NOTAS</th>';
        promedioMayor += '</thead>';

        for (var i = 0; i < localStorage.length; i++) {

            var clave = localStorage.key(i);
            var estudiantes = $.parseJSON(localStorage.getItem(clave));
            var xSub = Number(estudiantes.notas).toFixed(1);

            if(xSub >= 3.5) {
                promedioMayor += '<tbody>';
                promedioMayor += '<tr>';
                promedioMayor += '<td>' + estudiantes.codigo + '</td>';
                promedioMayor += '<td>' + estudiantes.nombre + '</td>';
                promedioMayor += '<td>' + estudiantes.apellidos + '</td>';
                promedioMayor += '<td>' + xSub + '</td>';
                promedioMayor += '</tr>';
            }
        }
        promedioMayor += '</tbody>';
        $('#tablEstudiante').html(promedioMayor);
    });
    /* ============ Botón de Promedio Mayor para mostrar ============ */
    $('#btn-menor').click(function(){

        var promedioMenor = '';
        promedioMenor += '<thead>';
        promedioMenor += '<th>CÓDIGO</th>';
        promedioMenor += '<th>NOMBRE</th>';
        promedioMenor += '<th>APELLIDOS</th>';
        promedioMenor += '<th>NOTAS</th>';
        promedioMenor += '</thead>';

        for (var i = 0; i < localStorage.length; i++) {

            var clave = localStorage.key(i);
            var estudiantes = $.parseJSON(localStorage.getItem(clave));
            var xSub = Number(estudiantes.notas).toFixed(1);

            if(xSub <= 3.4) {
                promedioMenor += '<tbody>';
                promedioMenor += '<tr>';
                promedioMenor += '<td>' + estudiantes.codigo + '</td>';
                promedioMenor += '<td>' + estudiantes.nombre + '</td>';
                promedioMenor += '<td>' + estudiantes.apellidos + '</td>';
                promedioMenor += '<td>' + xSub + '</td>';
                promedioMenor += '</tr>';
            }
        }
        promedioMenor += '</tbody>';
        $('#tablEstudiante').html(promedioMenor);
    });


    /* ============ Limpiar el formulario ============ */
    function limpiarCampo(){
        var clearField = $('input[name="question"]');
        for(var i = 0; i < clearField.length; i++){
            clearField[i].value = '';
        }
    }

    /* ============ Function Registrar ============ */
    function registrarEstudiantes() {
        tabla = '';
        tabla += '<thead>';
        tabla += '<th>CÓDIGO</th>';
        tabla += '<th>NOMBRE</th>';
        tabla += '<th>APELLIDOS</th>';
        tabla += '<th>CARRERA</th>';
        tabla += '<th>NOTAS</th>';
        tabla += '<th>EDITAR</th>';
        tabla += '<th>ELIMINAR</th>';
        tabla += '</thead>';

        for (var i = 0; i < localStorage.length; i++) {

            var clave = localStorage.key(i);
            var estudiantes = $.parseJSON(localStorage.getItem(clave));

            tabla += '<tbody>';
            tabla += '<tr>';
            tabla += '<td>' + estudiantes.codigo + '</td>';
            tabla += '<td>' + estudiantes.nombre + '</td>';
            tabla += '<td>' + estudiantes.apellidos + '</td>';
            tabla += '<td>' + estudiantes.carrera + '</td>';
            tabla += '<td>' + estudiantes.notas + '</td>';
            tabla += '<td><button onclick="editarEstudiantes(\'' + estudiantes.codigo + '\');">Editar</button></td>';
            tabla += '<td><button onclick="eliminarEstudiantes(\'' + estudiantes.codigo + '\');">Eliminar</button></td>';
            tabla += '</tr>';
        }
        tabla += '</tbody>';
        $('#tablEstudiante').html(tabla);
    }
    /* ============ Function Editar de Estudiante ============ */
    window.editarEstudiantes = function(codigo) {
        var estudiantes;
        for (var i = 0; i < localStorage.length; i++) {
            var clave = localStorage.key(i);
            if (clave == codigo)
                estudiantes = $.parseJSON(localStorage.getItem(clave));

            $('#campNombre').val(estudiantes.nombre);
            $('#campApellidos').val(estudiantes.apellidos);
            $('#campCarrera').val(estudiantes.carrera);
            $('#campNota').val(estudiantes.notas);
        }
    }
    /* ============ Function Eliminar de Estudiante ============ */
    window.eliminarEstudiantes = function(codigo){
        localStorage.removeItem(codigo);
        registrarEstudiantes();
    }

});
