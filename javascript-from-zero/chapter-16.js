function chapter16() {
  console.log('chapter-16');
  const stooges = 3;
  const pi = 3.14159;
  const color = 0xff;
  const massOfEarth = 5.9742e+24;
  const temperature = -42;
  console.log(stooges, pi, color, massOfEarth, temperature);

  const total = 4 + 26;
  const average = total / 2;
  const doublePi = 2 * 3.14159;
  const subtrackItem = 50 - 25;
  const remainder = total % 7;
  const more = (1 + average * 10) / 5;
  console.log(total, average, doublePi, subtrackItem, remainder, more);

  let i = 4;
  i += 1;

  let c = 100;
  c -= 2;

  let y = 100;
  y /= 2;

  i++;
  i -= 2;
  i /= 2;

  const w = 4;
  const j = i++;
  console.log(w);
  console.log(j);

  const b = ++i;
  console.log(i);
  console.log(b);

  // let leet = 0o2471; //восьмеричные
  // let leet1 = 0x539; //шеснадцатеричные

  // let hexValue = parseInt('FFFFFF', 16);
  // let octalValue = parseInt('011', 8);

  // let myLoveForYou = Infinity * 2;
  // let nop = 1920 / "blah";

  const numberOne = '45';
  const numberTne = 3;
  console.log(numberOne + numberTne);

  const numberOne1 = parseInt('45');
  const numberTne1 = 3;
  console.log(numberOne1 + numberTne1);

  function getCircumference(radius) {
    return 2 * Math.PI * radius;
  }
  console.log(getCircumference(2));

  Math.floor(0.5);// 0
  Math.ceil(0.5);// 1
  Math.round(0.5);// 1

  Math.floor(3.14);// 3
  Math.ceil(3.14);// 3
  Math.round(3.14);// 4

  Math.floor(5.9); // 5
  Math.round(5.9); // 6
  Math.ceil(5.9); // 6

  Math.cos(0); // 1
  Math.sin(0); // 0
  Math.tan(Math.PI / 4); // 1
  Math.cos(Math.PI); // 1
  Math.cos(4 * Math.PI); // 1

  2 ** 4; // эквивалент 2^4 (или 2 * 2 * 2 * 2)
  Math.exp(3); // эквивалент Math.E^3
  Math.sqrt(16); // 4

  Math.abs(37); // 37
  Math.abs(-6); // 6

  const randomNumber = Math.random() * 100;
  console.log(randomNumber);

  const foo = Math.floor(Math.random() * 11);
  console.log(foo);

  function getRandomNumber(low, high) {
    const r = Math.floor(Math.random() * (high - low + 1)) + low;
    return r;
  }
  const randomNumber2 = getRandomNumber(0, 10);
  console.log(randomNumber2);
}
export default chapter16;
