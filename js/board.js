(function () {
  window.Chess = window.Chess || {};

  var Board = Chess.Board = function (options) {
    this.grid = new Array(8);
    this.setupBoard();
    if (options.setup === 'true') {
      this.populateBoard();
    }
  }

  Board.prototype.setupBoard = function () {
    debugger
    for (var i = 0; i < 8; i++) {
      this.grid[i] = new Array(8);
    }
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        this.grid[i][j] = 0;
      }
    }
    debugger
  }

  Board.prototype.populateBoard = function () {
    [['black', 0], ['white', 7]].forEach(function (arr) {
      this.grid[arr[1]][0] = new Chess.Rook({
        board: this,
        color: arr[0],
        pos: [arr[1], 0]
      })
      this.grid[arr[1]][1] = new Chess.Knight({
        board: this,
        color: arr[0],
        pos: [arr[1], 1]
      })
      this.grid[arr[1]][2] = new Chess.Bishop({
        board: this,
        color: arr[0],
        pos: [arr[1], 2]
      })
      this.grid[arr[1]][3] = new Chess.Queen({
        board: this,
        color: arr[0],
        pos: [arr[1], 3]
      })
      this.grid[arr[1]][4] = new Chess.King({
        board: this,
        color: arr[0],
        pos: [arr[1], 4]
      })
      this.grid[arr[1]][5] = new Chess.Bishop({
        board: this,
        color: arr[0],
        pos: [arr[1], 5]
      })
      this.grid[arr[1]][6] = new Chess.Knight({
        board: this,
        color: arr[0],
        pos: [arr[1], 6]
      })
      this.grid[arr[1]][7] = new Chess.Rook({
        board: this,
        color: arr[0],
        pos: [arr[1], 7]
      })
    }.bind(this));
  }

  Board.p

})();
