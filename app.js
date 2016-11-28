'use strict';
const Koa = require('koa');
const app = new Koa();

const port = process.env.PORT || 5000;

app.use(async (ctx) => {
    ctx.body = 'Hello Koa 2.0 and node 7v!';
    }
);

app.listen(port);
console.log('listening on port ' + port);