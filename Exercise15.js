var foo = (function () {
    var privateData = "This is private data";

    function privateMethod() {
        console.log("This is a private method");
    }

    function bar() {
        console.log("bar method");
    }

    function test() {
        console.log("test method");
    }

    return {
        bar: bar,
        test: test
    };
})();

console.log(foo.hasOwnProperty("bar"));
console.log(foo.hasOwnProperty("test"));
console.log(foo.hasOwnProperty("privateMethod"));
console.log(foo.hasOwnProperty("privateData"));
