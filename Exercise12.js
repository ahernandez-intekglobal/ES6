Date.prototype.addDays = function (days) {
    this.setDate(this.getDate() + days);
};

let today = new Date();
console.log("Today:", today);

today.addDays(7);
console.log("Date after adding 7 days:", today);

today.addDays(-3);
console.log("Date after subtracting 3 days:", today);
