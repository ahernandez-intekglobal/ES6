function removeElementsFromArray(arr, elementsToRemove) {
    return arr.filter(element => !elementsToRemove.includes(element));
}

let originalArray = [1, 2, 3, 4, 5];
let elementsToRemove = [3, 5];

let newArray = removeElementsFromArray(originalArray, elementsToRemove);

console.log(newArray);
