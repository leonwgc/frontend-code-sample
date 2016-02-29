var koa = require('koa');
var serve = require('koa-static');
var favicon = require('koa-favicon');
var error=require('koa-error');
var responseTime=require('koa-response-time');
var app = koa();

app.use(responseTime());

// favicon
app.use(favicon('../pages/favicon.ico'));

app.use(serve('../'));

app.use(error({template:'../pages/error.html'}));


var port=3001;
app.listen(port);

console.log('app is running at port '+port);