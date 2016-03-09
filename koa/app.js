var koa = require('koa');
var serve = require('koa-static');
var favicon = require('koa-favicon');
var error = require('koa-error');
var responseTime = require('koa-response-time');
var app = koa();
var path = require('path');

app.use(responseTime());

// favicon
app.use(favicon(path.join(__dirname, '../pages/favicon.ico')));

app.use(serve(path.join(__dirname, '../')));

app.use(error({ template: path.join(__dirname, '../pages/error.html') }));


var port = 3001;
app.listen(port);

console.log('app is running at port ' + port);