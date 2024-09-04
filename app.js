let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const randIdx = options[Math.floor(Math.random() * 3)];
  return randIdx;
};

const drawGame = () => {
  console.log("Game was Draw.");
  msg.innerText = "Game was Draw, Play again!";
  msg.style.backgroundColor = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you win!");
    msg.innerText = `You Win! ${userChoice} beats ${compChoice} `;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("you lose!");
    msg.innerText = `You Lose! ${compChoice} beats ${userChoice} `;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  //Generate computer choice
  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);

  if (userChoice === compChoice) {
    //Draw Condition
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "Rock") {
      // Paper, Scissors
      userWin = compChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      // Rock, Scissors
      userWin = compChoice === "Scissors" ? false : true;
    } else if (userChoice === "Scissors") {
      // Rock, Paper
      userWin = compChoice === "Rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
