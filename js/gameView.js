(function () {
  window.Chess = window.Chess || {};

  var GameView = Chess.GameView = function ($el) {
    this.game = new Chess.Game($el);
  }

})();
