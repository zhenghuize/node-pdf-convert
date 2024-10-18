import Koa, { Context, Next } from 'koa'
import bodyparser from 'koa-bodyparser'
import json from 'koa-json'
import AddressIp from 'ip'

const views = require('koa-views')

import { koaSwagger } from 'koa2-swagger-ui'
import { loggerMiddleware } from './src/middlewares/logger'
import { setCors } from './src/middlewares/cors'
import { PORT } from './src/config/constant'
import { autoRouter } from './src/routes/index'

const connectDB = require('./src/config/mongdbBase')

const app = new Koa()

// app.use(async (ctx: Context, next: Next) => {
//     ctx.set('Access-Control-Allow-Origin', 'http://localhost:3001') // 允许的源
//     ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS') // 允许的方法
//     ctx.set('Access-Control-Allow-Headers', 'Content-Type') // 允许的请求头

//     // 处理预检请求
//     if (ctx.method === 'OPTIONS') {
//         ctx.status = 204 // 预检请求的响应
//         return
//     }

//     await next() // 继续处理其他请求
// })
connectDB()
app.use(
    koaSwagger({
        routePrefix: '/swagger',
        swaggerOptions: {
            url: '/docs'
        }
    })
)

// 中间件
app.use(
    bodyparser({
        enableTypes: ['json', 'form', 'text']
    })
)
app.use(json())
app.use(loggerMiddleware)
app.use(setCors)
app.use(require('koa-static')(__dirname + '/src/public'))

app.use(
    views(__dirname + '/src/views', {
        extension: 'pug'
    })
)

// 日志记录器
app.use(async (ctx: Context, next: Next) => {
    const start = new Date().getTime()
    await next()
    const ms = new Date().getTime() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 路由
autoRouter(app)

// error-handling
app.on('error', (err, ctx: Context) => {
    console.error('server error', err, ctx)
})

// 启动服务
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running at http://${AddressIp.address()}:${PORT}`)
})

module.exports = app
