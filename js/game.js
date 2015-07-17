(function () {
  window.Chess = window.Chess || {};

  var Game = Chess.Game = function ($el) {
    this.board = new Chess.Board({setup: 'true'});
    this.current_player = 'white';
  }

  Game.prototype.rightColor = function (pos) {
    return ($('#' + pos).attr('color') === this.current_player);
  }

  Game.prototype.switchPlayer = function () {
    if (this.current_player === 'white') {
      this.current_player = 'black'
    } else {
      this.current_player = 'white'
    }
  }

  Game.prototype.makeMove = function (startPos, endPos) {
    if (this.board.move(startPos, endPos, this.current_player)) {
      this.switchPlayer();
      return true;
    } else {
      return false;
    }
  }
})();
