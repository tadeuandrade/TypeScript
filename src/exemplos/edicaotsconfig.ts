let button2 = document.getElementById('button');

let somarimplicito = (p1, p2) => { // PARAMETRO SEM TIPO ALTERADO NO TSCONFIG "noImplicitAny"
    return p1 + p2
}

button2.addEventListener('click', () => { //VALIDARAÇÃO DE NULO ALTERADO NO TSCONFIG "strictNullChecks"
    console.log('teste')
})