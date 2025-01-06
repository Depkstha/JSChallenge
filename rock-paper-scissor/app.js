let userScore = 0;
let computerScore = 0;

//choice options
const OPTIONS = ["rock", "paper", "scissors"];

//winning logic
const RULES = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

const choices = document.querySelectorAll(".choice");
const userScoreBoard = document.getElementById("user-score");
const computerScoreBoard = document.getElementById("computer-score");
const message = document.getElementById("message");

choices.forEach((choice) => {
  choice.addEventListener("click", (event) => {
    const userChoice = event.currentTarget.id;
    playGame(userChoice);
  });
});

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * OPTIONS.length);
  return OPTIONS[randomIndex];
};

const gameDraw = (userChoice) => {
  message.innerText = `It's a draw. You both chose ${userChoice}. Play again!`;
  message.style.backgroundColor = "#081b31";
  return;
};

const decideWinner = (userChoice, computerChoice) => {
  return RULES[userChoice] === computerChoice ? "user" : "computer";
};

const showWinner = (winner, userChoice, computerChoice) => {
  if (winner == "user") {
    userScore++;
    userScoreBoard.innerText = userScore;
    message.style.backgroundColor = "green";
    message.innerText = `You won! ${userChoice} beats ${computerChoice}.`;
  } else if (winner == "computer") {
    computerScore++;
    computerScoreBoard.innerText = computerScore;
    message.style.backgroundColor = "red";
    message.innerText = `You lost! ${computerChoice} beats ${userChoice}.`;
  }
};

const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();
  if (userChoice === computerChoice) {
    gameDraw(userChoice);
  } else {
    const winner = decideWinner(userChoice, computerChoice);
    showWinner(winner, userChoice, computerChoice);
  }
};
