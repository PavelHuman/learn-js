function chapter3() {
  console.log('chapter3');

  function bark(name, weight) {
    if (weight > 20) {
      console.log(`${name}says WOOF WOOF`);
    } else {
      console.log(`${name}says woof woof`);
    }
  }
  bark('rover', 23);
  bark('spot', 13);
  bark('spike', 53);
  bark('lady', 17);

  bark('juno', 20); // says woof woof
  bark('scottie', -1); // says woof woof
  bark('dino', 0, 0); // says woof woof
  bark('fido', '20'); // says woof woof
  bark('lady', 10); // says woof woof
  bark('bruno', 21); // says WOOF WOOF

  function whatShallIWear(temp) {
    if (temp < 60) {
      console.log('Wear a jacket');
    } else if (temp < 70) {
      console.log('Wear a sweater');
    } else {
      console.log('Wear t-shirt');
    }
  }
  whatShallIWear(50);
  whatShallIWear(80);
  whatShallIWear(60);

  function dogYears(dogName, age) {
    const years = age * 7;
    console.log(`${dogName} is ${years} years old`);
  }
  const myDog = 'Fido';
  dogYears(myDog, 4);
  function makeTea(cups, tea) {
    console.log(`Brewing ${cups} cups of ${tea}`);
  }
  const guests = 3;
  makeTea(guests, 'Earl Grey');
  function secret() {
    console.log('The secret of life is 42');
  }
  secret();
  function speak(kind) {
    const defaultSound = '';
    if (kind == 'dog') {
      alert('Woof');
    } else if (kind == 'cat') {
      alert('Meow');
    } else {
      alert(defaultSound);
    }
  }
  const pet = prompt('Enter a type of pet: ');
  speak(pet);

  // переменные: years, myDog, guests, defaultSound, pet.
  // функции: dogYears, makeTea, secret, speak.
  // встроенные функции: alert, console.log, prompt
  // аргументы: myDog, 4, guests, “Earl Grey”, pet, plus all the string arguments to alert and console.log
  // параметры: (dogName, age), (cups, tea), (kind).

  function bake(degrees) {
    let message;
    if (degrees > 500) {
      message = "I'm not a nuclear reactor!";
    } else if (degrees < 100) {
      message = "I'm not a refrigerator!";
    } else {
      message = "That's a very comfortable temperature for me.";
      // setMode('bake');
      // setTemp(degrees);
    }
    return message;
  }
  const status = bake(350);
  console.log(status);

  const x = 32;
  const y = 44;
  const radius = 5;
  let centerX = 0;
  let centerY = 0;
  const width = 600;
  const height = 400;
  function setup(width, height) {
    centerX = width / 2;
    centerY = height / 2;
  }
  function computeDistance(x1, y1, x2, y2) {
    const dx = x1 - x2;
    const dy = y1 - y2;
    const d2 = (dx * dx) + (dy * dy);
    const d = Math.sqrt(d2);
    return d;
  }
  function circleArea(r) {
    const area = Math.PI * r * r;
    return area;
  }
  setup(width, height);
  const area = circleArea(radius);
  const distance = computeDistance(x, y, centerX, centerY);
  alert(`Area: ${area}`);
  alert(`Distance: ${distance}`);

  // аргументы: Area: + area, Distance: + distance, radius, x, y, centerX, centerY, width, height
  // // параметры: width, height, x1, y1, x2, y2, (r).
  // // локальные переменные: dx, dy, d2, d, area,
  // // глобальные переменные: x, y, radius, centerX, centerY, width, height, area, distance.

  function clunk(times) {
    let num = times;
    while (num > 0) {
      display('clunk');
      num -= 1;
    }
  }
  function thingamajig(size) {
    let facky = 1;
    clunkCounter = 0;
    if (size == 0) {
      display('clank');
    } else if (size == 1) {
      display('thunk');
    } else {
      while (size > 1) {
        facky *= size;
        size -= 1;
      }
      clunk(facky);
    }
  }
  function display(output) {
    console.log(output);
    clunkCounter += 1;
  }
  let clunkCounter = 0;
  thingamajig(5);
  console.log(clunkCounter);

  const balance = 10500;
  let cameraOn = true;
  function steal(balance, amount) {
    cameraOn = false;
    if (amount < balance) {
      balance -= amount;
    }
    return amount;
    cameraOn = true;
  }
  const amount = steal(balance, 1250);
  alert(`Criminal: you stole ${amount}!`);
}
export default chapter3;
