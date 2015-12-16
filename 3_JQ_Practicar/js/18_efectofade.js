$(function() {

    $('.btnFade').click(function(){
       $('.box').fadeIn(4000, function(){
          $('blockquote').fadeIn(1000);
           $('h1').fadeOut(10);
       });
        return false;
    });

});
