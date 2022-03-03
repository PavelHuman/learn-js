function Dog(name) {
  this.name = name;
  this.bark = function () {
    console.log('gaf');
  };
}

// Dog.prototype.bark = function () {
//   console.log('gaf');
// };

// console.log(Dog.prototype);
console.dir(Dog);
const mars = new Dog('Mars');
console.log('mars', mars);

// mars.bark();
// mars.barkSpecial = function () {
//   console.log(this.name);
// }
// mars.barkSpecial();
mars.bark();
