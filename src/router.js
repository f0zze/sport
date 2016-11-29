const Router = require('koa-router');
const AppRouter = require('./app/games/router');
const apiRouter = new Router({prefix: '/api'});
//Register app routes
apiRouter.use('/games', AppRouter.routes());

module.exports = apiRouter;

