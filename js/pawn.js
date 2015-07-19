(function () {
  window.Chess = window.Chess || {};
  var Pawn = Chess.Pawn = function (params) {
    Chess.Piece.call(this, params);
    this.name = 'pawn';
    this.normalMove = [1, 0];
    this.initialMove = [2, 0];
    this.attackMove = [[1, 1], [1, -1]];
  }

  Chess.Utils.inherits(Pawn, Chess.Piece)

  Pawn.prototype.moves = function () {
    var moves = [];
    if (this.color === 'black') {
      var modifier = 1;
    } else {
      var modifier = -1;
    }

    // var normalMove = this.sumPositions()
  }
})();
