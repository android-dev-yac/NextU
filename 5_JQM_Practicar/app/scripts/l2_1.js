$(fungtion(){

  $('#boton1').click(function(){
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var direecion = $("#direecion").val();
    var telefono = $("#telefono").val();
    var email = $("#email").val();
    var ciudad = $("#ciudad").val();

    var datos="Datos Cliente:<br>";
    datos+="Nombre:"+nombre+"<br>";
    datos+="Apellido:"+apellido+"<br>";
    datos+="Dirección:"+direecion+"<br>";
    datos+="Teléfono:"+telefono+"<br>";
    datos+="E-mail:"+email+"<br>";
    datos+="Ciudad:"+ciudad+"<br>";

    $(".datos-registrar").html(datos);

    $.mobile.changePage( "#l2_01_pag4");
  });

});
