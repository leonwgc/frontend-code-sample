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
          top0,
          rotation0,
          scale0;
          
    var msgBox=document.getElementById('msg');
    
    function printMsg(msg){
      msgBox.innerText=msg;
    }

    stage.addEventListener('gesturestart', function (e) {
      rotation0 = e.rotation;
      scale0 = e.scale;
      
      printMsg('r:'+rotation0+', s:'+scale0);
    }, false);

    stage.addEventListener('gesturechange', function (e) {
      rotation1 = e.rotation;
      scale1 = e.scale;
      stage.style.webkitTransform='scale('+scale1+') rotate('+rotation1+'deg)';
      printMsg('r:'+rotation1+', s:'+scale1);
    }, false);
    
    stage.addEventListener('gestureend', function (e) {
      rotation1 = e.rotation;
      scale1 = e.scale;
      
      printMsg('r:'+rotation1+', s:'+scale1);
    }, false);
    
    document.addEventListener('touchmove',function(e){
      e.preventDefault();
    },false);