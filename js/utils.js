(function () {
  window.Chess = window.Chess || {};
  var Util = Chess.Util = {}

  Util.inherits = function (childClass, parentClass) {
    function Surrogate () {}
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
  };
})();
