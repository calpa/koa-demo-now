const Koa = require("koa");

const app = new Koa();

// X-response-time

app.use(async (ctx, next) => {
  const start = Date.now(); // 1
  await next(); // 2
  const ms = Date.now() - start; // 8
  ctx.set("X-Response-Time", `${ms}ms`); // 9
});

// logger

app.use(async (ctx, next) => {
  const start = Date.now(); // 3
  await next(); // 4
  const ms = Date.now() - start; // 6
  console.log(`${ctx.method} ${ctx.url} - ${ms}`); // 7
});

app.use(async ctx => {
  ctx.body = "Hello from koa.js!"; // 5
});

// app.listen(3000);

module.exports = app.callback();
