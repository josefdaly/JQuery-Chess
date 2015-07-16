(function () {
  window.Chess = window.Chess || {};

  var Board = Chess.Board = function (options) {
    // this.setupBoard();
    // if (options.setup === 'true') {
    //   this.populate_board();
    // }
  }

  Board.prototype.setupBoard = function () {
    this.grid = new Array(8);
    for (var i = 0; i < 8; i++) {
      this.grid[i] = new Array(8);
    }
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        this.grid[i][j] = 0;
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

  Board.p

})();
