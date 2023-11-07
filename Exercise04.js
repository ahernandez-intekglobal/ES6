function flat(arr) {
    let flattened = [];

    for (let element of arr) {
        if (Array.isArray(element)) {
            flattened.push(...flat(element));
        } else {
            flattened.push(element);
        }
    }
    return flattened;
}

let input = [1, 2, 3, [4, 5, [6, 7]], 8, 9];
let output = flat(input);
console.log(output);
