function quotation(fullName) {
    const names = fullName.split(' ');
    let initials = '';

    for(i = 0; i < names.length -1; i++) {
        initials += ` ${names[i][0].toUpperCase()}.`
    }
    const quot = `${names[names.length - 1].toUpperCase()},${initials}`

    return quot
}

console.log(quotation('Deyvison Ramos Silva'))
console.log(quotation('John Ronald Reuel Tolkien'))
console.log(quotation('Cristopher James Paolini'))
console.log(quotation('Suzanne Marie Collins'))

/* let str = 'name';
console.log(str.toUpperCase()) */