$(function() {

    $(".btn1").click(function(){
        var parraf1 = $('p').get(0);
        $(parraf1).html('<strong> Mi primer párrafo modificado </strong>');

        var parraf2 = $('p').get(1);
        $(parraf2).html('<strong> Mi segundo párrafo modificado </strong>');
    });

    $(".btn2").click(function(){
        $('p').css({
            'background-color': "#2b542c",
            'color': "#fff",
            'padding': '20px'
        });
        $('.box').css({
            'background-color': "#ddd",
            'padding': '20px'
        });
    });

    $('.btn3').click(function(){
        $('.box').height('200px');
        $('.box').width('200px');
    });

    $('.btn4').click(function(){
        $('.p1').addClass('addStyle');
    });

    $('.btn5').click(function(){
        $('.p1').removeClass('addStyle');
    });

});