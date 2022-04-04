function calculandoIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} 
    terá ${this.idade + anos} anos de idade`
}

const pessoa1 = {
    nome:'Maria',
    idade: 6
}

const pessoa2 = {
    nome: 'Rafael',
    idade: 34
}

const pessoa3 = {
    nome: 'Ghessica',
    idade: 30
}

const animal = {
    nome: 'lili',
    idade: 2,
    raca: 'shitsu'
}

console.log(calculandoIdade.call(pessoa1,20))