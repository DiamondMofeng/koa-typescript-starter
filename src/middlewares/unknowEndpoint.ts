import type { Middleware } from "koa"

export const unknownEndpoint: Middleware = (ctx, next) => {
  ctx.status = 404
  ctx.body = { error: 'unknown endpoint' }
}