function fooBar (number) {
    if(number > 0) {
        if(number === 0) {
            return 'FOOBAR'
        }

        if (number % 2 === 0) {
            return 'Foo-' + fooBar(number -1)
        } else {
            return 'Bar-' + fooBar(number - 1)
        }
    } else {
        if(number === 0) {
            return 'FOOBAR'
        }

        if (number % 2 === 0) {
            return 'Foo-' + fooBar(number + 1)
        } else {
            return 'Bar-' + fooBar(number + 1)
        }
    }
    
}

console.log(fooBar(7))