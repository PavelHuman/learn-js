const users = [
  {
    name: 'Pavel',
    surname: 'Dmitriev',
    nickname: 'PavelHuman',
    age: '33',
    email: 'pavelhuman@gmail.com',
  },
  {
    name: 'Dmitry',
    surname: 'Anderson',
    nickname: 'dandgerson',
    age: '34',
    email: 'danderson@gmail.com',
  },
  {
    name: 'Lada',
    surname: 'Anderson',
    nickname: 'landerson',
    age: '5',
    toy: 'Green Dragon',
    email: 'landerson@gmail.com',
  },
  {
    name: 'Irina',
    surname: 'Anderson',
    nickname: 'iranderson',
    age: '33',
    email: 'iranderson@gmail.com',
  },
];

/**
 * Class
 *
 * - [ ] Reference type {}, []
 * - [ ] prototype {..., ..., ..., }
 * - [ ] this
 * - [ ] 'new' operator
 * - [ ] contructor
 */

class Human {
  constructor({
    name,
    surname,
    nickname = null,
    age,
    email = null,
  }) {
    this.name = name;
    this.surname = surname;
    this.nickname = nickname;
    this.age = age;
    this.email = email;
  }

  getFullName() {
    return `${this.name} ${this.surname} (nickname: ${this.nickname})`;
  }

  getAge() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Child extends Human {
  constructor({
    toy,
    ...rest
  }) {
    super(rest);
    this.toy = toy;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }

  play() {
    return `Lets play with me with my favorite toy: ${this.toy}!`;
  }
}

const persons = users.map((user) => {
  if (user.age < 18) {
    return new Child(user);
  }

  return new Human(user);
});

console.log({ persons });

persons.forEach((person) => {
  console.log('person: ', person.getFullName());
  console.log('person: ', person.getAge());

  if (person instanceof Child) {
    console.log('person: ', person.play());
  }

  console.log('');
  console.log('***');
  console.log('');
});
