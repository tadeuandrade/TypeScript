"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let adicionarNumero = (n1, n2, devePrintar, frase) => {
    let r = n1 + n2;
    devePrintar ? console.log(frase + r) : devePrintar;
    return n1 + n2;
};
let devePrintar = false;
let frase = 'O valor é';
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    console.log(adicionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase));
});
