"use strict";
let any;
any = 3;
any = 'teste';
any = 5;
let str = 'verificar';
str = any;
let unknownv;
unknownv = 3;
unknownv = 'opa';
unknownv = true;
unknownv = 'vai sim';
let str2 = 'agora vai';
//str2 = unknownv;
typeof unknownv === 'string' ? str2 = unknownv : unknownv;
let jE = (erro, codigo) => {
    throw { error: erro, code: codigo };
};
jE('erro', 500);
