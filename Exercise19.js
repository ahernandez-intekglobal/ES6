function isMatch(pattern, str) {
    let patternLength = pattern.length;
    let strLength = str.length;

    if (patternLength !== strLength){
        return false;
    }

    for (let i = 0; i <= patternLength; i++) {
        if (pattern[i] !== '*' && pattern[i] !== str[i]) {
            return false;
        }
    }

    return true;
}

console.log(isMatch("h*llo", "hello"));
console.log(isMatch("h*llo", "hallo"));
console.log(isMatch("h*llo", "halloo"));
console.log(isMatch("abc", "abcdef"));
