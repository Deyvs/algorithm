const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Usando Loop For
function retornaImpares() {
    let newNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 != 0) {
            newNumbers.push(numbers[i]);
        }
    }
    return newNumbers
}

console.log(retornaImpares())

//Usando Filter
const baseImpares = num => num % 2 === 1

const retornaImpar = numbers.filter(baseImpares);

console.log(retornaImpar)