const people = [{
    nome: "Jurupinga",
    sobrenome: "Jackson",
    idade: 80
},
{
    nome: "Frederico",
    sobrenome: "Mercury",
    idade: 2
},
{
    nome: "Brasil",
    sobrenome: "Hilton",
    idade: 5
},
{
    nome: "Tiririca",
    sobrenome: "Sangalo",
    idade: 16
},
{
    nome: "Bob",
    sobrenome:"Ralley", 
    idade: 100
}];

//Resolvendo com map
const possoOuNaoPodeDirigir = people.map(item => {if(item.idade >= 18) {return ('Pode dirigir')}else {return ('Não pode dirigir')}})

console.log(possoOuNaoPodeDirigir)

//Resolvendo com Loop For
const podeOuNaoPodeDirigir = []
for (let i = 0; i < people.length; i++) {
    if(people[i].idade >= 18) {
        podeOuNaoPodeDirigir.push(`${people[i].nome} tem ${people[i].idade} anos e já pode dirigir`);
    } else {
        podeOuNaoPodeDirigir.push(`${people[i].nome} tem ${people[i].idade} anos e ainda não pode dirigir`)
    }
}

console.log(podeOuNaoPodeDirigir)



