function isTwoPassed(...args) {
    return args.includes(2);
}

console.log(isTwoPassed(1, 2, 3));
console.log(isTwoPassed(1, 3, 4));
console.log(isTwoPassed());
