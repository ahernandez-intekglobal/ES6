function moveZeroesToEnd(arr) {
    let nonZeroIndex = 0;
    let zeroCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroIndex] = arr[i];
            nonZeroIndex++;
        } else {
            zeroCount++;
        }
    }

    for (let i = 0; i < zeroCount; i++) {
        arr[arr.length - 1 - i] = 0;
    }
}

let input = [2, 0, 4, 5, 0, 2, 0, 0, 3];
moveZeroesToEnd(input);
console.log(input);
