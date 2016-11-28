const koa = require('koa');
const koaLogger = require('koa-logger');
const app = koa();

app.use(function *(next) {
    console.log('this will be first');
    yield next;
    console.log('and this last');
});
app.use(koaLogger());
app.use(function *() {
    this.body = 'Hello Koa!';
});

app.listen(3000);