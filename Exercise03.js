function intersection(arr1, arr2) {
    let result = [];

    for (let element of arr1) {
        if (arr2.includes(element)) {
            result.push(element);
        }
    }

    return result;
}

let input1 = [2, 3, 5, 3];
let input2 = [3, 4, 3, 5, 3, 6, 8];

let output = intersection(input1, input2);
console.log(output);
