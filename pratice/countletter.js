//Resolução usando Filter
function contadorDeAs(text) {
    let newText = text.toUpperCase().split('').filter(countAs => {
        if (countAs === 'A') { 
            return true
        } else {
            return false
        }
    });
    
    return `Foram encontrada(s) ${newText.length} letra(s) A no texto/palavra informada.`   
}

//Resolução usando Loop For
function contadorDeA(text) {
    let newText = text.toUpperCase();
    let countA = [];
    for (let i = 0; i < newText.length; i++) {
        if (newText[i] === 'A') {
            countA.push(newText[i])
        }
    }
    return `Foram encontrada(s) ${countA.length} letra(s) A no texto/palavra informada.`
}

console.log(contadorDeA('Samara'))