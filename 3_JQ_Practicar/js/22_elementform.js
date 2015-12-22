$(function() {

    $('#AddCar').click(function(e) {
      e.preventDefault()
      var nombreCar = $('#campNombre').val();
      var valorCar = $('#campValor').val();
      $('<option>').attr('value', valorCar).text(nombreCar).appendTo('#selectCarros');
      limpiarCampos();
    });
    $('#quitAdd').click(function(e) {
        e.preventDefault();
        var $select = $('#selectCarros');
        $('option:selected', $select).remove();

    });
    function limpiarCampos(){
        var clearField = $("input[type='text']");
        for(var i = 0; i < clearField.length; i++){
            clearField[i].value = "";
        }
    }
});
