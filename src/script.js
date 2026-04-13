"use strict";
const bodyEl = document.body;
const headerEl = document.querySelector("header");
const mainEl = document.querySelector("main");
const messageEl = document.querySelector(".message");
const numberEl = document.querySelector(".number");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");
const guessEl = document.querySelector(".guess");
const btnCheckEl = document.querySelector(".btn-check");
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
export const displayMessage = function (message) {
  messageEl.textContent = message;
};
export const handleEnter = function (e) {
  if (e.key === "Enter") checkGuess();
};
document.addEventListener("keydown", handleEnter);
export const checkGuess = function () {
  const guess = Number(guessEl.value);
  if (!guess) {
    displayMessage("⛔ No Number");
  } else if (guess < 0) {
    displayMessage("🙌 Enter a Positive Number");
  } else if (guess === secretNumber) {
    displayMessage("🎯 Correct");
    bodyEl.style.background = "linear-gradient(to top, #064e3b, #022c22)";
    headerEl.style.background = "transparent";
    mainEl.style.background = "transparent";
    numberEl.textContent = secretNumber;
    numberEl.style.width = "20rem";
    document.removeEventListener("keydown", handleEnter);
    btnCheckEl.disabled = true;
    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high" : "📉 Too low");
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      scoreEl.textContent = 0;
      btnCheckEl.disabled = true;
      document.removeEventListener("keydown", handleEnter);
    }
  }
};

export const buttonAgain = function refresh() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  displayMessage("Start guessing...");
  scoreEl.textContent = score;
  numberEl.textContent = "?";
  numberEl.style.width = "8rem";
  guessEl.value = "";
  bodyEl.style.background = "#020617";
  headerEl.style.background = "#1e293b80";
  mainEl.style.background = "transparent";
  btnCheckEl.disabled = false;
};
