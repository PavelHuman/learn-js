import initDomApiPractice from './script.js';

initDomApiPractice();

// массив
const names = ['Jerry', 'Elaine', 'George', 'Kramer'];
const alsoNames = new Array('Dennis', 'Frank', 'Dee', 'Mac');

// округленное число
const roundNumber = Math.round('3.14');

// текущая дата
const today = new DataTransfer();

// объект boolean
const booleanObject = new Boolean(true);

// бесконечность
const unquantifiablyBigNumber = Number.POSITIVE_INFINITY;

// объект string
const hello = new String('Hello!');

const movie = 'Pulp Fiction';
const movieObj = new String('Pulp Fiction');

console.log(movie);
console.log(movieObj);

const groceries = ['Milk', 'Eggs', 'Frosted Flakes', 'Salami', 'Juice'];
groceries.push("Cookies");
groceries.unshift("Bananas");
 lastItem = groceries.pop();
 firstItem = groceries.shift();
for (let i = 0; i < groceries.length; i++) {
  const item = groceries[i];
  console.log(item);
}

let groceries = ["Milk", "Eggs", "Frosted Flakes", "Salami", "Juice"];
let resultIndex = groceries. indexOf("Salami", 0);

console.log(resultIndex);

let good = ["Mario", "Luigi", "Kirby", "Yoshi"];
let bad = ["Bowser", "Koopa Troopa", "Goomba"];

let goodAndBad = good.concat(bad);
console.log(goodAndBad);

let names = ["marge", "homer", "bart", "lisa", "maggie"];

function capitalizeItUp(item) {
  let firstLetter = item.charAt(0).toUpperCase();
  return firstLetter + item.slice(1);
}
let newNames = names.map(capitalizeItUp);
console.log(newNames);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let evenNumbers = numbers.filter(function (item) {
  return (item % 2 == 0);
});
console.log(evenNumbers);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let total = numbers.reduce(function(total, current) {
  return total + current;
}, 0);
console.log(total);

let words = ["Where", "do", "you", "want", "to", "go", "today?"];

let phrase = words.reduce(function (total, current, index) {
  if (index == 0) {
    return current;
  } else {
    return total + " " + current;
  }
}, "");
console.log(phrase);
