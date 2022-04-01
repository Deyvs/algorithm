function highestLetter(str) {
    const newStr = str.toLowerCase().split('').sort();
    return newStr[newStr.length-1]
}


console.log(highestLetter("Lorem ipsum dolore sec avanti"));
console.log(highestLetter("Hello"));
console.log(highestLetter("May the force be with you"));
console.log(highestLetter("Its over nine thousand"));