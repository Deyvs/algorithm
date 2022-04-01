// Criar uma função que receba um parâmetro e retorne a média dos valores.
//Usando REDUCE

const numb1 = [10, 9, 6, 8, 9, 1, 5, 7];
const numb2 = [2, 5, 7, 1, -2];
const numb3 = [10, 10, 10, 10, 9];
const numb4 = [25, 75];

function average(array) {
    const sum = (array.reduce((accum, item) => accum += item, 0) / array.length);
    
    return sum   
}

console.log(average(numb1));
console.log(average(numb2));
console.log(average(numb3));
console.log(average(numb4));