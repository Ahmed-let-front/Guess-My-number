import "./css/style.css";
import * as siteNumber from "./script.js";
document
  .querySelector(".btn-check")
  .addEventListener("click", siteNumber.checkGuess);
document.querySelector(".btn-again").addEventListener("click", siteNumber.buttonAgain)