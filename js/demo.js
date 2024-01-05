'use strict';

// Vehicle Parent Class
const Vehicle = function(name, wheels) {
  this.name = name;
  this.wheels = wheels;
};

Vehicle.prototype.drive = () => {
  return 'Moving Forward';
};

Vehicle.prototype.stop = () => {
  return 'Stopping';
};

// Car Constructor (sub-class)
const Car = function(name) {
  Vehicle.call(this, name, 4);
};

Car.prototype = new Vehicle();

const Motorcycle = function(name) {
  Vehicle.call(this,name,2);
};


// Motorcycle Constructor (sub-class);
Motorcycle.prototype = new Vehicle();

Motorcycle.prototype.wheelie = () => {
  return 'Wheee!';
};


// -----------------------------------------
// DO NOT EDIT BELOW THIS LINE
// -----------------------------------------

console.log('CONSTRUCTORS AND PROTOTYPES');
console.log('');

let mazda = new Car('Mazda 3');
console.log('Car');
console.log('mazda.name', mazda.name );
console.log('mazda.drive()', mazda.drive() );
console.log('mazda.stop()', mazda.stop() );

console.log('-------------------------------');

let harley = new Motorcycle('Fatboy');
console.log('Motorcycle');
console.log('harley.name', harley.name );
console.log('harley.drive()', harley.drive() );
console.log('harley.wheelie()', harley.wheelie() );
console.log('harley.stop()', harley.stop() );
