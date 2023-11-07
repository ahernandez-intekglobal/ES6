Date.prototype.nextDay = function() {
    let nextDate = new Date(this);
    nextDate.setDate(this.getDate() + 1);
    return nextDate;
};

let today = new Date();
console.log("Today:", today);

let tomorrow = today.nextDay();
console.log("Tomorrow:", tomorrow);
