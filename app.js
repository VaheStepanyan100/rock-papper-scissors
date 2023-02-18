function getComputerChoice() {
  const arrOfshapes = ["Rock", "Paper", "Scissors"];
  const lengthOfShapes = arrOfshapes.length;
  return arrOfshapes[Math.floor(Math.random() * lengthOfShapes)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return `Draw! You both picked ${computerSelection}`;
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    return `You Lose! Paper beats Rock`;
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    return `You Win! Rock beats Scissors`;
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    return `You Win! Paper beats Rock`;
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    return `You Lose! Scissors beats Paper`;
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    return `You Lose! Rock beats Scissors`;
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    return `You Win! Scissors beats Paper`;
  }
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "Draw";
  } else if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection.toLowerCase() === "scissors") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection.toLowerCase() === "paper") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection.toLowerCase() === "rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Type Rock Paper or Scissors!");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
