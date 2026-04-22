"use strict";
const INITIAL_SCORE = 20;
const GAME_MESSAGES = {
  NO_NUMBER: "⛔ No Number",
  NOT_POSITIVE: "🙌 Enter a Positive Number",
  WINNER: "🎉 Correct Number!",
  TOO_HIGH: "📈 Too High!",
  TOO_LOW: "📉 Too Low!",
  LOST: "💥 You lost the game!",
  START: "Start guessing...",
};
const elements = {
  body: document.body,
  header: document.querySelector("header"),
  message: document.querySelector(".message"),
  number: document.querySelector(".number"),
  score: document.querySelector(".score"),
  highscore: document.querySelector(".highscore"),
  guess: document.querySelector(".guess"),
  btnCheck: document.querySelector(".btn-check"),
  btnAgain: document.querySelector(".btn-again"),
};
let score = INITIAL_SCORE;
let highscore = 0;
let secretNumber = Math.floor(Math.random() * 20) + 1;
let isPlaying = true;
const updateUiStyle = (element, property, value) => {
  element.style[property] = value;
};
const displayMessage = message => {
  elements.message.textContent = message;
};
const disableGame = () => {
  isPlaying = false;
  elements.btnCheck.disabled = true;
  document.removeEventListener("keydown", handleEnter);
};
const checkGuessStatus = (guess, secret) => {
  if (guess === null) return GAME_MESSAGES.NO_NUMBER;
  if (guess < 0) return GAME_MESSAGES.NOT_POSITIVE;
  if (guess === secret) return GAME_MESSAGES.WINNER;
  return guess > secret ? GAME_MESSAGES.TOO_HIGH : GAME_MESSAGES.TOO_LOW;
};
const handleCheck = function () {
  if (!isPlaying) return;
  const guessValue = elements.guess.value;
  const guess = guessValue === "" ? null : Number(guessValue);
  const status = checkGuessStatus(guess, secretNumber);
  displayMessage(status);
  if (status === GAME_MESSAGES.WINNER) {
    updateUiStyle(
      elements.body,
      "background",
      "linear-gradient(to top, #064e3b, #022c22)",
    );
    updateUiStyle(elements.header, "background", "transparent");
    updateUiStyle(elements.number, "width", "12rem");
    elements.number.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      elements.highscore.textContent = highscore;
    }
    disableGame();
  } else if (
    status === GAME_MESSAGES.TOO_HIGH ||
    status === GAME_MESSAGES.TOO_LOW
  ) {
    if (score > 1) {
      score--;
      elements.score.textContent = score;
    } else {
      displayMessage(GAME_MESSAGES.LOST);
      elements.score.textContent = 0;
      disableGame();
    }
  }
};
const handleAgain = function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = INITIAL_SCORE;
  isPlaying = true;
  displayMessage(GAME_MESSAGES.START);
  elements.score.textContent = score;
  elements.number.textContent = "?";
  elements.guess.value = "";
  updateUiStyle(elements.number, "width", "8rem");
  updateUiStyle(elements.body, "background", "");
  updateUiStyle(elements.header, "background", "");
  elements.btnCheck.disabled = false;
  document.addEventListener("keydown", handleEnter);
};
const handleEnter = e => {
  if (e.key === "Enter") handleCheck();
};
elements.btnCheck.addEventListener("click", handleCheck);
elements.btnAgain.addEventListener("click", handleAgain);
document.addEventListener("keydown", handleEnter);
