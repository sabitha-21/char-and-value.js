function countCharacters(str) {
    const charCount = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    return charCount;
}

let result = countCharacters("hello world");
console.log(result);