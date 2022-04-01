function invert(str) {
    const wordsArray = str.toLowerCase().split(' ');
    const invertedWords = wordsArray.map(word => word.split('').reverse().join('')).join(' ');
    return invertedWords
}

console.log(invert("Lorem ipsum dolore sec avanti"));
console.log(invert("This is an apple"));
console.log(invert("May the force be with you"));
console.log(invert("Its over nine thousand"));
