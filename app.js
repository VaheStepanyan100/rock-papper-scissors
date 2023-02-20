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
  let playerScore = 0;
  let computerScore = 0;
  let Draw = 0;

  const rockBtn = document.createElement("button");
  const paperBtn = document.createElement("button");
  const scissorsBtn = document.createElement("button");

  rockBtn.textContent = "Rock";
  paperBtn.textContent = "Paper";
  scissorsBtn.textContent = "Scissors";

  document.body.appendChild(rockBtn);
  document.body.appendChild(paperBtn);
  document.body.appendChild(scissorsBtn);

  const div = document.createElement("div");
  document.body.appendChild(div);

  const p = document.createElement("p");
  p.style.fontWeight = "bold";
  p.style.fontSize = "25px";
  document.body.appendChild(p);

  function handler(shape) {
    if (playerScore === 0 && computerScore === 0 && Draw === 0) {
      div.innerText = "";
    }

    const computerSelection = getComputerChoice();
    const playerSelection = shape;
    div.innerText += playRound(playerSelection, computerSelection) + "\n";
    if (checkWinner(playerSelection, computerSelection) === "Player") {
      playerScore++;
    } else if (checkWinner(playerSelection, computerSelection) === "Computer") {
      computerScore++;
    } else if (checkWinner(playerSelection, computerSelection) === "Draw") {
      Draw++;
    }

    if (playerScore !== 5 && computerScore !== 5) {
      p.innerText = "";
    }
    if (playerScore === 5) {
      p.innerText = "You Win!";
      computerScore = 0;
      playerScore = 0;
      Draw = 0;
    } else if (computerScore === 5) {
      p.innerText = "You Lose!";
      computerScore = 0;
      playerScore = 0;
      Draw = 0;
    }
  }

  rockBtn.addEventListener("click", () => handler("Rock"));
  paperBtn.addEventListener("click", () => handler("Paper"));
  scissorsBtn.addEventListener("click", () => handler("Scissors"));
}

game();
