export default () => {
  const number = 5;
  console.log(number);
};

 let myText;
 myText = 'hello, world!';
 alert(myText);

 const siteURL = "https://www.google.com";
 alert(siteURL);

 let speed = 10;
 let time = 5; alert(speed * time);
 let speed1 = 85;
 let time1 = 1.5;
 alert(speed1 * time1);

 function showDistance(speed,time) {
 alert(speed * time);
 }

 showDistance(10, 5);
 showDistance(85, 1.5);
 showDistance(12, 9);
 showDistance(42, 21);

 function sayHello() {
 alert("hello!");
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

//alert(foo);
//var foo = 'hello!';

function showDistance(speed, time) {
  alert(speed * time);
}

showDistance(10, 5);
showDistance(85, 1.5);
showDistance(12, 9);
showDistance(42, 21);

function calculateRectangleArea(lenght, width) {
  return length * width;
}

let roomArea = calculateRectngleArea(10, 10);
alert(roomArea);
