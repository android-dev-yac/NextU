$(function() {

   var base_datos = "<xml versio='1.0'><persona><nombres>Virginia</nombres><apellidos>Velásquez Soto</apellidos></persona>";

   var $xml = $(base_datos),
       $nombre = $xml.find('nombres'),
       $apellidos = $xml.find('apellidos');

   $('.nombre').html($nombre);
   $('.apellidos').html($apellidos);

});
