function chapter22() {
  console.log('chapter-22');
  let name = null;

  if (name === null) {
    name = 'Peter Griffin';
  } else {
    name = 'No name';
  }

  let myVariable;
  console.log(myVariable); // undefined

  function doNothing() {
    // watch paint dry

  }
  const weekendPlans = doNothing();
  console.log(weekendPlans); // undefined

  const person = {
    firstName: 'Isaac',
    lastName: 'Newton',
  };
  console.log(person.title); // undefined

  if (myVariable === undefined) {
    console.log('Define me!!!');
  }
}
export default chapter22;
