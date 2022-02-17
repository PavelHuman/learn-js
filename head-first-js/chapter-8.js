function chapter8() {
  console.log('chapter8');
  const view = {
    displayMessage(msg) {
      const messageArea = document.getElementById('messageArea');
      messageArea.innerHTML = msg;
    },
    displayHit(location) {
      const cell1 = document.getElementById(location);
      cell1.cellsetAttribute('class', 'hit');
    },
    displayMiss(location) {
      const cell2 = document.getElementById(location);
      cell2.cellsetAttribute('class', 'miss');
    },
  };
  // view.displayMiss('00');
  // view.displayHit('34');
  // view.displayMiss('55');
  // view.displayHit('12');
  // view.displayMiss('25');
  // view.displayHit('26');
  // view.displayMessage('Tap tap, is this thing on?');

  // const ships = [{ locations: ['31', '41', '51'], hits: ['', '', ''] },
  // { locations: ['14', '24', '34'], hits: ['', 'hit', ''] },
  // { locations: ['00', '01', '02'], hits: ['hit', '', ''] }];

  // const ship2 = ships[1];
  // const { locations } = ship2;
  // console.log(`Location is ${locations[1]}`);

  // const ship3 = ships[2];
  // const hits = ship3.hits;
  // if (hits[0] === 'hit') {
  //   console.log('Ouch, hit on third ship at location one');
  // }
  // let ship1 = ships[0];
  // let hits = ship1.hits;
  // hits[2] = "hit";

  const model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    ships: [{ locations: ['06', '16', '26'], hits: ['', '', ''] },
      { locations: ['24', '34', '44'], hits: ['', '', ''] },
      { locations: ['10', '11', '12'], hits: ['', '', ''] }],

    fire(guess) {
      for (let i = 0; i < this.numShips; i++) {
        const ship = this.ships[i];
        const index = ship.locations.indexOf(guess);
        if (index >= 0) {
          ship.hits[index] = 'hit';
          view.displayHit(guess);
          view.displayMessage('HIT!');
          if (this.isSunk(ship)) {
            view.displayMessage('You sank my battleship!');
            this.shipsSunk++;
          }
          return true;
        }
      }
      view.displayMiss(guess);
      view.displayMessage('You missed.');
      return false;
    },
    isSunk(ship) {
      for (let i = 0; i < this.shipLength; i++) {
        if (ship.hits[i] !== 'hit') {
          return false;
        }
      }
      return true;
    },
  };
  model.fire('53');
  model.fire('06');
  model.fire('16');
  model.fire('26');
  model.fire('34');
  model.fire('24');
  model.fire('44');
  model.fire('12');
  model.fire('11');
  model.fire('10');
}
export default chapter8;
