const numbers = [4, 9, 2, 1, 5, 19, 62, 32, 7, 47];

function maiorElemento() {
    let maxNumber = 0;
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }
    return maxNumber
}

console.log(maiorElemento())