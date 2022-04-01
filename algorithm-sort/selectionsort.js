//Ordem de complexidade
//No mellhor caso: O(n²)
//No Pior caso: O(n²)

function selectionSort(vetor) {
    let lowestIndex;
    
    for (i = 0; i < vetor.length - 1; i++) {
        lowestIndex = i;
        for (j = i + 1; j < vetor.length; j++){
            if(vetor[j] < vetor[lowestIndex]) {
                lowestIndex = j;
            }
        }
        if (i != lowestIndex) {
            //Executando a troca de posição da forma antiga
            let temp = vetor[lowestIndex];
            vetor[lowestIndex] = vetor[i];
            vetor[i] = temp;
            
            //Executando a troca de posições utilizando esta forma ataulamente
            //[vetor[i], vetor[lowestIndex]] = [vetor[lowestIndex], vetor[i]]
        }
    } 
    return vetor
}

let arr = [2, 5, 1, 4, 7, 9, 3, 6]
let arr1 = ["g", "f", "a", "q", "s", "b", "p", "e"]
let arr2 = ["banana", "manga", "abacate", "carambola"]

console.log(selectionSort(arr));
console.log(selectionSort(arr1));
console.log(selectionSort(arr2));
