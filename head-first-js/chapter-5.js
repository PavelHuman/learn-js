function chapter5() {
  console.log('chapter5');

  const chevy1 = {
    make: 'Chevy',
    model: 'Bel Air',
    year: 1957,
    color: 'red',
    passengers: 2,
    convertible: false,
    mileage: 1021,
    started: false,
    start() {
      this.started = true;
    },
    stop() {
      this.started = false;
    },
    drive() {
      if (this.started) {
        alert(`${this.make} ${this.model} goes zoom zoom!`);
      } else {
        alert('You need to start the engine first.');
      }
    },
  };
  chevy1.start();
  chevy1.drive();
  chevy1.stop();

  const cadi = {
    make: 'Cadi',
    model: 'GM',
    year: 1955,
    color: 'tan',
    passengers: 5,
    convertible: false,
    mileage: 12892,
    body: 'sedan',
    started: false,
    start() {
      this.started = true;
    },
    stop() {
      this.started = false;
    },
    drive() {
      if (this.started) {
        alert(`${this.make} ${this.model} goes zoom zoom!`);
      } else {
        alert('You need to start the engine first.');
      }
    },
  };
  cadi.start();
  cadi.drive();
  cadi.stop();

  const dog = {
    name: 'Fido',
    weight: 20.2,
    age: 4,
    breed: 'mixed',
    activity: 'fetch balls',
  };
  let bark;
  if (dog.age > 20) {
    bark = 'WOOF WOOF';
  } else {
    bark = 'woof woof';
  }
  const speak = `${dog.name} says ${bark} when he wants to ${dog.activity}`;
  console.log(speak);

  const taxi = {
    make: 'Webville Motors',
    model: 'Taxi',
    year: 1955,
    color: 'yellow',
    passengers: 4,
    convertible: false,
    mileage: 281341,
    started: false,
    start() {
      this.started = true;
    },
    stop() {
      this.started = false;
    },
    drive() {
      if (this.started) {
        alert(`${this.make} ${this.model} goes zoom zoom!`);
      } else {
        alert('You need to start the engine first.');
      }
    },
  };
  taxi.start();
  taxi.drive();
  taxi.stop();

  const chevy = {
    make: 'Chevy',
    model: 'Bel Air',
    year: 1957,
    color: 'red',
    passengers: 2,
    convertible: false,
    mileage: 1021,
  };
  function prequal(chevy) {
    if (chevy.mileage > 10000) {
      return false;
    } if (chevy.year > 1960) {
      return false;
    }
    return true;
  }
  const worthALook = prequal(chevy);

  if (worthALook) {
    console.log(`You gotta check out this ${chevy.make} ${chevy.model}`);
  } else {
    console.log(`You should really pass on the ${chevy.make} ${chevy.model}`);
  }

  function getSecret(file, secretPassword) {
    file.opened += 1;
    if (secretPassword == file.password) {
      return file.contents;
    }
    return 'Invalid password! No secret for you.';
  }
  function setSecret(file, secretPassword, secret) {
    if (secretPassword == file.password) {
      file.openet = 0;
      file.contents = secret;
    }
  }
  const superSecretFile = {
    level: 'classified',
    opened: 0,
    password: 2,
    contents: "Dr. Evel's next meeting is in Detroit.",
  };
  let secret = getSecret(superSecretFile, 2);
  console.log(secret);

  setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");
  secret = getSecret(superSecretFile, 2);
  console.log(secret);

  function makeCar() {
    const makes = ['Chevy', 'GM', 'Fiat', 'Webville Motors', 'Tucker'];
    const models = ['Cadillac', '500', 'Bel-Air', 'Taxi', 'Torpedo'];
    const years = [1955, 1957, 1948, 1954, 1961];
    const colors = ['red', 'blue', 'tan', 'yellow', 'white'];
    const convertible = [true, false];

    const rand1 = Math.floor(Math.random() * makes.length);
    const rand2 = Math.floor(Math.random() * models.length);
    const rand3 = Math.floor(Math.random() * years.length);
    const rand4 = Math.floor(Math.random() * colors.length);
    const rand5 = Math.floor(Math.random() * 5) + 1;
    const rand6 = Math.floor(Math.random() * 2);

    const car = {
      make: makes[rand1],
      model: models[rand2],
      year: years[rand3],
      color: colors[rand4],
      passengers: rand5,
      convertible: convertible[rand6],
      mileage: 0,
    };
    return car;
  }
  function displayCar(car) {
    console.log(`Your new car is a ${car.year} ${car.make} ${car.model}`);
  }
  const carToSell = makeCar();
  displayCar(carToSell);

  const fiat = {
    make: 'Fiat',
    model: '500',
    year: 1957,
    color: 'Medium Blue',
    passengers: 2,
    convertible: false,
    mileage: 88000,
    fuel: 0,
    started: false,

    start() {
      if (this.fuel == 0) {
        alert('The car is on empty, fill up before starting!');
      } else {
        this.started = true;
      }
    },
    stop() {
      this.started = false;
    },
    drive() {
      if (this.started) {
        if (this.fuel > 0) {
          alert(`${this.make} ${this.model} goes zoom zoom!`);
          this.fuel -= 1;
        } else {
          alert('Uh oh, out of fuel.');
          this.stop();
        }
      } else {
        alert('You need to start the engine first.');
      }
    },
    addFuel(amount) {
      this.fuel += amount;
    },
  };
  fiat.start();
  fiat.addFuel(3);
  fiat.start();
  fiat.drive();
  fiat.drive();
  fiat.drive();
  fiat.stop();

  const eightBall = {
    index: 0,
    advice: ['yes', 'no', 'maybe', 'not a chance'],
    shake() {
      this.index += 1;
      if (this.index >= this.advice.lenght) {
        this.index = 0;
      }
    },
    look() {
      return this.advice[this.index];
    },
  };
  eightBall.shake();
  eightBall.shake();
  eightBall.shake();
  console.log(eightBall.look());
}
export default chapter5;
