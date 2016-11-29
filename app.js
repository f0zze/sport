'use strict';
const Koa = require('koa');
const app = new Koa();
const routes = require('./src/router');

const port = process.env.PORT || 5000;
app.use(routes.routes());

app.listen(port);
console.log('listening on port ' + port);