$(function() {

    var arr = ['Virginia', 'Andrés', 'John', 'Isabella'];

    var objeto1 = {
        Nombre: "Virginia",
        Apellido: "Velásquez Soto",
        Edad: "30"
    };
    var objeto2 = {
        Nombre: "Andrés",
        Apellido: "Marulanda Pamplona",
        Edad: "24"
    };

    $('.btn1').click(function(){
        var element = "<strong> Elementos del ARREGLO: </strong> <br>";
        var parr1 = $('.p1');

        $.each(arr, function(indice, valor){
           element += "Indice es: " + indice + " su valor es: " + valor  + "<br>";
        });
        $(parr1).html(element);
    });
    $('.btn2').click(function(){
        var element = "<strong> Elementos del OBJETO: </strong> <br>";
        var parr2 = $('.p2');

        $.each(objeto1, function(propiedades, valor){
            element += propiedades + ": " + valor + "<br>";
        });
        $(parr2).html(element);
    });
    $('.btn3').click(function(){
        var element = "";
        var parr3 = $('.p3');

        if ($.inArray('Virginia', arr) !== -1) {
            $(parr3).html("Juan EXISTE en el arreglo");
        } else {
            $(parr3).html("Juan NO EXISTE en el arreglo");
        }
    });
    $('.btn4').click(function(){
        var elements = "<strong> Propiedad del objeto cambiadas: </strong> <br>";
        var parr4 = $('.p4');

        var objets3 = $.extend(objeto1, objeto2);

        $.each(objets3, function(propiedades, valor){
           elements += propiedades + ": " + valor + "<br>";
        });
        $(parr4).html(elements);
    });

});