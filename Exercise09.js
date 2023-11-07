function fibonacci(n, memo = {}) {
    if (n <= 0) {
        return 0; // Base case: F(0) = 0
    } else if (n === 1) {
        return 1; // Base case: F(1) = 1
    } else if (memo[n]) {
        return memo[n]; // Return memoized result if available
    } else {
        // Calculate and memoize the result
        memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
        return memo[n];
    }
}

let n = 10;
let result = fibonacci(n);
console.log(`The Fibonacci(${n}) number is: ${result}`);
