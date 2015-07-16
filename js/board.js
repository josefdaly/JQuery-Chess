(function () {
  window.Chess = window.Chess || {};

  var Board = Chess.Board = function (options) {
    // this.setupBoard();
    // if (options.setup === 'true') {
    //   this.populate_board();
    // }
  }

  Board.prototype.setupBoard = function ($gameContainer) {
    debugger
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        $newSquare = $('<div></div>')
        $newSquare.addClass('square')
        $newSquare.attr('id', i + '' + j)
        if ((i + j) % 2 === 1) {
          $newSquare.addClass('odd')
        } else {
          $newSquare.addClass('even')
        }
        $newSquare.appendTo($gameContainer)
      }
    }
  }

})();
