$(function() {

    /*======== Boton mostrar Ids ======== */
    $("#btn1").click(function(){
        var mensaje = "<h2>Ids: </h2>";
        var idInput = $("#campoInp").attr("id");
        var idTitle = $("#titleEnca").attr("id");
        var idTable = $("#tableColor").attr("id");
        var idImage = $("#imagePlace").attr("id");

        mensaje += "<p>" + idInput + "</p>";
        mensaje += "<p>" + idTitle + "</p>";
        mensaje += "<p>" + idTable + "</p>";
        mensaje += "<p>" + idImage + "</p>";

        $("#mensajeAdd").html(mensaje);

    });

    /*======== Boton cambiar Campo ======== */
    $("#btn2").click(function(){
        $("#campoInp").attr("size", "100");
        $("#campoInp").attr("placeholder", "Cambio de placeholder!!");
    });

    /*======== Boton cambiar Titulo ======== */
    $("#btn3").click(function(){
        $("#titleEnca").attr("style", "font-size: 60px");
    });

    /*======== Boton cambiar Table ======== */
    $("#btn4").click(function(){
        $("#tableColor").attr("border", "10");
    });

    /*======== Boton cambiar Image ======== */
    $("#btn5").click(function(){
        $("#imagePlace").attr("src", "img/U-member-2.jpg");
    });

});