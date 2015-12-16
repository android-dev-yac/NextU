$(function() {

    $('.btnEf').click(function() {
       colaEfectos();
    });
    function colaEfectos(){
        var myDiv = $('.myDiv');

        myDiv.queue(function(){
            $(this).css({
               "background-color": "#0b859c"
            });
            $(".mjsFinal").html("Se cambio el color de fondo a azul");
            $(this).dequeue();
        });
        myDiv.hide(1000);
        myDiv.show(1000);
        myDiv.fadeIn(3000);
        myDiv.fadeOut(3000);
        myDiv.show(1000);
    }

});
