function chapter20() {
  console.log('chapter-20');

  class Planet {
    constructor(name, radius) {
      this.name = name;
      this.radius = radius;
    }

    getSuefaceArea() {
      const surfaceArea = 4 * Math.PI * this.radius ** 2;
      console.log(`${surfaceArea} square km!`);
      return surfaceArea;
    }

    set gravity(value) {
      console.log('Setting value!');
      this._gravity = value;
    }

    get gravity() {
      console.log('Getting value!');
      return this._gravity;
    }
  }
  class PotatoPlanet extends Planet {
    constructor(name, width, potatoType) {
      super(name, width);
      this.potatoType = potatoType;
    }

    getPotatoType() {
      const thePotato = `${this.potatoType.toUpperCase()}!!1!!!`;
      console.log(thePotato);
      return thePotato;
    }
  }
  const spudnik = new PotatoPlanet('Spudnik', 12411, 'Russet');
  spudnik.gravity = 42.1;
  spudnik.getPotatoType();

  const earth = new Planet('Earth', 6378);
  earth.gravity = 9.81;
  earth.getSuefaceArea();

  console.log(earth.gravity);

  // const earth = new Planet('Earth', 6378);
  // earth.getSuefaceArea();

  // let myPlanet = new Planet("Earth", 6378);
  // console.log(myPlanet.name);

  const myPlanet = new Planet();
}
export default chapter20;
