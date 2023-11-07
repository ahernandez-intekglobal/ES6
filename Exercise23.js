function getRandomNonRepeating(min, max) {
    if (min > max) {
        return null;
    }

    let numbers = Array.from({ length: max - min + 1 }, (_, index) => min + index);

    // Shuffle the array using the Fisher-Yates algorithm
    for (let i = numbers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    return () => {
        if (numbers.length === 0) {
            return null;
        }
        return numbers.pop();
    };
}

// Create generator
let generateRandomNumber = getRandomNonRepeating(1, 10);

for (let i = 0; i < 10; i++) {
    // Use generator
    let randomNumber = generateRandomNumber();
    if (randomNumber === null) {
        console.log("All numbers used.");
        break;
    }
    console.log(randomNumber);
}
