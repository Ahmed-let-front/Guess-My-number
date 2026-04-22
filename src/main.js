import "./css/style.css";
import * as gameLogic from "./script.js";
document
  .querySelector(".btn-check")
  .addEventListener("click", gameLogic.handleCheck);
document.querySelector(".btn-again").addEventListener("click", gameLogic.handleAgain);
document.addEventListener("keydown", gameLogic.handleEnter);
