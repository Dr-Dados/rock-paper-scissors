"use strict";

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

const getComputerChoice = function () {
  const random = Math.floor(Math.random() * 3) + 1;
  let computerChoice;
  switch (random) {
    case 1:
      computerChoice = ROCK;
      break;
    case 2:
      computerChoice = PAPER;
      break;
    case 3:
      computerChoice = SCISSORS;
      break;
  }
  return computerChoice;
};

const playRound = function (playerChoice, computerChoice) {
  if (
    (playerChoice == ROCK && computerChoice == SCISSORS) ||
    (playerChoice == SCISSORS && computerChoice == PAPER) ||
    (playerChoice == PAPER && computerChoice == ROCK)
  ) {
    return `You Win! ${playerChoice} beats ${computerChoice}`;
  } else if (
    (playerChoice == ROCK && computerChoice == PAPER) ||
    (playerChoice == SCISSORS && computerChoice == ROCK) ||
    (playerChoice == PAPER && computerChoice == SCISSORS)
  ) {
    return `You lost! ${computerChoice} beats ${playerChoice}`;
  } else {
    return `it's a draw! You both choose ${computerChoice}`;
  }
};

const game = function () {
  let playerChoice = prompt("choose ur choice").toUpperCase();
  if (playerChoice == "ROCK") playerChoice = ROCK;
  else if (playerChoice == "SCISSORS") playerChoice = SCISSORS;
  else if (playerChoice == "PAPER") playerChoice = PAPER;
  const computerSelection = getComputerChoice();
  console.log(playRound(playerChoice, computerSelection));
};
game();
