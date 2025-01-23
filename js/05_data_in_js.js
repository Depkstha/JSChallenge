// date and time in js

const myDate = new Date();
// console.log(Date.now(), myDate.getSeconds());

const customDate =  new Date();
// console.log(customDate.toDateString());

console.log(customDate.toLocaleString({ timeZone: "Asia/Kathmandu" }));