const Router = require('koa-router');

const homeRouter = new Router();

homeRouter.get('/', (ctx) => {
	ctx.response.type = 'html';
	ctx.response.body = '<div>hello, world</div>';
});

module.exports = homeRouter;