"use strict";
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.getElementById("flipper-btn");
const color = document.querySelector(".color");

button.addEventListener("click", () => {
  const randomNumber = generateRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

const generateRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
