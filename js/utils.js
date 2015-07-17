(function () {
  window.Chess = window.Chess || {};
  var Utils = Chess.Utils = {}

  Utils.inherits = function (childClass, parentClass) {
    function Surrogate() {}
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
  };
})();
