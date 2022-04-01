// Criar uma função que receba um parâmetro e retorne a média dos valores.
//Usando forEach

let num1 = [10, 9, 6, 8, 9, 1, 5, 7];
let num3 = [10, 10, 10, 10, 9];
let num4 = [25, 75];
let num2 = [2, 5, 7, 1, -2];

function average(array) {
    let sum = 0;
    array.forEach(item => {
        sum += item
    })
    let avg = sum / array.length;
    return avg
}

console.log(average(num1));
console.log(average(num2));
console.log(average(num3));
console.log(average(num4));