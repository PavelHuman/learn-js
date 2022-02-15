function chapter7() {
  console.log('chapter7');

  let x;
  if (x == undefined) {
    // Переменная x не инициализирована! Принять меры!
  }

  const customer = {
    name: 'jenny',
  };
  if (customer.phoneNumber == undefined) {
    // Получить телефон клиента
  }

  const test1 = 'abcdef';
  const result = typeof test1;
  console.log(typeof test1);
  const test2 = 123;
  const result2 = typeof test2;
  console.log(typeof test2);
  const test3 = true;
  const result3 = typeof test3;
  console.log(typeof test3);
  const test4 = {};
  const result4 = typeof test4;
  console.log(typeof test4);
  const test5 = [];
  const result5 = typeof test5;
  console.log(typeof test5);
  const test6 = 1;
  const result6 = typeof test6;
  console.log(typeof test6);
  const test7 = { abcdef: 123 };
  const result7 = typeof test7;
  console.log(typeof test7);
  const test8 = ['abcdef', 123];
  const result8 = typeof test8;
  console.log(typeof test8);
  function test9() { return 'abcdef'; }
  const result9 = typeof test9;
  console.log(typeof test9);
  const test10 = null;
  const result10 = typeof test10;
  console.log(typeof test10);

  const header = document.getElementById('header');
  if (header == null) {
    // Заголовка нет — какая-то серьезная проблема!
  }

  const weather = document.getElementById('weatherDiv');
  if (weather != null) {
    // Создание содержимого для погодного виджета
  }
  const testMe = 99;
  if (testMe == '99') {
    console.log('A number equals a string!');
  } else {
    console.log('No way a number equals a string');
  }

  const test11 = 0 / 0;
  console.log(typeof test11);

  const addi = `4${3}`; // "43"
  const plusi = `${3}4`; // "34"
  const multi = 3 * '4'; // 12
  const divi = 80 / '10'; // 8
  const mini = '10' - 5; // 5
  const order = `${1 + 2} pizzas`; // "3 pizzas"
  const num = 3 + Number('4'); // 7

  function findCarInLot(car) {
    for (let i = 0; i < lot.length; i++) {
      if (car === lot[i]) {
        return i;
      }
    }
    return -1;
  }
  const chevy = {
    make: 'Chevy',
    model: 'Bel Air',
  };
  const taxi = {
    make: 'Webville Motors',
    model: 'Taxi',
  };
  const fiat1 = {
    make: 'Fiat',
    model: '500',
  };
  const fiat2 = {
    make: 'Fiat',
    model: '500',
  };
  var lot = [chevy, taxi, fiat1, fiat2];
  const loc1 = findCarInLot(fiat2); // 3
  const loc2 = findCarInLot(taxi); // 1
  const loc3 = findCarInLot(chevy); // 0
  const loc4 = findCarInLot(fiat1); // 2

  function lieDetectorTest() {
    let lies = 0;

    const stolenDiamond = {};
    if (stolenDiamond) {
      console.log('You stole the diamond'); // правда
      lies++;
    }
    const car = {
      keysInPocket: null,
    };
    if (car.keysInPocket) {
      console.log('Uh oh, guess you stole the car!'); // лож
      lies++;
    }
    if (car.emptyGasTank) {
      console.log('You drove the car after you stole it!'); // лож
      lies++;
    }
    const foundYouAtTheCrimeScene = [];
    if (foundYouAtTheCrimeScene) {
      console.log('A sure sign of guilt'); // правда
      lies++;
    }
    if (foundYouAtTheCrimeScene[0]) {
      console.log('Caught with a stolen item!'); // лож
      lies++;
    }
    const yourName = ' ';
    if (yourName) {
      console.log('Guess you lied about your name'); // правда
      lies++;
    }
    return lies;
  }
  const numberOfLies = lieDetectorTest();
  console.log(`You told ${numberOfLies} lies!`);
  if (numberOfLies >= 3) {
    console.log('Guilty as charged');
  }
  const text = 'YOU SHOULD NEVER SHOUT WHEN TYPING';
  const presentableText = text.toLowerCase();
  if (presentableText.length > 0) {
    console.log(presentableText);
  }
  let emot = 'XOxxOO';
  let hugs = 0;
  let kisses = 0;

  emot = emot.trim();
  emot = emot.toUpperCase();
  for (let i = 0; i < emot.length; i++) {
    if (emot.charAt(i) === 'X') {
      hugs++;
    } else if (emot.charAt(i) == 'O') {
      kisses++;
    }
    console.log(emot);
  }
  const input = 'jenny@wickedlysmart.com';
  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) === '@') {
      console.log(`There's an @ sign at index ${i}`);
    }
  }
  const index = phrase.indexOf('cat');
  console.log(`there's a cat sitting at index ${index}`);
}
export default chapter7;
