var math = require('../src/math');
var $ = require('../../lib/jquery-1.11.1.min');
console.log('hello,world');

console.log(math.add(1, 2));

console.log(math.add(10, 2));


$(function() {
  console.log('dom is ready now');
})