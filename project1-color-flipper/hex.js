const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById("flipper-btn");
const color = document.querySelector(".color");

button.addEventListener("click", () => {
  const hexCode = "#" + Array.from({ length: 6 }, () => hex[generateRandomNumber()]).join("");
  document.body.style.backgroundColor = hexCode;
  color.textContent = hexCode;
});

const generateRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};
