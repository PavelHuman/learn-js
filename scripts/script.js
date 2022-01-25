export default () => {
  const number = 5;
  console.log(number);
};

let myText;
myText = 'hello, world!';
alert(myText);

const siteURL = 'https://www.google.com';
alert(siteURL);

const speed = 10;
const time = 5; alert(speed * time);
const speed1 = 85;
const time1 = 1.5;
alert(speed1 * time1);

function showDistance(speed, time) {
  alert(speed * time);
}

showDistance(10, 5);
showDistance(85, 1.5);
showDistance(12, 9);
showDistance(42, 21);

function sayHello() {
  alert('hello!');
}
sayHello();

function getDistance(speed, time) {
  const distance = speed * time;
  return distance;
}
const myDistance = getDistance(10, 5);

const color = 'green';
switch (color) {
  case 'yellow':
    alert('yellow color');
    break;
  case 'red':
    alert('red color');
    break;
  case 'blue':
    alert('blue color');
    break;
  case 'green':
    alert('green color');
    break;
  case 'black':
    alert('black color');
    break;
  default:
    alert('no known color specified');
    break;
}

const floors = 28;
for (let i = 1; i <= floors; i++) {
  if (i == 13) {
    // нет такого этажа (floor)
    continue;
  }
  document.writeln(`At floor: ${i}<br>`);
}

let i = 0;
let yay = true;
for (; yay;) {
  if (i == 10) {
    yay = false;
  } else {
    i++;
    document.writeln('weird');
  }
}

let count = 0;
do {
  document.writeln("I don't know what I am doing here! <br>");
  count++;
} while (count < 10);

// setTimeout, setInterval и requestAnimationFrame.

// alert(foo);
// var foo = 'hello!';

function calculateRectangleArea(length, width) {
  return length * width;
}

const roomArea = calculateRectangleArea(10, 10);
alert(roomArea);

function youSayGoodBye() {
  alert('Good Bye!');

  function andISayHello() {
    alert('hello!');
  }
  return andISayHello;
}
youSayGoodBye()();

function User(name) {
  // методом объекта становится вложенная функция
  this.sayHi = function () {
    alert(name);
  };
}

const user = new User('John');
user.sayHi();

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm('А родители разрешили?');
}

const age = prompt('Сколько вам лет?', 18);

if (checkAge(age)) {
  alert('Доступ получен');
} else {
  alert('Доступ закрыт');
}

function stopWatch() {
  const startTime = Date.now();

  function getDelay() {
    const elapsedTime = Date.now() - startTime;
    alert(elapsedTime);
  }
  return getDelay;
}
const timer = stopWatch();

for (let i = 0; i < 1000000; i++) {
  const foo = Math.random() * 10000;
}
timer();
