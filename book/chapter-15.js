function chapter15() {
  console.log('chapter-15');
  const greeting = 'Hi, everybody!!!';
  const shout = greeting.toUpperCase();
  console.log(shout);
  // const primitiveText = 'Homer Simpson';
  // const name = new String('Batman');

  const game = 'Dragon Age: Origins';
  console.log(game.length);

  const game1 = 'Dragon Age: Origins';
  console.log(`Length is: ${game1.length}`);

  const gamesObject = new String('Dragon Age:Origins');

  console.log(typeof game);
  console.log(typeof game.length);
  console.log(typeof gamesObject);
}

export default chapter15;
