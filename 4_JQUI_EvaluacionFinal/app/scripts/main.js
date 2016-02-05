$(function(){

  var msjA = '';
  var msjB = '';

  $(' #msjB, #msjA').hide();

  /* ======================== USER BLACK ======================== */
  $('.circeBlack').draggable({
    cursor: 'pointer',
    grid: [30,30],
    containment: "#tabla",
    scroll: false,
    start: function(event, ui){
      $('#msjA').html(msjA += 'Arrasto la pieza <br>').show();
    },
    drag: function(event, ui){
      $('#msjA').html(msjA += 'Mueve la pieza <br>');
    },
    stop: function(event, ui){
      $('#msjB').html(msjA += "Queda ahi la pieza <br>");
    },
  });

  /* ======================== USER WRITE ======================== */
  $('.circeWrite').draggable({
    cursor: 'pointer',
    grid: [30,30],
    containment: "#tabla",
    scroll: false,
    start: function(event, ui){
      $('#msjB').html(msjB += 'Arrasto la pieza <br>').show();
    },
    drag: function(event, ui){
      $('#msjB').html(msjB += 'Mueve la pieza <br>');
    },
    stop: function(event, ui){
      $('#msjB').html(msjB += "Queda la pieza <br>");
    }
  });

  /* ======================== FUNCTION ROTATE ======================== */

});
