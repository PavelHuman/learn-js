function Dog(name) {
  this.name = name;
}


Dog.prototype.bark = function () {
  console.log('gaf');
};


console.log(Dog.prototype);

const mars = new Dog('Mars');
console.log('mars', mars);

mars.bark();
mars.barkSpecial = function () {
  console.log(this.name);
}
mars.barkSpecial();
