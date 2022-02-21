/* eslint-disable import/prefer-default-export */
import { view } from './view.js';
import { model } from './model.js';

function parseGuess(guess) {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  if (guess === null || guess.length !== 2) {
    alert('Oops, please enter a letter and a number on the board.');
  } else {
    const firstChar = guess.charAt(0);
    const row = alphabet.indexOf(firstChar);
    const column = guess.charAt(1);

    if (isNaN(row) || isNaN(column)) {
      alert("Oops, that isn't on the board.");
    } else if (row < 0 || row >= model.boardSize
      || column < 0 || column >= model.boardSize) {
      alert("Oops, that's off the board!");
    } else {
      return row + column;
    }
  }
  return null;
}
export const controller = {
  guesses: 0,
  processGuess(guess) {
    const location = parseGuess(guess);
    if (location) {
      this.guesses++;
      const hit = this.fire(location);
      if (hit && model.shipsSunk === model.numShips) {
        view.displayMessage(`You sank all my battleships, in ${this.guesses} guesses`);
      }
    }
  },
  fire(guess) {
    for (let i = 0; i < model.numShips; i++) {
      const ship = model.ships[i];
      const index = ship.locations.indexOf(guess);
      if (index >= 0) {
        ship.hits[index] = 'hit';
        view.displayHit(guess);
        view.displayMessage('HIT!');
        if (model.isSunk(ship)) {
          view.displayMessage('You sank my battleship!');
          model.shipsSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage('You missed.');
    return false;
  },
};
