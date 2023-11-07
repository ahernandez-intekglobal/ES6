function findZeroSumCombinations(arr) {
    let result = [];
    let n = arr.length;

    if (n < 3) {
        return result;
    }

    arr.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue; // Skip duplicates
        }

        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];

            if (sum === 0) {
                result.push([arr[i], arr[left], arr[right]]);
                left++;
                right--;

                while (left < right && arr[left] === arr[left - 1]) {
                    left++; // Skip duplicates
                }

                while (left < right && arr[right] === arr[right + 1]) {
                    right--; // Skip duplicates
                }
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

let input = [3, 2, 1, 0, -3, 2, 2, -2];
let zeroSumCombinations = findZeroSumCombinations(input);
console.log(zeroSumCombinations);
