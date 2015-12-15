$(function() {
    $(document).on("Frutas", {
        fruta: "Fresas"
    }, function (event, arg1, arg2){
       $(".msj").html(event.data.fruta+"<br>"+arg1+"<br>"+arg2);
    });
    $(document).trigger("Frutas", ["Manzana", "Pera", "Piña"]);
});
