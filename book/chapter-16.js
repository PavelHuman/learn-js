function chapter16() {
  console.log('chapter-16');
  const stooges = 3;
  const pi = 3.14159;
  const color = 0xff;
  const massOfEarth = 5.9742e+24;
  const temperature = -42;

  const total = 4 + 26;
  const average = total / 2;
  const doublePi = 2 * 3.14159;
  const subtrackItem = 50 - 25;
  const remainder = total % 7;
  const more = (1 + average * 10) / 5;

  let i = 4;
  i += 1;

  let i = 100;
  i -= 2;

  let i = 100;
  i /= 2;

  i++;
  i -= 2;
  i /= 2;

  let i = 4;
  const j = i++;
  console.log(i);
  console.log(j);

  let i = 4;
  const j = ++i;
  console.log(i);
  console.log(j);

  let leet = 0o2471; //восьмеричные
  let leet = 0x539; //шеснадцатеричные

  let hexValue = parseInt('FFFFFF', 16);
  let octalValue = parseInt('011', 8);

  let myLoveForYou = Infinity * 2;
  let nop = 1920 / "blah";

  let numberOne = "45";
  let numberTne = 3;
  console.log(numberOne + numberTne);

  let numberOne = parseInt("45");
  let numberTne = 3;
  console.log(numberOne + numberTne);

  function getCircumference(radius) {
    return 2 * Math.PI * radius;
  }
  console.log(getCircumference(2));

  Math.floor(.5);// 0
  Math.ceil(.5);// 1
  Math.round(.5);// 1

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

  Math.pow(2, 4); //эквивалент 2^4 (или 2 * 2 * 2 * 2)
  Math.exp(3); //эквивалент Math.E^3
  Math.sqrt(16); //4

  Math.abs(37); //37
  Math.abs(-6); //6

  let randomNumber = Math.random() * 100;
  console.log(randomNumber);

  let foo = Math.floor(Math.random() * 11);
console.log(foo);

function getRandomNumber(low, high) {
  let r = Math.floor(Math.random() * (high - low + 1)) + low;
  return r;
}
let foo = getRandomNumber(0, 10);
console.log(foo)
export default chapter16;
