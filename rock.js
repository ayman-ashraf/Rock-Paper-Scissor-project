let options = ["rock", "paper", "scissor"];

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

let computerSelection = getComputerChoice();

function checkWinner(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissor" && computerSelection == "paper")
  ) {
    return "Player";
  } else if (playerSelection == computerSelection) {
    return "Tie";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Player") {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  } else if (result == "Tie") {
    console.log("Its a tie");
  } else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  console.log("Welcome");

  for (let i = 0; i < 5; i++) {
    function getPlayerChoice() {
      let choice = prompt("Rock, paper, scissor").toLowerCase();
      return choice;
    }

    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);

    let score = checkWinner(playerSelection, computerSelection);

    if (score == "Player") {
      playerScore++;
    } else if (score == "Computer") {
      computerScore++;
    }
  }
  console.log(" Game Over");
  console.log(playerScore);
  console.log(computerScore);

  if (playerScore > computerScore) {
    console.log(`The player is the winner with a score of ${playerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`The computer is the winner with a score of ${computerScore}`);
  } else {
    console.log(`We have a tie`);
  }
}

game();
