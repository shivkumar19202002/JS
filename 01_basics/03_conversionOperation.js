let score = "33abc"
let x = undefined
let y = null
//console.log(typeof score)
//console.log(typeof (score))

let valueInNumber1 = Number(score)
//console.log(typeof valueInNumber1)
//console.log(valueInNumber1)

let valueInNumber2 = Number(x)
//console.log(typeof valueInNumber2)
//console.log(valueInNumber2)

let valueInNumber3 = Number(y)
//console.log(typeof valueInNumber3)
//console.log(valueInNumber3)

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn1 = 1
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
//console.log(booleanIsLoggedIn1) // true

let isLoggedIn2 = ""
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
//console.log(booleanIsLoggedIn2) // false

let isLoggedIn3 = "Shiv"
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
//console.log(booleanIsLoggedIn3) // true

// 1 => true; 0 => false
// "" => false
// "Shiv" => true

let someNumber = 33
let stringNumber = String(someNumber)
//console.log(stringNumber)
//console.log(typeof stringNumber)

// *********************** Operations ***********************

let val = 3
let negValue = -val
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello "
let str2 = "Shiv"
let str3 = str1 + str2
// console.log(str3);
// console.log(str1 + str2);

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32
// console.log(true); // true
// console.log(+true); // 1
// console.log(true+); // Error
// console.log(""); // nothing will print
// console.log(+""); // 0

let a = 3
let b = a++
let c = ++a
// console.log(b); // 3
// console.log(c); // 5

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

