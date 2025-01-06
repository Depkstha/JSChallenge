let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", (event) => {
      console.log(event.currentTarget);
      console.log(event.type);
  });
});
