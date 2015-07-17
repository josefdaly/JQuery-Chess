(function () {
  window.Chess = window.Chess || {};
  var Utils = Chess.Utils = {}

  Utils.inherits = function (childClass, parentClass) {
    function Surrogate() {}
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
  };

  Array.prototype.includes = function (el) {
    if (typeof el === 'object') {
      for (var i = 0; i < this.length; i++) {
         if (this[i][0] === el[0] && this[i][1] === el[1]) {
           return true;
        }
      }
    }

    for (var i = 0; i < this.length; i++) {
       if (this[i] === el) {
         return true;
      }
    }
    return false;
  }
})();
