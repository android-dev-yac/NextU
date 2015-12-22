$(function() {

    var datos = '[{"id":"1","tagName":"apple"},{"id":"2","tagName":"orange"},
    {"id":"3","tagName":"banana"},{"id":"4","tagName":"watermelon"},
    {"id":"5","tagName":"pineapple"}]';

    var cadena = '';
    var baseDatos = $.parseJSON(datos);

    $.each(baseDatos, function() {
        cadena += this['tagName'] + '<br>';
    });
    $('.text').html(cadena);

});
