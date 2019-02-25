const Koa = require('koa')

// const loggerGenerator = require('./middleware/logger-generator')
// const convert = require('koa-convert')
const loggerAsync = require('./middleware/logger-async')

const app = new Koa()
// app.use(convert(loggerGenerator()))

app.use(loggerAsync())

app.use(async ctx => {
  ctx.body = 'hello koa2222222'
})

app.listen(3000)

console.log('[demo] start-quick is starting at port 3000')
