//Nums and Maths

const score = 22;
const number = new Number(123.55724234);

// console.log(score); // 22
// console.log(number); // [Number: 22] Number {22} ensure that value will be number 100%

//properties
//1. toExponential
//2.toFixed
//3.toLocaleString
//4.toPrecision
//5.toString
//6.valueOf

// console.log(
//   number.toString(),  //123.55724234
//   number.toLocaleString(), //123.557   
//   number.toFixed(2),        //123.56
//   number.toExponential(),   //1.2355724234e+2
//   number.toPrecision(4),    //123.6
// );


const balance = new Number(100);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 24234.89767;
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000000;
// console.log(hundreds.toLocaleString("en-IN"));

/*-------------------------Maths-------------------------*/
console.log(Math); //Math Object
console.log(Math.PI); //3.14
console.log(Math.abs(-4));//absolute value always positive
console.log(Math.round(4.65)); //5 round off to nearest number

