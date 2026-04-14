import "./css/style.css";
import * as gameLogic from "./script.js";
document
  .querySelector(".btn-check")
  .addEventListener("click", gameLogic.checkGuess);
document.querySelector(".btn-again").addEventListener("click", gameLogic.buttonAgain);
document.addEventListener("keydown", gameLogic.handleEnter);
