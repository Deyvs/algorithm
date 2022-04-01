/* function square(num) {
    const str = num.toString().split('').map(number => number*number);
    const newSquare = parseInt(str.toString().replace(/,/g, ''))

    return newSquare
} */

/* function square(num) {
    const str = num.toString();
    let result = "";

    for (let i = 0; i < str.length; i++) {
        result += Math.pow(Number(str[i]), 2).toString();
    }

    return Number(result)
} */

function square(num) {
    const digitsArray = num.toString().split('');
    const squaredArray = digitsArray.map(digit => Number(digit) ** 2).join('');

    return Number(squaredArray)
   
}

const entrada1 = 3514;
const entrada2 = 94571;
const entrada3 = 24;
const entrada4 = 745821698;

//console.log(entrada1.toString())

console.log(square(entrada1))
console.log(square(entrada2))
console.log(square(entrada3))
console.log(square(entrada4))
