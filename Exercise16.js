let candidate = {
    name: {
        firstname: 'John',
        lastname: 'Galt',
        phone: '123-456-7890'
    },
    printName: function () {
        return this.name.firstname + ' ' + this.name.lastname;
    }
};

let fullName = candidate.printName();
console.log(fullName);
