let s = (n1: number, n2: number): number => {
    return n1 + n2;
}

let v = (n1: number, n2: number): void => {
    console.log(n1 + n2);
}

let x = (n1: number, n2: number, callback: (n3: number) => number): number => {
    let r = n1 + n2;
    return callback(r);
}

let aQ = (n: number): number => {
    return n * n;
}

console.log(x(1, 3, aQ));