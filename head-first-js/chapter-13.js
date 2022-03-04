/* eslint-disable no-extend-native */
function chapter13() {
  console.log('chapter13');

  function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
  }

  function ShowDog(name, breed, weight, handler) {
    Dog.call(this, name, breed, weight);
    this.handler = handler;
  }
  ShowDog.prototype = new Dog();
  ShowDog.prototype.constructor = ShowDog;
  ShowDog.prototype.league = 'Webville';
  ShowDog.prototype.stack = function () {
    console.log('Stack');
  };
  ShowDog.prototype.bait = function () {
    console.log('Bait');
  };
  ShowDog.prototype.gait = function () {
    console.log(`${kind}ing`);
  };
  ShowDog.prototype.groom = function () {
    console.log('Groom');
  };
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
  Dog.prototype.sitting = false;

  Dog.prototype.set = function () {
    if (this.sitting) {
      console.log(`${this.name} is already sitting`);
    } else {
      this.sitting = true;
      console.log(`${this.name} is now sitting`);
    }
  };
  const scotty = new ShowDog('Scotty', 'Scottish Terrier', 15, 'Cookie');
  if (scotty instanceof Dog) {
    console.log('Scotty is a Dog');
  }
  if (scotty instanceof ShowDog) {
    console.log('Scotty is a ShowDog');
  }
  const fido = new Dog('Fido', 'Mixed', 38);
  if (fido instanceof Dog) {
    console.log('Fido is a Dog');
  }
  if (fido instanceof ShowDog) {
    console.log('Fido is a ShowDog');
  }
  console.log(`Fido constructor is ${fido.constructor}`);
  console.log(`Scotty constructor is ${scotty.constructor}`);

  const fluffy = new Dog('Fluffy', 'Poodle', 30);
  const spot = new Dog('Spot', 'Chihuahua', 10);
  const barnaby = new Dog('Barnaby', 'Basset Hound', 55);

  Dog.prototype.sit = function () {
    console.log(`${this.name} is now sitting`);
  };
  spot.bark = function () {
    console.log(`${this.name} says WOOF!`);
  };
  scotty.stack();
  scotty.bark();
  console.log(scotty.league);
  console.log(scotty.species);

  barnaby.sit();
  barnaby.sit();
  spot.sit();
  spot.sit();

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

  function SpaceRobot(name, year, owner, homePlanet) {
    this.name = name;
    this.year = year;
    this.owner = owner;
    this.homePlanet = homePlanet;
  }
  SpaceRobot.prototype = new Robot();
  SpaceRobot.prototype.speak = function () {
    alert(`${this.name} says Sir, If I may venture an opinion...`);
  };
  SpaceRobot.prototype.pilot = function () {
    alert(`${this.name} says Thrusters? Are they important?`);
  };
  const c3po = new SpaceRobot('C3PO', 1977, 'Luke Skywalker', 'Tatooine');
  c3po.speak();
  c3po.pilot();
  console.log(`${c3po.name} was made by ${c3po.maker}`);

  const simon = new SpaceRobot('Simon', 2009, 'Carla Diana', 'Earth');
  simon.makeCoffee();
  simon.blinkLights();
  simon.speak();

  String.prototype.cliche = function () {
    const cliche = ['lock and load', 'touch base', 'open the kimono'];
    for (let i = 0; i < cliche.length; i++) {
      const index = this.indexOf(cliche[i]);
      if (index >= 0) {
        return true;
      }
    }
    return false;
  };
  const sentences = ["I'll send my car around to pick you up.",
    "Let's touch base in the morning and see where we are",
    "We don't want to open the kimono, we just want to inform them."];
  for (let i = 0; i < sentences.length; i++) {
    const phrase = sentences[i];
    if (phrase.cliche()) {
      console.log(`CLICHE ALERT: ${phrase}`);
    }
  }
  String.prototype.palindrome = function () {
    const len = this.length - 1;
    for (let i = 0; i <= len; i++) {
      if (this.charAt(i) !== this.charAt(len - i)) {
        return false;
      }
      if (i === (len - i)) {
        return true;
      }
    }
    return true;
  };
  const palind = ['deed', 'mom', 'wow'];
  for (let i = 0; i < palind.length; i++) {
    const pal = palind[i];
    if (pal.palindrome()) {
      console.log(`'${pal}' is a palindrome`);
    } else {
      console.log(`'${pal}' is NOT a palindrome`);
    }
  }
}
export default chapter13;
