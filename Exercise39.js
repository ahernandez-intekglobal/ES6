function isInputValid(input) {

    let forbiddenPatterns = /(1234|qwert|asdf)/;
    if (forbiddenPatterns.test(input)) {
        return false
    }

    let keyboard = [
        "qwertyuiop",
        "asdfghjkl",
        "zxcvbnm"
    ];

    for (let i = 0; i < input.length - 2; i++) {
        if (keyboard.reduce((acc, board) => acc || board.includes(input.substring(i, i + 4)), false,)) {
            return false;
        }
    }
    return true;
}


let userInput = "abc123xyztyui";
if (isInputValid(userInput)) {
    console.log("Input is valid.");
} else {
    console.log("Input contains forbidden patterns.");
}
