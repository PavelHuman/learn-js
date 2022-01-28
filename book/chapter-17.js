function chapter17() {
  console.log('chapter-17');
  const foo = {
    a: 'Hello',
    b: 'Welcome',
  };
  console.log(foo.a);

  // theObj.storedValue = 'Unique snowflake!';// запись
  // console.log(theObj.storedValue);// чтение

  // myObj.storedValue = 'Also a unique snowflake!';// запись
  // console.log(myObj.storedValue);// чтение

  const zorb = {
    message: 'Blah',
    get greeting() {
      return this.message;
    },
    set greeting(value) {
      this.message = value;
    },
  };
  console.log(zorb);

  zorb.greeting = 'Hola!';
  console.log(zorb.greeting);

  const shout = {
    _message: 'HELLO!',
    get message() {
      return this.message;
    },
    set message(value) {
      this.message = value.toUpperCase();
    },
  };
  shout.message = 'This is sparta!';
  console.log(shout.message);

  const superSecureTerminal = {
    allUserNames: [],
    _username: '',
    showHistory() {
      console.log(this.allUserNames);
    },
    get username() {
      return this.username;
    },
    set username(name) {
      this.username = name;
      this.allUserNames.push(name);
    },
  };
  const myTerminal = Object.create(superSecureTerminal);
  myTerminal.username = 'Michael Gary Scott';
  myTerminal.username = 'Dwight K. Schrute';
  myTerminal.username = 'Creed Bratton';
  myTerminal.username = 'Pam Beasley';
  myTerminal.showHistory();

  const person = {
    _name: '',
    _age: '',

    get name() {
      return this.name;
    },

    set name(value) {
      if (value.length > 2) {
        this.name = value;
      } else {
        console.log('Name is too short!');
      }
    },

    get age() {
      return this.age;
    },

    set age(value) {
      if (value < 5) {
        console.log('Too young!');
      } else {
        this.age = value;
      }
    },

    get details() {
      return `Name: ${this.name}, Age: ${this.age}`;
    },
  };
  console.log(person);
}
export default chapter17;
