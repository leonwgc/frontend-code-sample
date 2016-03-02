 var stage = document.getElementsByClassName('stage')[0];
    var x0,
          y0,
          x1,
          y1,
          dx,
          dy,
          threshold=10,
          touch,
          left0,
          top0;

    stage.addEventListener('touchstart', function (e) {
      touch = e.changedTouches[0];
      x0 = touch.pageX,
      y0 = touch.pageY;
      
      var style = getComputedStyle(stage);
      left0 = parseFloat(style.getPropertyValue('left'));
      top0 = parseFloat(style.getPropertyValue('top'));
      e.preventDefault();
    }, false);

    stage.addEventListener('touchmove', function (e) {
      touch = e.changedTouches[0];
      x1 = touch.pageX,
      y1 = touch.pageY;
      dx = x1 - x0;
      dy = y1 - y0;
      stage.style.left = (left0 + dx) + 'px';
      stage.style.top = (top0 + dy) + 'px';
      e.preventDefault();
    }, false);

    stage.addEventListener('touchend', function (e) {
      touch = e.changedTouches[0];
      x1 = touch.pageX,
      y1 = touch.pageY;
      dx = x1 - x0;
      dy = y1 - y0;
      if (Math.abs(dx) > threshold) {
        if (dx < 0) {
          //slide to left
          console.log('slide to left');
        } else {
          //slide to right
          console.log('slide to right');
        }
      }
      e.preventDefault();
    }, false);