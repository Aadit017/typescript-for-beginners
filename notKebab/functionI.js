"use strict";
var globalVariable = 23;
var Aadit = /** @class */ (function () {
    function Aadit() {
    }
    Aadit.prototype.addTwoVariables = function (x, y) {
        return x + y;
    };
    return Aadit;
}());
console.log("the global variable was " + globalVariable);
console.log(" lets make the sum of 2 variables using typescript ");
var objectForClass = new Aadit();
console.log(objectForClass.addTwoVariables(2, 35));
//# sourceMappingURL=functionI.js.map