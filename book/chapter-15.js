function chapter15() {
  console.log('chapter-15');
  const greeting = 'Hi, everybody!!!';
  const shout = greeting.toUpperCase();

  const primitiveText = 'Homer Simpson';
  const name = new String('Batman');

  const game = 'Dragon Age: Origins';
  console.log(game.length);

  let gameObject = new String("Dragon Age:Origins");

  const game1 = 'Dragon Age: Origins';
  console.log(`Length is: ${game.length}`);

  const gameObject = new String('Dragon Age:Origins');

  console.log(typeof game);
  console.log(typeof game.length);
  console.log(typeof gameObject);
}

export default chapter15;
