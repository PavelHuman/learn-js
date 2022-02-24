function chapter10() {
  console.log('chapter10');

  function quack(num) {
    for (let i = 0; i < num; i++) {
      console.log('Quack!');
    }
  }
  const fly = function (num) {
    for (let i = 0; i < num; i++) {
      console.log('Flying!');
    }
  };
  const superFly = fly;
  superFly(2);
  const superQuack = quack;
  superQuack(3);

  const passengers = [{ name: 'Jane Doloop', paid: true, ticket: 'coach' },
    { name: 'Dr. Evel', paid: true, ticket: 'firstclass' },
    { name: 'Sue Property', paid: false, ticket: 'firstclass' },
    { name: 'John Funcall', paid: true, ticket: 'premium' }];

  function processPassengers(passengers, testFunction) {
    for (let i = 0; i < passengers.length; i++) {
      if (testFunction(passengers[i])) {
        return false;
      }
    }
    return true;
  }

  function checkNoFlyList(passenger) {
    return (passenger.name === 'Dr. Evel');
  }

  function checkNotPaid(passenger) {
    return (!passenger.paid);
  }

  function createDrinkOrder(passenger) {
    let orderFunction;

    if (passenger.ticket === 'firstclass') {
      orderFunction = function () {
        alert('Would you like a cocktail or wine?');
      };
    } else if (passenger.ticket === 'premium') {
      orderFunction = function () {
        alert('Would you like wine, cola or water?');
      };
    } else {
      orderFunction = function () {
        alert('Your choice is cola or water.');
      };
    }
    return orderFunction;
  }

  function serveCustomer(passenger) {
    const getDrinkOrderFunction = createDrinkOrder(passenger);
    getDrinkOrderFunction();
  }

  function servePassengers(passengers) {
    for (let i = 0; i < passengers.length; i++) {
      serveCustomer(passengers[i]);
    }
  }
  servePassengers(passengers);

  const allCanFly = processPassengers(passengers, checkNoFlyList);
  if (!allCanFly) {
    console.log("The plane can't take off: we have a passenger on the no-fly-list.");
  }

  const allPaid = processPassengers(passengers, checkNotPaid);
  if (!allPaid) {
    console.log("The plane can't take off: not everyone has paid.");
  }
  const numbersArray = [60, 50, 62, 58, 54, 54];
  function compareNumbersDesc(num1, num2) {
    if (num2 > num1) {
      return 1;
    } if (num1 === num2) {
      return 0;
    }
    return -1;
  }
  compareNumbersDesc();
  numbersArray.sort(compareNumbersDesc);
  console.log(numbersArray);

  const products = [{
    name: 'Grapefruit', calories: 170, color: 'red', sold: 8200,
  },
  {
    name: 'Orange', calories: 160, color: 'orange', sold: 12101,
  },
  {
    name: 'Cola', calories: 210, color: 'caramel', sold: 25412,
  },
  {
    name: 'Diet Cola', calories: 0, color: 'caramel', sold: 43922,
  },
  {
    name: 'Lemon', calories: 200, color: 'clear', sold: 14983,
  },
  {
    name: 'Raspberry', calories: 180, color: 'pink', sold: 9427,
  },
  {
    name: 'Root Beer', calories: 200, color: 'caramel', sold: 9909,
  },
  {
    name: 'Water', calories: 0, color: 'clear', sold: 62123,
  },
  ];
  function compareSold(colaA, colaB) {
    if (colaA.sold > colaB.sold) {
      return 1;
    } if (colaA.sold === colaB.sold) {
      return 0;
    }
    return -1;
  }
  function compareName(colaA, colaB) {
    if (colaA.name > colaB.name) {
      return 1;
    } if (colaA.name === colaB.name) {
      return 0;
    }
    return -1;
  }
  function compareCalories(colaA, colaB) {
    if (colaA.calories > colaB.calories) {
      return 1;
    } if (colaA.calories === colaB.calories) {
      return 0;
    }
    return -1;
  }
  function compareColor(colaA, colaB) {
    if (colaA.color > colaB.color) {
      return 1;
    } if (colaA.color === colaB.color) {
      return 0;
    }
    return -1;
  }
  function printProducts(products) {
    for (let i = 0; i < products.length; i++) {
      console.log(`Name: ${products[i].name
      }, Calories: ${products[i].calories
      }, Color: ${products[i].color
      }, Sold: ${products[i].sold}`);
    }
  }
  products.sort(compareName);
  console.log('Products sorted by name:');
  printProducts(products);

  products.sort(compareCalories);
  console.log('Products sorted by calories:');
  printProducts(products);

  products.sort(compareColor);
  console.log('Products sorted by color:');
  printProducts(products);

  products.sort(compareSold);
  console.log('Products sorted by sold:');
  printProducts(products);
}
export default chapter10;
