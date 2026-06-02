const choices = document.querySelectorAll(".choice");

const userScoreText =
document.getElementById("user-score");

const computerScoreText =
document.getElementById("computer-score");

const resultText =
document.getElementById("result-text");

const userChoiceText =
document.getElementById("user-choice");

const computerChoiceText =
document.getElementById("computer-choice");

const restartBtn =
document.getElementById("restart-btn");

let userScore = 0;
let computerScore = 0;

const computerChoices = [
  "rock",
  "paper",
  "scissors"
];

// Button click
choices.forEach(choice => {

  choice.addEventListener("click", () => {

    const userChoice =
    choice.dataset.choice;

    playGame(userChoice);

  });

});

// Main game
function playGame(userChoice){

  // Random computer choice
  const randomIndex =
  Math.floor(Math.random() * 3);

  const computerChoice =
  computerChoices[randomIndex];

  // Show choices
  userChoiceText.innerText =
  userChoice;

  computerChoiceText.innerText =
  computerChoice;

  // Draw
  if(userChoice === computerChoice){

    resultText.innerText =
    "🤝 It's a Draw!";

  }

  // User wins
  else if(

    (userChoice === "rock" &&
    computerChoice === "scissors")

    ||

    (userChoice === "paper" &&
    computerChoice === "rock")

    ||

    (userChoice === "scissors" &&
    computerChoice === "paper")

  ){

    userScore++;

    userScoreText.innerText =
    userScore;

    resultText.innerText =
    "🎉 You Win!";

  }

  // Computer wins
  else{

    computerScore++;

    computerScoreText.innerText =
    computerScore;

    resultText.innerText =
    "💻 Computer Wins!";

  }

}

// Restart game
restartBtn.addEventListener("click", ()=>{

  userScore = 0;
  computerScore = 0;

  userScoreText.innerText = 0;
  computerScoreText.innerText = 0;

  userChoiceText.innerText = "-";
  computerChoiceText.innerText = "-";

  resultText.innerText =
  "Choose your move!";

});