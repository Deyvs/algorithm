let array = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

const binarySearch = (array, target) => {
    let min = 0;
    let max = array.length - 1;
    let chute;
    let count = 0;
    while(min <= max) {
        chute = Math.floor((min+max)/2);
        count++
        if(array[chute] === target) {
            return `Achei meu valor alvo na posição ${chute} que é: ${array[chute]} e precisei buscar no array ${count}x`;
        } else if (array[chute] < target){
            min = chute + 1;
        } else if (array[chute] > target) {
            max = chute - 1;
        }   
        console.log(chute)
        
    };
    console.log(count);
    return `O número ${target} não está presente nessa lista.`;
}

const result = binarySearch(array, 79)
console.log(result)

//console.log(binarySearch(array, 2))

/* ALGORITIMO DE BUSCA BINÁRIA
O algoritimo de busca binária é eficiente para encontrar um item em uma lista ORDENADA de itens
Ele funciona dividindo repetidamente pela metade a porção da lista que deve conter o item,
até reduzir as localizações possíveis a apenas uma */

/* PSEUDOCÓDIGO da busca binária
As entradas são o ARRAY, que chamamos de array;
O número N de elementos no array;
E o ALVO(TARGET), número/valor a ser buscado

1- Definir min = 0 e max = n - 1 (n= array.length)
2- Se max < min, então pare: o alvo não está presente no array. Retorne -1.
3- Calcule CHUTE como sendo a média entre max e min, arredondando para baixo(este valor deve ser um núemro inteiro)
4- Se array[chute] === target, então pare. Você encontrou! Retorne chute.
5- Se o chute for menor que o target (array[chute] < target), então defina min = chute + 1
6- Caso contrário, o chute for maior que o target (arrya[chute] > target), então defina max = chute - 1
7- Volte para o passo 2 */