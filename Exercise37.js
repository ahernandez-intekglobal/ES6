String.prototype.exclamation = function() {
    return `${this}!`;
};

console.log("hello".exclamation());
console.log("hello world".exclamation());

let add = (...numbers) => numbers.reduce((total, num) => total + num, 0);

console.log(add(2, 5));
console.log(add(7, 11));
console.log(add(12, 8, 5, 6));
