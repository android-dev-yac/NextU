$(function() {
    $('select').change(function(){
        var fruta = "";
        $('select option:selected').each(function(){
           fruta += $(this).text() + ' ';
        });
        $(".ptext").text(fruta);
    }).change();
});
