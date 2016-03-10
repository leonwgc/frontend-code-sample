//debounce returns a new function that will execute only once
//throttle returns a new function that will execute no more than once every delay milliseconds
function debounce(func, delay, debounce) {
  var timer,
    lastExec = +new Date,
    now,
    diff;

  return function() {
    if (timer) {
      clearTimeout(timer);
    }
    var thisArg = this,
      args = arguments;
    if (debounce) {
      timer = setTimeout(function() {
        lastExec = +new Date;
        func.apply(thisArg, args);
      }, delay);
    } else {
      now = +new Date;
      diff = now - lastExec;
      if (diff > delay) {
        lastExec = +new Date;
        func.apply(thisArg, args);
      }
    }

  }
}

var msg = document.getElementById('msg');
var input = document.getElementById('input');

function log() {
  msg.innerText = input.value;
}

input.addEventListener('keyup', debounce(log, 500,false), false);