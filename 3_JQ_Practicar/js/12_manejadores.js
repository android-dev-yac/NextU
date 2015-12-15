$(function() {

    var mensaje1 = "<h3> Posición Cuadrado 1 </h3>";
    var box1 = $(".box1");
    var mensaje2 = "<h3> Posición Cuadrado 2 </h3>";
    var box2 = $(".box2");

    $('.btn1').on("click", function(){
        var position = box1.position();
        mensaje1 += "Left: " + position.left + ", Rigth: " + position.top;
        box1.addClass("boxColor");
        $(".msj").html(mensaje1);
    });
    $('.btn2').on("click", function(){
        var position = box2.position();
        mensaje2 += "Left: " + position.left + ", Rigth: " + position.top;
        box2.addClass("boxColor");
        $(".msj").html(mensaje2);
    });

    $(".box1").on("mouseenter", function(){
        $(this).height(100);
        $(this).width(100);
    });
    $(".box1").on("mouseout", function(){
        $(this).height(200);
        $(this).width(200);
    });
    $(".box2").on("mouseenter", function(){
        $(this).height(100);
        $(this).width(100);
    });
    $(".box2").on("mouseout", function(){
        $(this).height(200);
        $(this).width(200);
    });
});
