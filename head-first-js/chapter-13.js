function chapter13() {
  console.log('chapter13');

  function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
  }
  Dog.prototype.species = 'Canine';
  Dog.prototype.bark = function () {
    if (this.weight > 25) {
      console.log(`${this.name} says Woof!`);
    } else {
      console.log(`${this.name} says Yip!`);
    }
  };

  Dog.prototype.run = function () {
    console.log('Run!');
  };

  Dog.prototype.wag = function () {
    console.log('Wag!');
  };

  const fido = new Dog('Fido', 'Mixed', 38);
  const fluffy = new Dog('Fluffy', 'Poodle', 30);
  const spot = new Dog('Spot', 'Chihuahua', 10);
  const barnaby = new Dog('Barnaby', 'Basset Hound', 55);
  Dog.prototype.sit = function () {
    console.log(`${this.name} is now sitting`);
  };
  spot.bark = function () {
    console.log(`${this.name} says WOOF!`);
  };
  barnaby.sit();

  fido.bark();
  fido.run();
  fido.wag();

  fluffy.bark();
  fluffy.run();
  fluffy.wag();

  spot.bark();
  spot.run();
  spot.wag();
  function Game() {
    this.level = 0;
  }
  Game.prototype.play = function () {
    this.level++;
    console.log(`Welcome to level ${this.level}`);
    this.unlock();
  };
  Game.prototytpe.unlock = function () {
    if (this.level === 42) {
      Robot.prototype.deployLaser = function () {
        console.log(`${this.name} is blasting you with laser beams.`);
      };
    }
  };
  function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
  }
  Robot.prototype.maker = 'ObjectsRUs';
  Robot.prototype.speak = function () {
    alert('Hello');
  };

  Robot.prototype.makeCoffee = function () {
    alert('Making coffee');
  };
  Robot.prototype.blinkLights = function () {
    alert('Blink blink!');
  };
  const game = new Game();
  const robby = new Robot('Robby', 1956, 'Dr. Morbius');
  const rosie = new Robot('Rosie', 1962, 'George Jetson');

  while (game.level < 42) {
    game.play();
  }

  robby.deployLaser();
  rosie.deployLaser();

  robby.onOffSwitch = true;
  robby.makeCoffee = function () {
    alert('Fetching a coffee from Starbucks.');
  };
  rosie.cleanHouse = function () {
    alert('Cleaning! Spic and Span soon...');
  };

  console.log(`${robby.name} was made by ${robby.maker
  } in ${robby.year} and is owned by ${robby.owner}`);

  robby.makeCoffee();
  robby.blinkLights();

  console.log(`${rosie.name} was made by ${rosie.maker
  } in ${rosie.year} and is owned by ${rosie.owner}`);
  rosie.cleanHouse();
}
export default chapter13;
