var tb = document.getElementById('tb');
var tr = tb.getElementsByTagName('tr');

var opNode,
  startY;

function moveIn(el) {
  return function() {
    el.className = 'in';
  }
}

function moveOut(el) {
  return function() {
    el.className = '';
  }
}

tb.addEventListener('mousedown', function(e) {
  startY = e.pageY;
  tb.className = 'dragging';
  var len = tr.length;

  while (len--) {
    var infn = moveIn(tr[len]),
      outfn = moveOut(tr[len]);
    tr[len].infn = infn;
    tr[len].outfn = outfn;
    tr[len].addEventListener('mouseover', infn, false);
    tr[len].addEventListener('mouseleave', outfn, false);
  }

  e.target.parentNode.className = 'in';
  opNode = e.target.parentNode;
  e.preventDefault();
}, false);

tb.addEventListener('mouseup', function(e) {
  tb.className = '';
  var len = tr.length;

  while (len--) {
    tr[len].removeEventListener('mouseover', tr[len].infn, false);
    tr[len].removeEventListener('mouseleave', tr[len].outfn, false);

    delete tr[len].infn;
    delete tr[len].outfn;
  }

  var trNode = e.target.parentNode;

  if (trNode !== opNode) {
    if (e.pageY < startY) {
      trNode.parentNode.insertBefore(opNode, trNode);
    }
    else {
      trNode.parentNode.insertBefore(opNode, trNode.nextElementSibling);
    }
  }

  e.target.parentNode.className = '';
}, false);