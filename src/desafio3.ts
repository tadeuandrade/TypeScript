let botaoAtualizar = document.getElementById('atualizar-saldo')
let botaoLimpar = document.getElementById('limpar-saldo')
let soma = document.getElementById('soma') as HTMLInputElement
let campoSaldo = document.getElementById('campo-saldo') as HTMLInputElement

let total = 0

let somarAoSaldo = (soma: number) => {
    if (campoSaldo) {
        total += soma
        campoSaldo.innerHTML = total.toString()
        limparCampoSoma()
    }
}

let limparCampoSoma = () => soma.value = "";

let limparSaldo = () => {
    if (campoSaldo) {
        total = 0
        campoSaldo.innerHTML = total.toString()
    }
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
})

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
})

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */