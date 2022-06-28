"use strict";
let s = (n1, n2) => {
    return n1 + n2;
};
let v = (n1, n2) => {
    console.log(n1 + n2);
};
let x = (n1, n2, callback) => {
    let r = n1 + n2;
    return callback(r);
};
let aQ = (n) => {
    return n * n;
};
console.log(x(1, 3, aQ));
