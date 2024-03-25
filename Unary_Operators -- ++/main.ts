let a: number = 5;
let b: number = 2;
let c: number;

c = ++a + a++ + --b + b-- + a + b++ + b;
//   6  +  6  +  1  +  0  + 7 +  1  + 2;

//   22  answer

console.log(c);