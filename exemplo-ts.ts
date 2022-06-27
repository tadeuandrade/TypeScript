let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

let adicionarNumero = (n1: number, n2: number, devePrintar: boolean, frase: string) => {
    let r = n1 + n2

    devePrintar ? console.log(frase + r) : devePrintar

    return n1 + n2
}

let devePrintar = false;
let frase = 'O valor é'

button?.addEventListener('click', () => {
    console.log(adicionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase))
})