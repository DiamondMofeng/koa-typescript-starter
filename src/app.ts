import Koa from 'koa';
//middlewares
import bodyParser from 'koa-bodyparser';
import { logger } from './middlewares/logger';
import { XResponseTime } from './middlewares/responseTime';
import { unknownEndpoint } from './middlewares/unknowEndpoint';
//routers
import myRouter from './controllers/template';


const app = new Koa();

app.use(logger);
app.use(XResponseTime);
app.use(bodyParser());

app.use(myRouter.routes());

app.use(unknownEndpoint)


export default app