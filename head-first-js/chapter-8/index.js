import { controller } from "./controller.js"
import { model } from './model.js'
function chapter8() {
  console.log('chapter8');

  function init() {
    function handleKeyPress(e) {
      const fireButton = document.getElementById('fireButton');
      if (e.keyCode === 13) {
        fireButton.click();
        return false;
      }
    }
    function handleFireButton() {
      const guessInput = document.getElementById('guessInput');
      const guess = guessInput.value;
      controller.processGuess(guess);
      guessInput.value = '';
    }
    model.generateShipLocations();
    const fireButton = document.getElementById('fireButton');
    fireButton.onclick = handleFireButton;
    const guessInput = document.getElementById('guessInput');
    guessInput.onkeydown = handleKeyPress;
  }
  init();
}
chapter8();
