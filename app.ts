import Koa, { Context, Next } from 'koa'

import { koaSwagger } from 'koa2-swagger-ui'
import AddressIp from 'ip'

import { PORT } from './src/config/constant'

const views = require('koa-views')
const json = require('koa-json')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

import { autoRouter } from './src/routes/index'

const app = new Koa()

app.use(async (ctx: Context, next: Next) => {
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:3001') // 允许的源
    ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS') // 允许的方法
    ctx.set('Access-Control-Allow-Headers', 'Content-Type') // 允许的请求头

    // 处理预检请求
    if (ctx.method === 'OPTIONS') {
        ctx.status = 204 // 预检请求的响应
        return
    }

    await next() // 继续处理其他请求
})

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
app.use(logger())
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
app.listen(PORT, () => {
    console.log(`Server is running at http://${AddressIp.address()}:${PORT}`)
})

module.exports = app
