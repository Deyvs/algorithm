function reverse(array) {
    let reversedArray = [];
    let arrayReverse
    for (i = 0; i < array.length; i++) {
        reversedArray[i] = array[array.length - 1 - i]
    }
    return reversedArray
}

const numbers = [0, 9, 6, 8, 9, 1, 5, 7];
const str = ['Oh', 'Hi', 'Hello'];
const boole = [false, true, true, true];
const mix = ["It's", "not", true, 0]

console.log(reverse(numbers))
console.log(reverse(str))
console.log(reverse(boole))
console.log(reverse(mix))