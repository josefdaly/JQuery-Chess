(function () {
  window.Chess = window.Chess || {};

  var GameView = Chess.GameView = function ($el) {
    this.$el = $el
    this.createBoardElements();
    // this.game = new Chess.Game($el);
  }

  GameView.prototype.createBoardElements = function () {
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
        $newSquare.appendTo(this.$el)
      }
    }
  }

  GameView.prototype.render = function () {

  }

})();
