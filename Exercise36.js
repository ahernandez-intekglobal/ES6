function myPowerFn(base) {
    return function(exponent) {
        return Math.pow(base, exponent);
    };
}

var n = myPowerFn(3);
var result = n(2);
console.log(result);
