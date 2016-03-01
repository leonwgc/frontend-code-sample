(function () {
  function createTapEvent() {
    var event;
    if ('Event' in window) {
      event = new Event('tap');
    }
    else {
      // old way
      event = document.createEvent('Event');
      event.initEvent('tap', true, true);
      event.name = 'tap';
    }
    return event;
  }

  function fireTapEvent(e, evt) {
    e.target.dispatchEvent(evt);
  }

  var x0,
    y0,
    x1,
    y1,
    dx,
    dy,
    threshold = 10,
    touch;

  document.documentElement.addEventListener('touchstart', function (e) {
    touch = e.changedTouches[0];
    x0 = touch.pageX,
    y0 = touch.pageY;
    e.preventDefault();
  }, false);

  document.documentElement.addEventListener('touchmove', function (e) {
    e.preventDefault();
  }, false);

  document.documentElement.addEventListener('touchend', function (e) {
    touch = e.changedTouches[0];
    x1 = touch.pageX,
    y1 = touch.pageY;
    dx = x1 - x0;
    dy = y1 - y0;
    if (Math.abs(dx) <= threshold && Math.abs(dy) <= threshold) {
      // fire tap event
      fireTapEvent(e, createTapEvent());
    }
    e.preventDefault();
  }, false);
})();