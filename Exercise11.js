function findDifferentPropertyKeys(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    let diffKeys = [];

    for (let key of keys1) {
        if (!keys2.includes(key)) {
            diffKeys.push(key);
        }
    }

    for (let key of keys2) {
        if (!keys1.includes(key)) {
            diffKeys.push(key);
        }
    }

    return diffKeys;
}

let object1 = { name: "John", age: 30, city: "New York" };
let object2 = { name: "Jane", age: 30, country: "USA" };

let differentKeys = findDifferentPropertyKeys(object1, object2);
console.log(differentKeys);
