(function () {
  window.Chess = window.Chess || {};

  var Board = Chess.Board = function (options) {
    // this.setupBoard();
    // if (options.setup === 'true') {
    //   this.populate_board();
    // }
  }

  Board.prototype.setupBoard = function ($gameContainer) {
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

  Board.prototype.populateBoard = function () {
    [['black', 0, 1], ['white', 7, 6]].forEach(function (arr) {
      $('#' + arr[1] + '0').addClass(arr[0] + '-rook')
      $('#' + arr[1] + '1').addClass(arr[0] + '-knight')
      $('#' + arr[1] + '2').addClass(arr[0] + '-bishop')
      $('#' + arr[1] + '3').addClass(arr[0] + '-queen')
      $('#' + arr[1] + '4').addClass(arr[0] + '-king')
      $('#' + arr[1] + '5').addClass(arr[0] + '-bishop')
      $('#' + arr[1] + '6').addClass(arr[0] + '-knight')
      $('#' + arr[1] + '7').addClass(arr[0] + '-rook')
      for (var i = 0; i < 8; i++) {
        $('#' + arr[2] + '' + i).addClass(arr[0] + '-pawn')
      }
    });
  }

})();
