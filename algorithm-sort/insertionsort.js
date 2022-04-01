//Ordem de complexidade
//No mellhor caso: O(n)
//No Pior caso: O(n²)

function insertionSort(vetor) {
    let atual;
    for (i = 1; i < vetor.length; i++) {
        let j = i - 1;
        atual = vetor[i];
        while (j >= 0 && atual < vetor[j]) {
            vetor[j+1] = vetor[j];
            j--;
        }
        vetor[j+1] = atual;
    }
    return vetor;
}

let arr = [2, 5, 1, 4, 7, 9, 3, 6]
let arr1 = ["g", "f", "a", "q", "s", "b", "p", "e"]
let arr2 = ["banana", "manga", "abacate", "carambola"]

console.log(insertionSort(arr));
console.log(insertionSort(arr1));
console.log(insertionSort(arr2));