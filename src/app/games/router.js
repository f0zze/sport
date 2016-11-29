const Router = require('koa-router');

const createCtrl = require('./controllers/createGameController');
const updateCtrl = require('./controllers/updateGameController');
const deleteCtrl = require('./controllers/deleteGameController');
const getDetailsCtrl = require('./controllers/gameDetailsController');
const getAllCtrl = require('./controllers/getAllGamesController');

const gameRouter = new Router()
    .get('/', getAllCtrl)
    .get('/:id', getDetailsCtrl)
    .post('/', createCtrl)
    .put('/:id', updateCtrl)
    .del('/:id', deleteCtrl);

module.exports = gameRouter;