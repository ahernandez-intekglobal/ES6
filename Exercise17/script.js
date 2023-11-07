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

let secondInfoDiv = document.querySelectorAll('.info')[1];

secondInfoDiv.firstElementChild.textContent = candidate.name.firstname;
secondInfoDiv.lastElementChild.textContent = candidate.printName();
