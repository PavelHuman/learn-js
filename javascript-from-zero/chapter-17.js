function chapter17() {
  console.log('chapter-17');

  // theObj.storedValue = 'Unique snowflake!';// запись
  // console.log(theObj.storedValue);// чтение

  // myObj.storedValue = 'Also a unique snowflake!';// запись
  // console.log(myObj.storedValue);// чтение

  // const zorb = {
  //   message: 'Blah',
  //   get greeting() {
  //     return this.message;
  //   },
  //   set greeting(value) {
  //     this.message = value;
  //   },
  // };
  // console.log(zorb.greeting);

  // zorb.greeting = 'Hola!';
  // console.log(zorb.greeting);

  // const shout = {
  //   _message: 'HELLO!',
  //   get message() {
  //     return this._message;
  //   },
  //   set message(value) {
  //     this._message = value.toUpperCase();
  //   },
  // };
  // shout.message = 'This is sparta!';
  // console.log(shout.message);

  const superSecureTerminal = {
    allUserNames: [],
    _username: '',
    showHistory() {
      console.log(this.allUserNames);
    },
    get username() {
      return this._username;
    },
    set username(name) {
      this._username = name;
      this.allUserNames.push(name);
    },
  };

  const myTerminal = Object.create(superSecureTerminal);
  myTerminal.username = 'Michael Gary Scott';
  myTerminal.username = 'Dwight K. Schrute';
  myTerminal.username = 'Creed Bratton';
  myTerminal.username = 'Pam Beasley';
  myTerminal.showHistory();

  // const person = {
  //   _name: '',
  //   _age: '',

  //   get name() {
  //     return this._name;
  //   },

  //   set name(value) {
  //     if (value.length > 2) {
  //       this._name = value;
  //     } else {
  //       console.log('Name is too short!');
  //     }
  //   },

  //   get age() {
  //     return this._age;
  //   },

  //   set age(value) {
  //     if (value < 5) {
  //       console.log('Too young!');
  //     } else {
  //       this._age = value;
  //     }
  //   },

  //   get details() {
  //     return `Name: ${this.name}, Age: ${this.age}`;
  //   },
  // };
}
export default chapter17;
