"use strict";
let vany;
vany = 1;
vany = 'ola';
vany = true;
let vString = 'teste';
vString = vany;
let vString2 = 'testao';
vString2 = vany;
let somarString = (s, s2) => {
    console.log(s + s2);
};
somarString(vString, vString2);
