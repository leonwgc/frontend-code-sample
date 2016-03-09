var navObj = {
  page1: 'this is page1',
  page2: 'this is page2',
  page3: 'this is page3',
  page4: 'this is page4'
};

var msg = document.getElementById('msg');

function clickHandler(e) {
  if (e.target.nodeName === 'A') {
    var page = e.target.getAttribute('href').split('/').pop();
    msg.innerText = navObj[page];

    history.pushState(page, page, e.target.href);
  }

  e.preventDefault();
}

window.addEventListener('click', clickHandler, false);

window.addEventListener('popstate',function (e) {
  if(e.state){
    msg.innerText = navObj[e.state];
  }
})