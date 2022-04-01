function flatAndSort(array) {
    const numbers = [];

    /* array.forEach(element => {
        element.forEach(unit => numbers.push(unit))
    }) */

    /* for(i = 0; i < array.length; i++) {
        let innerArrayLength = array[i].length;
        for(j = 0; j < innerArrayLength; j++) {
            numbers.push(array[i][j])
        }
    } */

    array.forEach(element => {
        numbers.push(...element)
    });

    numbers.sort((a, b) => a - b)
    /* numbers.sort((a, b) => {
        if(a > b) {
            return 1
        } else if(a < b) {
            return -1
        } else {
            return 0
        }
    }) */

    return numbers
}


console.log(flatAndSort([[1, 5, 3], [6, 19, 11], [47, 128, 5], [1, 93, 57, 42, 103]]))
console.log(flatAndSort([[1, 3], [4, 81], [7 ,5], [2, 6]]))
console.log(flatAndSort([[], [], [], []]))
console.log(flatAndSort([[100, 50], [60, 100], [20, 100, 70], [10, 40, 80]]))