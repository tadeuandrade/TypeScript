let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

let adicionarNumero = (n1: number, n2: number) => {
    return n1 + n2
}
button?.addEventListener('click', () => {
    console.log(adicionarNumero(Number(input1.value), Number(input2.value)))
})