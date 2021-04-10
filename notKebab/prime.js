"use strict";
var n = 20;
var arr, _a = [];
var functional = /** @class */ (function () {
    function functional() {
    }
    functional.prototype.showPrime = function (n) {
        for (var i = 0; i <= n; i++) {
            if (i % 2 == 0) {
                checkForPrime(i);
            }
        }
    };
    return functional;
}());
//# sourceMappingURL=prime.js.map