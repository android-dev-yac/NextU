$(function(){

  /* ==================== Lección 2: Draggable 01 ==================== */
  var mensajeL2 = '';

  $('.box_l2_1').draggable({
    cursor: 'pointer',
    create: function(evento, ui) {
      $('.text-draggable').html(mensajeL2 += 'Evento create! <br>');
    }
  });

  $('.box_l2_1').on('dragstart', function(evento, ui) {
    $('.text-draggable').html(mensajeL2 += 'Evento Start! <br>');
  });
  $('.box_l2_1').on('drag', function(evento, ui) {
    $('.text-draggable').html(mensajeL2 += 'Evento Drag! <br>');
  });
  $('.box_l2_1').on('dragstop', function(evento, ui) {
    $('.text-draggable').html(mensajeL2 += 'Evento Stop! <br>');
  });

  /* ==================== Lección 2: Draggable 02 ==================== */

  $('.box_l2_2').draggable();

  $('.box_l2_2').on('dragstart', function(evento, ui){
    $(this).css('cursor', 'help');
  });
  $('.box_l2_2').on('drag', function(evento, ui){
    $(this).css('cursor', 'progress');
  });
  $('.box_l2_2').on('drag', function(evento, ui){
    $(this).css('cursor', 'default');
  });

  /* ==================== Lección 2: Draggable 03 ==================== */

  $('.box_l2_3_1').draggable({
    cursor: 'move',
    containment: 'document',
    helper: myCopy
  });
  function myCopy(event) {
    var showCopy = $('.box_l2_3_2').show();
    return showCopy;
  }

  /* ==================== Lección 2: Draggable 04 ==================== */

  $('.box_l2_4').draggable({
    cursor: 'pointer',
    containment: 'document',
    stop: eventStop
  });
  function eventStop(event, ui){
    var posX = parseInt(ui.offset.left);
    var posY = parseInt(ui.offset.top);
    $('.posX').html(posX);
    $('.posY').html(posY);
  }

  /* ==================== Lección 3: Droppable 01 ==================== */

  $('.box_l3_1_1').draggable();
  $('.box_l3_1_2').droppable({
    drop:function() {
      $('.box_l3_1_1 p').html("Has soltado el elemento en la caja").addClass('fontBold');
    }
  });

  /* ==================== Lección 4: Rezisable 01 ==================== */

  $('#resizable').resizable();

  /* ==================== Lección 5: Selectable y Sorteable ==================== */

  $('#selectable').selectable();

  $('#sorteable').sortable();

  /* ==================== Lección 5: Selectable Capturando Las Selecciones ==================== */

  var eventSelectable = '';
  $('#productos').selectable({
    selected: function(event, ui){
      var selected = $("li[class$='ui-selected']");
      $('.itemSelect').html('Has seleccionado ' + selected + ' productos');
      $('.eventos').html(eventSelectable += "Evento Selected <br>" );
    },
    unselected: function(event, ui) {
      $('.eventos').html(eventSelectable += "Evento Unselected <br>");
    },
    start: function(event, ui){
      $('.eventos').html(eventSelectable += "Evento Start <br>");
    },
    stop: function(event, ui){
      $('.eventos').html(eventSelectable += "Evento Stop <br>");
    }
  });

  /* ==================== Lección 5: Ordenando grupos con Sortable ==================== */

  var msjFutbol = '';

  $('#listaA').sortable({
    start: function(event, ui) {
      $('.mensajeFutbol').html(msjFutbol += 'Evento Star desde lista A <br>');
    },
    receive: function(event, ui) {
      $('.mensajeFutbol').html(msjFutbol += 'Evento Receive desde lista A <br>');
    },
    stop: function(event, ui) {
      $('.mensajeFutbol').html(msjFutbol += 'Evento Stop desde lista A <br>');
    }
  });
  $('#listaB').sortable({
    start: function(event, ui) {
      $('.mensajeFutbol').html(msjFutbol += 'Evento Star desde lista B <br>');
    },
    receive: function(event, ui) {
      $('.mensajeFutbol').html(msjFutbol += 'Evento Receive desde lista B <br>');
    },
    stop: function(event, ui) {
      $('.mensajeFutbol').html(msjFutbol += 'Evento Stop desde lista B <br>');
    }
  });
  $('#listEquipos').sortable({
    start: function(event, ui) {
      $('.mensajeFutbol').html(msjFutbol += 'Evento Star desde lista Equipos <br>');
    },
    receive: function(event, ui) {
      $('.mensajeFutbol').html(msjFutbol += 'Evento Receive desde lista Equipos <br>');
    },
    stop: function(event, ui) {
      $('.mensajeFutbol').html(msjFutbol += 'Evento Stop desde lista Equipos <br>');
    }
  });
  $('#listaA, #listaB, #listEquipos').sortable({
    connectWith: "#listaA, #listaB, #listEquipos"
  }).disableSelection();

  /* ==================== Lección 6: Efectos Shake y Explode ==================== */

  $('.btnEffect1').click(function(){
    $('.box1').effect('explode', 4000, function(){
      $(this).show();
    });
  });
  $('.btnEffect2').click(function(){
    $('.box2').effect('shake', 4000);
  });

});
