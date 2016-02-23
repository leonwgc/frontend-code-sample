/**
 * @Usage：The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
 * @Syntax：fun.bind(thisArg[, arg1[, arg2[, ...]]])
 * @Created date: 2016-2-23
 */

x = 10;  // the same as global.x=10
var module = {
  x: 20,
  getX: function () {
    console.log(this.x);
  }
}

module.getX(); // 20

var getX = module.getX;
getX(); // 10

getX = module.getX.bind(module);
getX(); //20

// class
function Dog() {
  this.name = 'kitty';
}

Dog.prototype.speak = function () {
  console.log('this is a dog ' + this.name);
}

var DDog = Dog.bind({ name: 'leon' });
var d = new DDog(); // using new , the bound this would be ignored

d.speak(); //this is a dog kitty

// Polyfill 
Function.prototype.bind = function (othis) {
  if (typeof this !== 'function') {
    throw new Error('this must be a function');
  }

  var beBound = this,
    args = Array.prototype.slice.call(arguments, 1),
    bound = function MyBound() {
      if (this instanceof MyBound) {
        // call using new
        othis = this;
      }
      var myArgs = args.concat(Array.prototype.slice.call(arguments));
      beBound.apply(othis, myArgs);
    };

  if (this.prototype) {
    bound.prototype = Object.create(this.prototype);
  }

  return bound;
}

// below codes will use my custom bind function

x = 10;  // the same as global.x=10
var module = {
  x: 20,
  getX: function () {
    console.log(this.x);
  }
}

module.getX(); // 20

var getX = module.getX;
getX(); // 10

getX = module.getX.bind(module);
getX(); //20

// class
function Dog() {
  this.name = 'kitty';
}

Dog.prototype.speak = function () {
  console.log('this is a dog ' + this.name);
}

var DDog = Dog.bind({ name: 'leon' });
var d = new DDog();

d.speak(); //this is a dog kitty

process.exit();