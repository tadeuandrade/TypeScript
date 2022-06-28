let any: any;
any = 3;
any = 'teste';
any = 5;

let str: string = 'verificar';
str = any;

let unknownv: unknown;
unknownv = 3;
unknownv = 'opa';
unknownv = true;
unknownv = 'vai sim';


let str2: string = 'agora vai';
str2 = unknownv;

typeof unknownv === 'string' ? str2 = unknownv : unknownv


let jE = (erro: string, codigo: number) => {
    throw { error: erro, code: codigo }

}
jE('erro', 500)