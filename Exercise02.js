String.prototype.reverse = function() {
    let reversed = '';
    for (let i = this.length - 1; i >= 0; i--) {
        reversed += this[i];
    }
    return reversed;
};


String.prototype.reverseWords = function() {
    let words = this.split(' ');
    words = words.map(word => word.reverse())
    return words.join(' ');
};

console.log("hello world".reverse());
console.log("hello world".reverseWords());
