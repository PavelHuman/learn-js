function chapter1() {
  console.log('chapter1');
  const randomLoc = Math.floor(Math.random() * 5);
  const location1 = randomLoc;
  const location2 = location1 + 1; // хранение каждой клетки корабля
  const location3 = location2 + 1;

  let guess; // номер текущая попытка
  let hits = 0; // количество попаданий
  let guesses = 0; // количество попыток

  let isSunk = false; // для хранения инфы о том потоплен корабль или нет

  while (isSunk == false) {
    guess = prompt('Ready, aim, fire! (enter a number 0-6):');
    if (guess < 0 || guess > 6) {
      alert('Please enter a valid cell number!');
    } else {
      guesses += 1;

      if (guess == location1 || guess == location2 || guess == location3) {
        alert('HIT!');
        hits += 1;
        if (hits == 3) {
          isSunk = true;
          alert('You sank my battleship!');
        }
      } else {
        alert('MISS');
      }
    }
  }
  const stats = `You took ${guesses} guesses to sink the battleship, `
    + `which means your shooting accuracy was ${3 / guesses}`;
  alert(stats);

  if (inStock == true && (onSale == true || price < 60)) {
    alert('buy buy buy!');
  }

  const temp = 81;
  const willRain = true;
  const humid = (temp > 80 && willRain == true); // true

  const guess1 = 6;
  const isValid = (guess1 >= 0 && guess1 <= 6); // true

  const kB = 1287;
  const tooBig = (kB > 1000);
  const urgent = true;
  const sendFile = (urgent == true || tooBig == false); // true

  const keyPressed = 'N';
  const points = 142;
  let level;
  if (keyPressed == 'Y'
    || (points > 100 && points < 200)) {
    level = 2;
  } else {
    level = 1;
    // ответ 2
  }
}
export default chapter1;
