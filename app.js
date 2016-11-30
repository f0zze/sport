const Koa = require('koa');
const config = require('config');
const app = new Koa();
const routes = require('./src/router');

const port = process.env.PORT || 5000;
app.use(routes.routes());
app.use(async(ctx, next)=> {
    ctx.body = `Sports App ${config.get('env')}`;
    await next();
});

app.listen(port);
console.log('listening on port ' + port);