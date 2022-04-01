function stringInverse (text) {
    let newText = text.split('').reverse().join('').toUpperCase();
    return newText 
}

console.log(stringInverse('Samara'))