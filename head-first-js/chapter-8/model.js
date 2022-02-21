/* eslint-disable import/prefer-default-export */

export const model = {
  boardSize: 7,
  numShips: 3,
  shipsSunk: 0,
  shipLength: 3,
  ships: [
    { locations: [0, 0, 0], hits: ['', '', ''] },
    { locations: [0, 0, 0], hits: ['', '', ''] },
    { locations: [0, 0, 0], hits: ['', '', ''] },
  ],

  isSunk(ship) {
    for (let i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== 'hit') {
        return false;
      }
    }
    return true;
  },
  generateShipLocations() {
    let locations;
    for (let i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip();
      } while (this.collision(locations));
      this.ships[i].locations = locations;
    }
  },
  generateShip() {
    const direction = Math.floor(Math.random() * 2);
    let row; let
      col;
    if (direction === 1) {
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
    } else {
      row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
      col = Math.floor(Math.random() * this.boardSize);
    }
    const newShipLocations = [];
    for (let i = 0; i < this.shipLength; i++) {
      if (direction === 1) {
        newShipLocations.push(`${row}${col + i}`);
      } else {
        newShipLocations.push(`${row + i}${col}`);
      }
    }
    return newShipLocations;
  },
  collision(locations) {
    for (let i = 0; i < this.numShips; i++) {
      const ship = model.ships[i];
      for (let j = 0; j < locations.length; j++) {
        if (ship.locations.indexOf(locations[j]) >= 0) {
          return true;
        }
      }
    }
    return false;
  },
};
