"use strict";

let choiceButtons = document.querySelectorAll(".btn-choice");
let resultIcons = document.querySelectorAll(".result-icon");
let playAgain = document.querySelector(".try-again");

let playerScore = 0;
let computerScore = 0;
let result = document.querySelector(".result");

document.querySelector(".rock").addEventListener("click", () => {
  let playerSelection = "rock";
  playGame(playerSelection, computerPlay());
});
document.querySelector(".paper").addEventListener("click", () => {
  let playerSelection = "paper";
  playGame(playerSelection, computerPlay());
});
document.querySelector(".scissors").addEventListener("click", () => {
  let playerSelection = "scissors";
  playGame(playerSelection, computerPlay());
});

function computerPlay() {
  const compChoice = ["rock", "paper", "scissors"];
  return compChoice[Math.floor(Math.random() * compChoice.length)];
}

function playRound(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection === computerSelection:
      result.textContent = "It's a draw!";
      break;
    case playerSelection === "rock" && computerSelection === "paper":
    case playerSelection === "paper" && computerSelection === "scissors":
    case playerSelection === "scissors" && computerSelection === "rock":
      result.textContent = `You lose, ${computerSelection} beats ${playerSelection}!`;
      computerScore++;
      document.querySelector(".computer-score").textContent = computerScore;
      break;
    case playerSelection === "rock" && computerSelection === "scissors":
    case playerSelection === "scissors" && computerSelection === "paper":
    case playerSelection === "paper" && computerSelection === "rock":
      result.textContent = `You win, ${playerSelection} beats ${computerSelection}!`;
      playerScore++;
      document.querySelector(".player-score").textContent = playerScore;
  }
}

function checkScore() {
  if (playerScore === 5 || computerScore === 5) {
    choiceButtons.forEach((button) => {
      button.setAttribute("disabled", "");
      button.classList.add("disabled");
    });
    if (playerScore > computerScore) {
      result.textContent = "Congratulations! You're the winner, baby!";
      result.style.color = "#5c940d";
      resultIcons.forEach((icon) => {
        icon.classList.add('visible');
      });
      playAgain.classList.add('visible');
    } else {
      result.textContent = "You've lost. Better luck next time!";
      result.style.color = "#d9480f";
      resultIcons[0].setAttribute('src', 'img/loser.png');
      resultIcons[0].classList.add('visible');
      resultIcons[1].setAttribute('src', 'img/winning.png');
      resultIcons[1].classList.add('visible');
      playAgain.classList.add('visible');
    }
  }
}

function playGame(playerSelection, computerSelection) {
  playRound(playerSelection, computerSelection);
  checkScore();
}

playAgain.addEventListener("click", () => {
  window.location.reload();
});
