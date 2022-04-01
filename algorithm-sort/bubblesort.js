//Ordem de complexidade
//No mellhor caso: O(n)
//No Pior caso: O(n²)

//versão 1
function bubbleSort(items) {
    for (i = 0; i < items.length - 1; i++) {
        for (j = 0; j < items.length -1; j++) {
            if(items[j] > items[j+1]) {
                [items[j], items[j+1]] = [items[j+1], items[j]];
            }
        }
    }
    return items
}

//versão 2
function bubbleSortTwo(items) {
    for (let last = items.length - 1; last > 0; last--) {
        for (let i = 0; i < last; i++) {
            if(items[j] > items[j+1]) {
                let temp = items[j+1];
                items[j+1] = items[j];
                items[j] = temp;
            }
        }
    }
    return items
}

//versão 3
function bubbleSortFinal(items) {
    let swap;
    let last = items.length - 1;    
    do {
        swap = false;
        for (let i = 0; i < last; i++) {
            if(items[i] > items[i+1]) {
                [items[i], items[i+1]] = [items[i+1], items[i]];
                swap = true;
            }
        }
        last--;
    } while (swap);
    return items
}


let arr = [2, 5, 1, 4, 7, 9, 3, 6]
let arr1 = ["g", "f", "a", "q", "s", "b", "p", "e"]
let arr2 = ["banana", "manga", "abacate", "carambola"]


console.log(bubbleSort(arr));
console.log(bubbleSortTwo(arr));
console.log(bubbleSortFinal(arr));

