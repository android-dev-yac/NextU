$(function() {

    /* ======== Hide Show ======== */
    $('.btnHide').click(function(){
       $('.parrafo').hide(500);
    });
    $('.btnShow').click(function(){
        $('.parrafo').show(5000, function(){
            alert("La caja ya no esta oculto");
        });
    });
    /* ======== Animacion ======== */
    $('.btnAnimate').click(function(){
        $('.caja1').animate({
           "height": "+=50px",
            "width": "+=5px"
        });
    });
    /* ======== Animacion y Para ======== */
    $('.btnStar').click(function(){
        $('.caja2').animate({
            left: '1050px'
        }, 2000);
    });
    $('.btnStop').click(function(){
        $('.caja2').stop();
    });

});
