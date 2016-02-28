var koa = require('koa');
var serve = require('koa-static');
var favicon = require('koa-favicon');
var error=require('koa-error');
var responseTime=require('koa-response-time');
var app = koa();

app.use(responseTime());

// favicon
app.use(favicon('../pages/favicon.ico'));

// html files in css folder ,but set root dir as the static folder
app.use(serve('../'));

app.use(error({template:'../pages/error.html'}));


app.listen(3000);