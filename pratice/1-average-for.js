// Criar uma função que receba um parâmetro e retorne a média dos valores.
//Usando FOR

const numbers1 = [10, 9, 6, 8, 9, 1, 5, 7];
const numbers2 = [2, 5, 7, 1, -2];
const numbers3 = [10, 10, 10, 10, 9];
const numbers4 = [25, 75];

function average(array) {
    let sum = 0;
    for(i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let avg = sum / array.length;
    return avg
}

console.log(average(numbers1));
console.log(average(numbers2));
console.log(average(numbers3));
console.log(average(numbers4));