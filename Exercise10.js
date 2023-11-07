function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
};

function Medic(firstName, lastName, specialty) {
    Person.call(this, firstName, lastName);
    this.specialty = specialty;
}

Medic.prototype = Object.create(Person.prototype);

Medic.prototype.getFullNameWithSpecialty = function() {
    return this.getFullName() + ', ' + this.specialty;
};

let person = new Person('John', 'Doe');
let medic = new Medic('Dr. Jane', 'Smith', 'Cardiologist');

console.log(person.getFullName());
console.log(medic.getFullNameWithSpecialty());

function ajaxGetRequest(data, callback) {
    fetch('http://localhost:5500')
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(function (data) {
            callback(data);
        })
        .catch(function (error) {
            console.error('Fetch error:', error);
        });
}

ajaxGetRequest(person, function (response) {
    console.log('Response from the local server:', response);
});


ajaxGetRequest(person);
