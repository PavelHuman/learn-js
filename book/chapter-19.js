function chapter19() {
  console.log('chapter-19');

  function shuffle(input) {
    for (let i = input.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const itemAtIndex = input[randomIndex];

      input[randomIndex] = input[i];
      input[i] = itemAtIndex;
    }
    return input;
  }
  const shuffleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  shuffle(shuffleArray);

  console.log(shuffleArray);

  Array.prototype.shuffle = function () {
    const input = this;
    for (let i = input.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const itemAtIndex = input[randomIndex];
      input[randomIndex] = input[i];
      input[i] = itemAtIndex;
    }
    return input;
  };
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numbers.shuffle();
  console.log(shuffle);
}
export default chapter19;
