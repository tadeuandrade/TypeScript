const pessoa = {
    nome: 'Tadeu',
    idade: 30,
    profissao: 'analista'
}


pessoa.idade = 30

let andre: (nome: string, idade: number, profissao: string) => {
    nome: 'Andre',
    idade: 30,
    profissao: 'analista'
}

let paula: (nome: string, idade: number, profissao: string) => {
    nome: 'Paula',
    idade: 25,
    profissao: 'analista de'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    Jogador
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}


interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 15,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 25,
    profissao: Profissao.Jogador

}

const jessi: Estudante = {
    nome: 'jessi',
    idade: 25,
    profissao: Profissao.Atriz,
    materias: ['matematica', 'portugues']
}


let listar = (lista: string[]) => {
    for (const item of lista) {
        console.log('- ', item)
    }
}
listar(jessi.materias)