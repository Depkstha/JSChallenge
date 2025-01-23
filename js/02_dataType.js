//ECMA Script

//"use strict"; treat all js code as newer version and new standard by js engine

// alert(3 + 3); when compiling using node js give error should use browser appending to html

//Data Type

//Primitive data types
let myName = "Deepak"; //string
let myAge = 25; //number 2 to power 53
//bigint for large value
let isMarried = false; //boolean
 //null => it is a type, standalone value, it is a representation of empty value 
 let state; //undefined => value is not defined

 //symbol => unique value

 //Non Primitive data types

 let data  = new Object();
 let data1 = {};

 let data3 = [];

 //type of null is object
 //type of undefined is undefined because it is a type
 console.table([typeof data, typeof data1, typeof null, typeof undefined, typeof data3]);

//  console.log("" === "");
//  console.log([] === []);
 
//  "" === ""
//  Primitive Strings Comparison:
//  Both "" are primitive values (string literals).
//  When comparing two primitive values using the strict equality operator (===), their value is compared directly.
//  Since both strings are empty and have the same value, the result is true.

//  [] === []
//  Object Comparison:
//  Arrays in JavaScript are objects, and objects are compared by reference, not by value.
//  Each [] creates a new array instance with a unique reference in memory.
//  Even though the two arrays look identical (both empty), they are stored at different memory locations, so their references are not the same.
//  Therefore, [] === [] evaluates to false.

//  Analogy:
//  Think of primitive values as books with the same content:
 
//  If two books have identical content ("" === ""), they are considered the same.
//  But objects (like arrays) are like houses:
 
//  Even if two houses look the same (empty in this case), they are at different locations in a neighborhood ([] !== []).

// const a = [1,2];
// const b = [1,2];
// console.log(a === b);

console.log(!![]);
