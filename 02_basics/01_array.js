//array

const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(typeof myArr);

const arrHeros = ["Ironman", "Hulk"];

const numbers = new Array(1, 2, 3, 4, 5, 6);
// console.log(numbers);

// console.log(arrHeros[0]);


// interview question array destructuring if no value then undefined
const [x, y = 5] = [10];
console.log(x + y);

//basically what happen here is by array destructring 
// x->10 x takes the first value
//y takes the second value but there is no second value so it's value will be 5 
// so x + y = 15 

//if there was [x,y=5] = [10, 20] then x->10 and y->20 then x+y -> 30 
const [a, b = 5] = [10, 20];
console.log(a + b);

//shallow copy - copy point to the same reference in memory and originalvalue will be change
// and deep copy - copy point to the different reference in memory and value will not change original value


// console.log(isValid(s));
