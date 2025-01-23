// can be quote using "" ''
console.log("Hello" + " World"); //concat two string to "Hello World"
const repoCount = 24;

// instead we use stinring interpolation template literal ``

console.log(`Hello World ${repoCount}`);

const name = "Deepak Shrestha";
const position = new String("Laravel Developer");
console.log(position.length);

console.log(name);
console.log(typeof name);
console.log(typeof position);
console.log(name.length);
console.log(name[0]);
console.log(name.__proto__);
console.log(position.startsWith("Lar"));
console.log(position.includes("Lar"));
console.log(position.padStart(30, "Lar"));
console.log(position.charCodeAt(0));

console.log(name.charAt(3));
console.log(name.indexOf("t"));

console.log(position.substring(0, 5)); //cannot use negative index
console.log(position.slice(0, 5)); // can use negative index
console.log(position.slice(-17, -10)); // can use negative index

console.log(position.trim());

