"use strict";
const pessoa = {
    nome: 'Tadeu',
    idade: 30,
    profissao: 'analista'
};
pessoa.idade = 30;
let andre;
let paula;
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Jogador"] = 3] = "Jogador";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 15,
    profissao: Profissao.Desenvolvedora
};
const maria = {
    nome: 'Maria',
    idade: 25,
    profissao: Profissao.Jogador
};
const jessi = {
    nome: 'jessi',
    idade: 25,
    profissao: Profissao.Atriz,
    materias: ['matematica', 'portugues']
};
let listar = (lista) => {
    for (const item of lista) {
        console.log('- ', item);
    }
};
listar(jessi.materias);
