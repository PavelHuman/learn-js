/* eslint-disable import/prefer-default-export */
export const view = {
  displayMessage(msg) {
    const messageArea = document.getElementById('messageArea');
    messageArea.innerHTML = msg;
  },
  displayHit(location) {
    const cell1 = document.getElementById(location);
    cell1.setAttribute('class', 'hit');
  },
  displayMiss(location) {
    const cell2 = document.getElementById(location);
    cell2.setAttribute('class', 'miss');
  },
};
