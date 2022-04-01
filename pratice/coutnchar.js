function checkBalance(str) {
    const charCount = {};

    for (i = 0; i < str.length; i++) {
        charCount[str[i]] = charCount[str[i]] ? charCount[str[i]] + 1 : 1
    }

    return Object.values(charCount).every((count, index, array) => {
        return index !== 0 ? count === array[index - 1] : true
    })
}


console.log(checkBalance('This is Thee'))
console.log(checkBalance('ssd'))
console.log(checkBalance('Lorem ipsum'))
console.log(checkBalance('QQwweerrttyy'))