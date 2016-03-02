(function () {

  var tap = 'tap',
    longTap = 'longtap',
    doubleTap = 'doubletap',
    longTapTimeThreshold = 750,
    doubleTapTimeThreshold = 250;

  function createTapEvent(type) {
    var event;
    if ('Event' in window) {
      event = new Event(type);
    }
    else {
      // old way
      event = document.createEvent('Event');
      event.initEvent(type, true, true);
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
    t0,
    dt,
    lastTapTime,
    threshold = 10,
    touch;

  document.documentElement.addEventListener('touchstart', function (e) {
    touch = e.changedTouches[0];
    x0 = touch.pageX,
    y0 = touch.pageY;
    t0 = Date.now();

    e.preventDefault();
  }, false);

  document.documentElement.addEventListener('touchmove', function (e) {
    e.preventDefault();
  }, false);

  document.documentElement.addEventListener('touchend', function (e) {
    touch = e.changedTouches[0];
    x1 = touch.pageX,
    y1 = touch.pageY;
    dt = Date.now() - t0;
    dx = x1 - x0;
    dy = y1 - y0;
    if (!lastTapTime) {
      lastTapTime = Date.now();
    }
    var ts = Date.now() - lastTapTime;
    lastTapTime = Date.now();
    if (Math.abs(dx) <= threshold && Math.abs(dy) <= threshold) {
      if (dt > longTapTimeThreshold) {
        fireTapEvent(e, createTapEvent(longTap));
      }
      else {
        // fire tap event
        if (ts < doubleTapTimeThreshold) {
          fireTapEvent(e, createTapEvent(doubleTap));
        } else {
          fireTapEvent(e, createTapEvent(tap));
        }

      }
    }
    e.preventDefault();
  }, false);
})();