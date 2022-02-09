function chapter1() {
  console.log('chapter1');
  const price = 28.99;
  const discount = 10;
  const total = price - (price * (discount / 100));
  if (total > 25) {
    // freeShipping();
  }

  let count = 10;
  while (count > 0) {
    // juggle();
    count -= 1;
  }

  const dog = { name: 'Rover', weight: 35 };
  if (dog.weight > 30) {
    alert('WOOF WOOF');
  } else {
    alert('woof woof');
  }

  const circleRadius = 20;
  const circleArea = Math.PI * (circleRadius * circleRadius);
  console.log(circleArea);

  (9 / 5) * temp + 32; // 50

  color == 'orange'; // pink-false, orange-true.

  `${name}, ` + 'you\'ve won!'; // Martha you've won!

  yourLevel > 5(level * points) + bonus; // 153300

  color != 'orange'; // color = pink; - true

  `${1000}108`; // "1000108"

  let scoops = 5;
  while (scoops > 0) {
    document.write('Another scoop!');
    scoops -= 1;
  }
  document.write("Life without ice cream isn't the same");

  const scoops1 = 2;
  if (scoops1 >= 3) {
    alert('Eat faster, the ice cream is going to melt!');
  } else if (scoops1 < 3) {
    alert('Ice cream is running low!');
  }

  const scoops2 = 1;
  if (scoops2 >= 5) {
    alert('Eat faster, the ice cream is going to melt!');
  } else if (scoops2 == 3) {
    alert('Ice cream is running low!');
  } else if (scoops2 == 2) {
    alert('Going once!');
  } else if (scoops2 == 1) {
    alert('Going twice!');
  } else if (scoops2 == 0) {
    alert('Gone!');
  } else {
    alert('Still lots of ice cream left, come and get it.');
  }

  const name = 'Joe';
  let i = 0;
  while (i < 2) {
    document.write('Happy Birthday to you.');
    i += 1;
  }
  document.write('Happy Birthday dear " + name + ",');
  document.write('Happy Birthday to you.');

  const word = 'bottles';
  let count1 = 99;
  while (count1 > 0) {
    console.log(`${count1} ${word} of beer on the wall`);
    console.log(`${count1} ${word} of beer,`);
    console.log('Take one down, pass it around,');
    count1 -= 1;
    if (count1 > 0) {
      console.log(`${count1} ${word} of beer on the wall.`);
    } else {
      console.log(`No more ${word} of beer on the wall.`);
    }
  }
}
export default chapter1;
