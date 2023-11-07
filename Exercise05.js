Array.prototype.duplicate = function() {
    return [...this, ...this];
};

let originalArray = [1, 2, 3, 4];
let duplicatedArray = originalArray.duplicate();
console.log(duplicatedArray);
