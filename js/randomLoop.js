"use strict";
var makingLoops = /** @class */ (function () {
    function makingLoops() {
    }
    makingLoops.prototype.starPattern = function (n) {
        for (var i = 0; i <= n; i++) {
            for (var j = 0; j <= i; j++) {
                console.log(' *');
            }
            console.log("\n");
        }
    };
    return makingLoops;
}());
var objectForTheClass = new makingLoops();
objectForTheClass.starPattern(5);
//# sourceMappingURL=randomLoop.js.map