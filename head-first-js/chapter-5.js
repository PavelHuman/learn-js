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
  };

  const cadi = {
    make: 'Cadi',
    model: 'GM',
    year: 1955,
    color: 'tan',
    passengers: 5,
    convertible: false,
    mileage: 12892,
    body: 'sedan',
  };

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

  // const taxi = {
  //   make: 'Webville Motors',
  //   model: 'Taxi',
  //   year: 1955,
  //   color: 'yellow',
  //   passengers: 4,
  //   convertible: false,
  //   mileage: 281341,
  // };
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
}
export default chapter5;
