import koa from 'koa';
import koaRouter from 'koa-router';

var port = 9001;
var app = koa();
var router = koaRouter();

app.use(function* (next){
	var time =  new Date();
	yield next;
	var ms = new Date - time;
	this.set('X-Response-Time', `${ms} ms`)
});

router.get('/', function* (){
	console.log('using!')
	this.body = 'test';
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(port, function(){
	console.log(`Now listening on port ${port}`)
});