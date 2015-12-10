$(function() {

    $('#btn1').click(function(){
        $('.pClick').append("Texto nuevo");
    });

    $('#btn2').mouseenter(function(){
       alert("Has pasado el mouse por el botón");
    });

    $('#btn3').mouseleave(function(){
        alert("El mouse dejo de estar sobre el botón");
    });

    $('.campFocus').focus(function(){
        $(this).css("background-color", "#1F4788");
    });

    $('.campFocus').blur(function(){
        $(this).css("background-color", "red");
    });

    $('#btn4').dblclick(function(){
        $('.pdbClick').append("Texto nuevo dobleclick");
    });
});