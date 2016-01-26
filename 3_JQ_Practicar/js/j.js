function editarVehiculo(placa) {

    var vehiculo;

    for (var i = 0; i < localStorage.length; i++) {

        var clave = localStorage.key(i);
        if (clave == placa) {

            vehiculo = $.parseJSON(localStorage.getItem(clave));

            $("#placa").val(vehiculo.placa);
            $("#marca").val(vehiculo.mar);
            $("#modelo").val(vehiculo.modelo);

        }


    }


}


function listarVehiculos() {

    var tabla = "";
    var parrafo1 = $("#p1");

    tabla += '<table border="1">';
    tabla += '<tr>';
    tabla += '<th>PLACA</th>';
    tabla += ' <th>MARCA</th>';
    tabla += '<th>MODELO</th>';
    tabla += '<th>EDITAR</th>';
    tabla += '<th>ELIMINAR</th>';
    tabla += '</tr>';

    for (var i = 0; i < localStorage.length; i++) {

        var clave = localStorage.key(i);
        var vehiculo = $.parseJSON(localStorage.getItem(clave));


        tabla += '<tr>';
        tabla += '<td>' + vehiculo.placa + '</td>';
        tabla += '<td>' + vehiculo.marca + '</td>';
        tabla += '<td>' + vehiculo.modelo + '</td>';
        tabla += '<td><button onclick="editarVehiculo(\'' + vehiculo.placa + '\');">Editar</button></td>';
        tabla += '<td><button onclick="eliminarVehiculo(\'' + vehiculo.placa + '\');">Eliminar</button></td>';
        tabla += '</tr>';



    }

    tabla += '</table>';

    $(parrafo1).html(tabla);

}



function eliminarVehiculo(placa) {



    localStorage.removeItem(placa);


    listarNotas();


}


$(document).ready(function() {


    $("#boton1").click(function() {


        var placa = $("#placa").val();
        var marca = $("#marca").val();
        var modelo = $("#modelo").val();

        var vehiculo = {
            placa: placa,
            marca: marca,
            modelo: modelo
        };





        localStorage.setItem(placa, JSON.stringify(vehiculo));

        contador = localStorage.length + 1;







        listarVehiculos();

        reestablecer();






    });


    $("#boton2").click(function() {


        reestablecer();



    });


    function reestablecer() {


        $("#placa").val("");
        $("#marca").val("");
        $("#modelo").val("");



    }





    listarVehiculos();



});/**
 * Created by vvelasquezs on 20/01/16.
 */
