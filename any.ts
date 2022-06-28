let vany: any;
vany = 1;
vany = 'ola';
vany = true;

let vString: string = 'teste';
vString = vany;
let vString2: string = 'testao';
vString2 = vany;

let somarString = (s: string, s2: string) => {
    console.log(s + s2);
}
somarString(vString, vString2);