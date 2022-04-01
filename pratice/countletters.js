//Resolução usando Filter
function contadoraDeLetras(text, search) {
    let newSearch = search.toLowerCase();
    let newString = text.toLowerCase().split('').filter(result => {
        if (result === newSearch) {
            return true
        } else {
            return false
        }
    });
    return `Foram encntrada(s) ${newString.length} letra(s) ${search} no palavra/texto informada(s).`
    
}

//Resolução usando Loop For
function contadorDeLetra(text, search) { 
    let newSearch = search.toLowerCase();
    let newText = text.toLowerCase();
    let countLetter = [];
    for (let i = 0; i < newText.length; i++) {
        if (newText[i] === newSearch) {
            countLetter.push(newText[i]);
        } 
    }
    return `Foram encontrada(s) ${countLetter.length} letra(s) ${search} na/no palavra/texto informados"`
}

console.log(contadorDeLetra('coco de bunda', 'a'))
