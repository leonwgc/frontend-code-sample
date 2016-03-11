function hasVerticalScroll() {
  var viewHeight = window.innerHeight || document.documentElement.clientHeight;
  var scrollHeight = document.documentElement.scrollHeight;

  if (viewHeight < scrollHeight) {
    return true;
  }
}

var divLoaded = false,
  div;

document.documentElement.addEventListener('click', function() {
  if (!divLoaded) {
    var h = document.documentElement.clientHeight + 100;
    div = document.createElement('div');
    div.style.height = h + 'px';
    document.body.appendChild(div);

    divLoaded = true;
  }
  else {
    div.remove();
    divLoaded = false;
  }

  if (hasVerticalScroll()) {
    console.log('yes it has');
  } else {
    console.log("not it doesn't ");
  }
})
