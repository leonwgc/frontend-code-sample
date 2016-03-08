var EventEmitter = require('events').EventEmitter;
var util = require('util');

var emitter = new EventEmitter();

emitter.on('click', function click(who, when) {
  console.log(who + ' triggered click event at ' + when);
});

emitter.emit('click', 'leon', (new Date()).toLocaleString());

function HttpRequest(url, method) {
  this.url = url;
  this.method = method;
  EventEmitter.call(this);

  this.on('response', function response(data) {
    console.log('response data coming ' + data);
  })
}

HttpRequest.prototype.send = function send() {
  console.log('send to ' + this.url);
  this.emit('response', (new Date()).toLocaleString());
}

util.inherits(HttpRequest, EventEmitter);

var request = new HttpRequest('http://www.hello.com', 'GET');

request.send();