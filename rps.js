let options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function checkWinner(playerSelection, computerSelection) {
  if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
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
    round = `Player Selection :${playerSelection} & Computer Selection : ${computerSelection}\n 
    You Win! ${playerSelection} beats ${computerSelection}`;
    document.getElementById("theDiv2").innerHTML = round;
  } else if (result == "Tie") {
    round = `Player Selection:${playerSelection} & Computer Selection : ${computerSelection}\n Its a tie`;
    document.getElementById("theDiv2").innerHTML = round;
  } else {
    round = `Computer Selection: ${computerSelection} & Player Selection :${playerSelection}\n 
      You Lose! ${computerSelection} beats ${playerSelection}`;
    document.getElementById("theDiv2").innerHTML = round;
  }
}

function welcome() {
  let container = document.getElementById("container");
  let content = document.createElement("p");
  content.setAttribute("id", "theDiv");
  content.textContent = "Welcome!";
  container.appendChild(content);
}

function roundResult() {
  let container2 = document.getElementById("each-round");
  let content2 = document.createElement("p");
  content2.setAttribute("id", "theDiv2");
  container2.appendChild(content2);
}
function diplayScore() {
  let container3 = document.getElementById("scoreDisplay");
  let content3 = document.createElement("p");
  content3.setAttribute("id", "theDiv3");
  container3.appendChild(content3);
}
function finalResult() {
  let container1 = document.getElementById("final-round");
  let content1 = document.createElement("p");
  content1.setAttribute("id", "theDiv1");
  container1.appendChild(content1);
}

let playerScore = 0;
let computerScore = 0;
let click = 0;

const buttons = document.querySelectorAll("#game");
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", (e) => {
    playerSelection = e.target.value;
    game();
  });
});

function game() {
  if (playerScore >= 5 || computerScore >= 5) {
    // this leaves the function if x is more than 5,
    return;
  }
  let round = "";
  let result = "";
  let final = "";

  click++;
  /*if (click < 2) {
    welcome();
  }*/

  roundResult();
  diplayScore();
  finalResult();

  const computerSelection = getComputerChoice();

  playRound(playerSelection, computerSelection);

  let score = checkWinner(playerSelection, computerSelection);

  if (score == "Player") {
    playerScore++;
  } else if (score == "Computer") {
    computerScore++;
  }

  result = `Player Score:${playerScore}\n Computer Score: ${computerScore}`;
  document.getElementById("theDiv3").innerHTML = result;

  if (playerScore === 5 && computerScore < 5) {
    final = `The player is the winner with a score of ${playerScore}, " Game Over"`;
    document.getElementById("theDiv1").innerHTML = final;
  } else if (computerScore === 5 && playerScore < 5) {
    final = `The computer is the winner with a score of ${computerScore}" Game Over"`;
    document.getElementById("theDiv1").innerHTML = final;
  }
}

const btn = document.querySelector("#reset");
btn.addEventListener("click", reset);

function reset() {
  removeComments();
  playerScore = 0;
  computerScore = 0;
  click = 0;
  round = "";
}

function removeComments() {
  /*let domElem = document.getElementById("theDiv");
  domElem.remove();*/
  let domElem1 = document.getElementById("theDiv1");
  domElem1.remove();
  let domElem2 = document.getElementById("theDiv2");
  domElem2.remove();
  let domElem3 = document.getElementById("theDiv3");
  domElem3.remove();
}
