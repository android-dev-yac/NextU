$(function() {
    $('body').delegate("p", "mouseover", function(){
        $(".parrNew").append(" Este parrafo es nuevo");
    });
    $('.btnUndel').click(function(){
        $("body").undelegate();
    });
});
