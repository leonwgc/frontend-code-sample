var range = document.getElementById('range');
var canvas = document.getElementById('counter');
var ctx = (ctx = canvas.getContext('2d'));
var imd = null;
var circ = Math.PI * 2;
var quart = Math.PI / 2;

var width = 60;
var bgColor = '#A8E7D7';
var foreColor = '#00bc8d';
ctx.lineCap = 'square';
ctx.lineWidth = 6.0;
var radius = width / 2;

var draw = function(current) {
	ctx.clearRect(0, 0, width, width);
	ctx.beginPath();
	ctx.strokeStyle = bgColor;
	ctx.arc(radius, radius, radius - ctx.lineWidth, -quart, circ - quart, false);
	ctx.stroke();
	ctx.strokeStyle = foreColor;
	ctx.beginPath();
	ctx.arc(radius, radius, radius - ctx.lineWidth, -quart, circ * current - quart, false);
	ctx.stroke();
};

range.addEventListener('change', function(e) {
	draw(e.target.value / 100);
});

var i = 0;

function run() {
	if (i <= 100) {
		draw(i / 100);
		i++;
		requestAnimationFrame(run);
	}
}

requestAnimationFrame(run);
