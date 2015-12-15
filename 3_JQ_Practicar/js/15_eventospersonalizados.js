$(function() {

    var clients = [];

    $("#btnClient").click(function(){
        registarClient();
        $(document).trigger("descuento");
    });

    $(document).on("descuento", function(event, param1, param2){
        var totalComprarC = parseFloat($("#cjtxt3").val());
        var nombreC = $("#cjtxt2").val();

        if(totalComprarC > 50000){
            alert("El cliente " + nombreC + " gano un bono de 10.000 pesos.");
        }
        limpiarCampos();
        listarClient();
    });

    function registarClient() {
        var idC = $("#cjtxt1").val();
        var nombreC = $("#cjtxt2").val();
        var totalComprarC = parseFloat($("#cjtxt3").val());

        var client = {
           id: idC,
           nombre: nombreC,
           totalComprar: totalComprarC
        };

        clients.push(client);
        alert("Cliente registrado");
    }
    function listarClient(){
        var lista = "<h3> Clientes: </h3>";

        var idC = $("#cjtxt1").val();
        var nombreC = $("#cjtxt2").val();
        var totalComprarC = parseFloat($("#cjtxt3").val());

        for(var i = 0; i < clients.length; i++){
            lista += "<p><strong>Id: </strong> " + clients[i].id + "</p>";
            lista += "<strong>Nombre: </strong> " + clients[i].nombre + "</p>";
            lista += "<strong>Total Comprar: </strong> " + clients[i].totalComprar + "</p>";
        }
        $("#textClient").html(lista);
    }
    function limpiarCampos(){
        var clearField = $("input[name='question']");
        for(var i = 0; i < clearField.length; i++){
            clearField[i].value = "";
        }
    }
});
