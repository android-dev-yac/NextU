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

});
