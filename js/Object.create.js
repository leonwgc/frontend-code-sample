/**
 * @Usage：The Object.create() method creates a new object with the specified prototype object and properties.
 * @Syntax：Object.create(proto[, propertiesObject])
 * @Created date: 2016-2-23
 */

// examples : Classical inheritance with Object.create()

function Animal(species) {
  this.species = species;
}

Animal.prototype.say = function (msg) {
  console.log('Animal:' + this.species + ' says ' + msg);
}

function Dog(name) {
  this.name = name;
  Animal.call(this, 'Dog');
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.hi = function () {
  console.log('hi ' + this.name);
}

var dog = new Dog('leon');

dog.say('hello');
if (dog instanceof Animal) {
  console.log('dog is Animal');
}

if (dog instanceof Dog) {
  console.log('dog is Dog');
}

// example: Using propertiesObject argument with Object.create()

var obj = Object.create(Object.prototype, {
  foo: { writable: true, configurable: true, enumerable: true, value: 'foo' },
  bar: { enumerable: false,
  get:function () {
     return 10;
  },
  set :function (value) {
    console.log(value);
  }
  }
})

console.log(obj.foo); // foo

// Polyfill : This polyfill covers the main use case which is creating a new object for which the prototype has been chosen but doesn't take the second argument into account.

if (typeof Object.create != 'function') {
  Object.create = (function() {
    var Temp = function() {};
    return function (prototype) {
      if (arguments.length > 1) {
        throw Error('Second argument not supported');
      }
      if (typeof prototype != 'object') {
        throw TypeError('Argument must be an object');
      }
      Temp.prototype = prototype;
      var result = new Temp();
      Temp.prototype = null;
      return result;
    };
  })();
}