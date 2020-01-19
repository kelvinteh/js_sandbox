class Dev {
   constructor(name) {
      this.name = name;
   }

   greet() {
      return "My name is " + this.name + " and I am a developer";
   }
}

class ReactDev extends Dev {
   greet() {
      return super.greet() + " and I also can code in React";
   }
}
const devGeorge = new Dev("George");
let devAlice = new ReactDev("Alice");
const newname = 'Billy';

console.log(devGeorge.greet());
console.log(devAlice.greet());

devGeorge.name = 'Bob';
console.log(devGeorge.greet());
newname = 'Ggoat';