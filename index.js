const Koa = require('koa');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

const app = new Koa();
const server = require('http').createServer(app.callback());

const homeRouter = require('./routers/home');

app.use(cors({
	origin: '*',
	credentials: true,
	allowMethods: ['GET', 'POST', 'PUT'],
	allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

app.use(koaBody());

app.use(homeRouter.routes()).use(homeRouter.allowedMethods());

const HOST = global.process.env.HOST || '0.0.0.0';
const PORT = global.process.env.PORT || 3001;

server.listen(PORT, HOST, () => {
	console.log(`listening on ${ HOST }:${ PORT }`); // eslint-disable-line
})