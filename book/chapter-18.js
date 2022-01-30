function chapter18() {
  console.log('chapter-18');

     const funnyGuy = {};

     funnyGuy.firstName = 'Conan';
     funnyGuy.lastName = "O'Brien";

     const myObject = {};

     for (let i = 0; i < 5; i++) {
       const propertyName = `data${i}`;

       myObject[propertyName] = Math.random() * 100;
     }
     console.log(myObject);

     const colors = {
       header: 'blue',
       footer: 'gray',
       content: {
         title: 'black',
         body: 'darkgray',
         signature: 'light blue',
       },
     };
     colors.content.frame = 'yellow';
     delete colors.footer;

      let fannyGuy = {
      farstName: "Conan",
      lastName: "O'Brien"

      getName: function () {
       return "Name is; " + this.farstName + " " + this.lastName;
      }
   };

     const theDude = {
       firstName: 'Jeffrey',
       lastName: 'Lebowski',

       getName() {
         return `Name is: ${this.firstName} ${this.lastName}`;
       },
     };

     const detective = {
       firstName: 'Adrian',
       lastName: 'Monk',

       getName() {
         return `Name is: ${this.firstName} ${this.lastName}`;
       },
     };

  const person = {
    getName() {
      return "The name is " + this.firstName + " " + this.lastName;
    },
    getInitials() {
      if (this.firstName && this.lastName) {
        return this.firstName[0] + this.lastName[0];
      }
    },
  };

  const funnyGuy = Object.create(person);
  funnyGuy.firstName = 'Conan';
  funnyGuy.lastName = "O'Briem";

  const theDude = Object.create(person);
  theDude.firstName = 'Jeffrey';
  theDude.lastName = 'Lebowski';

  const detective = Object.create(person);
  detective.firstName = 'Adrian';
  detective.lastName = 'Monk';

  funnyGuy.getInitials();
}
export default chapter18;
