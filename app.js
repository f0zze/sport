const koa = require('koa');
const koaLogger = require('koa-logger');
const app = koa();

const port = process.env.PORT || 5000;

app.use(function *(next) {
    console.log('this will be first');
    yield next;
    console.log('and this last');
});
app.use(koaLogger());
app.use(function *() {
    this.body = 'Hello Koa!';
});

app.listen(port);
console.log('listening on port '+port);