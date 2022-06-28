"use strict";
let sv = (n1, n2) => {
    return typeof n1 === 'string' || typeof n2 === 'string' ? n1.toString() + n2.toString() : n1 + n2;
};
console.log(sv(1, 5));
console.log(sv('ola', 'tudo bem'));
console.log(sv('1', 5));
