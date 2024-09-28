let choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const random = choice[Math.floor(Math.random() * choice.length)];
  return random;
}

function getHumanChoice() {
  let validChoices = ["rock", "paper", "scissors"];
  let humanChoice;
  while (!validChoices.includes(humanChoice)) {
    humanChoice = prompt("Choose rock, paper or scissors").toLowerCase();
    if (!validChoices.includes(humanChoice)) {
      alert("Choose a valid choice");
    }
  }
  return humanChoice;
}

function announceWinner(winner, humanChoice, computerChoice) {
  if (winner == "human") {
    console.log(
      `Human chose ${humanChoice}, Computer chose ${computerChoice}, Human wins`
    );
  } else if (winner == "computer") {
    console.log(
      `Human chose ${humanChoice}, Computer chose ${computerChoice}, Computer wins`
    );
  } else if (winner == "tie") {
    console.log(
      `Human chose ${humanChoice}, Computer chose ${computerChoice}, That's a tie`
    );
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  if (humanChoice == computerChoice) {
    announceWinner("tie", humanChoice, computerChoice);
    computerScore++;
    humanScore++;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    announceWinner("computer", humanChoice, computerChoice);
    computerScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    announceWinner("human", humanChoice, computerChoice);
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    announceWinner("human", humanChoice, computerChoice);
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    announceWinner("computer", humanChoice, computerChoice);
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    announceWinner("human", humanChoice, computerChoice);
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    announceWinner("computer", humanChoice, computerChoice);
    computerScore++;
  }
}

function roundCount() {
  for (let round = 1; round <= 5; round++) {
    console.log("****************");
    console.log(`Round ${round}/5\n`);
    playRound();
  }
  if (humanScore == computerScore) {
    console.log("That's a tie");
    console.log(`Human : ${humanScore}`);
    console.log(`Computer : ${computerScore}`);
  } else if (humanScore > computerScore) {
    console.log("Congratulations, Human won!");
    console.log(`Human : ${humanScore}`);
    console.log(`Computer : ${computerScore}`);
  } else {
    console.log("Bad luck, Computer won!");
    console.log(`Human : ${humanScore}`);
    console.log(`Computer : ${computerScore}`);
  }
}

roundCount();
