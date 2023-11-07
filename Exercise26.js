function foo1() {
    var fn = function () {
        console.log(this.foo);
    };
    return { foo: 'bar' };
}

function foo2() {
    var fn = function () {
        console.log(this.foo);
    };
    return { foo: 'baz' };
}

console.log(foo1());
console.log(foo2());

// foo1 function:

// Inside the foo1 function, there is a nested function fn that attempts to log the foo property of the this object.
// However, there is no explicit context set for this within fn, so it will refer to the global object.
// foo1 returns an object { foo: 'bar' }.

// foo2 function:

// Similar to foo1, foo2 has a nested function fn that tries to log the foo property of the this object.
// Again, there is no explicit context set for this, so it refers to the global object.
// foo2 returns a different object { foo: 'baz' }.