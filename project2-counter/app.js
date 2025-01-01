const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let count = Number(display.textContent, 10) || 0;
    const styles = e.currentTarget.classList;

    if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }

    display.style.color = count < 0 ? "red" : count === 0 ? "black" : "green";

    display.textContent = count;
  });
});

// const increaseButton = document.querySelector(".increase");
// const resetButton = document.querySelector(".reset");
// const decreaseButton = document.querySelector(".decrease");

// decreaseButton.addEventListener("click", () => {
//   console.log(typeof display.textContent);
//   display.style.color = "red";
//   display.textContent = display.textContent - 1;
// });

// increaseButton.addEventListener("click", () => {
//     console.log(typeof display.textContent);
//     display.style.color = "green";
//     display.textContent = Number(display.textContent) + 1;
//   });

//   resetButton.addEventListener("click", () => {
//     display.style.color = "black";
//     display.textContent = 0;
//   });

// Type Coercion
// JavaScript often performs type coercion when performing operations between strings and numbers.
// Such as this,
// the - operator (and other arithmetic operators) forces type conversion to numbers.
// unlike string concatenation which would happen with the + operator.
