const player0 = document.querySelector("#player-0");
const total0 = document.querySelector("#total-0");
const current0 = document.querySelector("#current-0");
const player1 = document.querySelector("#player-1");
const total1 = document.querySelector("#total-1");
const current1 = document.querySelector("#current-1");
const diceImage = document.querySelector("#dice-img");
const againButton = document.querySelector("#again-btn");
const rollButton = document.querySelector("#roll-btn");
const holdButton = document.querySelector("#hold-btn");
//?<------------------------------------------------------>
let activePlayer;
let currentScore;
let totalScore;
let playingState;
//!<------------------------------------------------------>
function resetGame() {
  activePlayer = 0;
  player0.classList.add("bg-orange-600");
  player1.classList.remove("bg-orange-600");
  player0.classList.remove("winner");
  player1.classList.remove("winner");
  currentScore = 0;
  totalScore = [0, 0];
  playingState = true;
  total0.innerHTML = "0";
  current0.innerHTML = "0";
  total1.innerHTML = "0";
  current1.innerHTML = "0";
  diceImage.classList.add("invisible");
}
resetGame();
againButton.addEventListener("click", resetGame);
//?<------------------------------------------------------>
function switchPlayers() {
  currentScore = 0;
  if (activePlayer == 0) {
    activePlayer = 1;
    current0.innerHTML = "0";
    player0.classList.remove("bg-orange-600");
    player1.classList.add("bg-orange-600");
  } else {
    activePlayer = 0;
    current1.innerHTML = "0";
    player1.classList.remove("bg-orange-600");
    player0.classList.add("bg-orange-600");
  }
}
//!<------------------------------------------------------>
rollButton.addEventListener("click", function () {
  if (playingState === true) {
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    diceImage.classList.remove("invisible");
    diceImage.src = `./src/dice-${randomNumber}.png`;
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      if (activePlayer === 0) {
        current0.innerHTML = currentScore;
      } else {
        current1.innerHTML = currentScore;
      }
    } else {
      switchPlayers();
    }
  }
});
//?<------------------------------------------------------>
holdButton.addEventListener("click", function () {
  if (playingState) {
    totalScore[activePlayer] += currentScore;
    document.querySelector(`#total-${activePlayer}`).innerHTML =
      totalScore[activePlayer];
    if (totalScore[activePlayer] < 100) {
      switchPlayers();
    } else {
      playingState = false;
      current0.innerHTML = "0";
      current1.innerHTML = "0";
      document.querySelector(`#player-${activePlayer}`).classList.add("winner");
    }
  }
});

//!<------------------------------------------------------>
