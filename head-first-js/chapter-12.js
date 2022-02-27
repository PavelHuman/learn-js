function chapter12() {
  console.log('chapter12');

  function dogCatcher(obj) {
    if (obj instanceof Dog) {
      return true;
    }
    return false;
  }
  function Cat(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
  }
  const meow = new Cat('Meow', 'Siamese', 10);
  const whiskers = new Cat('Whiskers', 'Mixed', 12);

  const fido = { name: 'Fido', breed: 'Mixed', weight: 38 };

  function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;

    this.bark = function () {
      if (this.weight > 25) {
        alert(`${this.name} says Woof!`);
      } else {
        alert(`${this.name} says Yip!`);
      }
    };
  }
  const fluffy = new Dog('Fluffy', 'Poodle', 30);
  const spot = new Dog('Spot', 'Chihuahua', 10);
  const limoDog = new Dog('Rhapsody In Blue', 'Poodle', 40);
  const dogs = [fido, fluffy, spot, limoDog];

  for (let i = 0; i < dogs.length; i++) {
    if (dogCatcher(dogs[i])) {
      console.log(`${dogs[i].name} is a dog!`);
    }
  }

  function Coffee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;
    this.getSize = function () {
      if (this.ounces === 8) {
        return 'small';
      } if (this.ounces === 12) {
        return 'medium';
      } if (this.ounces === 16) {
        return 'large';
      }
    };
    this.toString = function () {
      return `You've ordered a ${this.getSize()} ${this.roast} coffee.`;
    };
  }
  const houseBlend = new Coffee('House Blend', 12);
  console.log(houseBlend.toString());
  const darkRoast = new Coffee('Dark Roast', 16);
  console.log(darkRoast.toString());

  const chevyParams = {
    make: 'Chevy',
    model: 'Bel Air',
    year: 1957,
    color: 'red',
    passenger: 2,
    convertible: false,
    mileage: 1021,
  };
  const cadiParams = {
    make: 'GM',
    model: 'Cadillac',
    year: 1955,
    color: 'tan',
    passengers: 5,
    convertible: false,
    mileage: 12892,
  };

  const taxiParams = {
    make: 'Webville Motors',
    model: 'Taxi',
    year: 1955,
    color: 'yellow',
    passengers: 4,
    convertible: false,
    milage: 281341,
  };
  const fiatParams = {
    make: 'Fiat',
    model: '500',
    year: 1957,
    color: 'Medium Blue',
    passengers: 2,
    convertible: false,
    mileage: 88000,
  };
  const testCarParams = {
    make: 'Webville Motors',
    model: 'Test Car',
    year: 2014,
    color: 'marine',
    passengers: 2,
    convertible: true,
    mileage: 21,
  };
  const limoParams = {
    make: 'Webville Motors',
    model: 'limo',
    year: 1983,
    color: 'black',
    passengers: 12,
    convertible: true,
    mileage: 21120,
  };
  const chevy = new Factory(chevyParams);
  const cadi = new Factory(cadiParams);
  const taxi = new Factory(taxiParams);
  const fiat = new Factory(fiatParams);
  const testCar = new Factory(testCarParams);
  const limo = new Factory(limoParams);
  if (cadi instanceof Factory) {
    console.log("Congrats, it's a Car!");
  }
  function Factory(params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;

    this.start = function () {
      this.started = true;
    },
    this.stop = function () {
      this.started = false;
    },
    this.drive = function () {
      if (this.started) {
        alert('Zoom zoom!');
      } else {
        alert('You need to start the engine first.');
      }
    };
  }
  console.log(`${cadi.make} ${cadi.model} is a ${typeof cadi}`);
  // cadi.start();
  // cadi.drive();
  // cadi.drive();
  // cadi.stop();
}
export default chapter12;
