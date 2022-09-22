import * as Router from "koa-router";

//模板controller

const myRouter = new Router()

myRouter.get('/', (ctx, next) => {
  ctx.body = 'Hello World';
})

export default myRouter