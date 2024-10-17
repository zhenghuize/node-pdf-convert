import Router from 'koa-router'
import { Context } from 'koa'
import swaggerJSDoc from '../middlewares/swagger/swagger.conf'
const routerInit = new Router()

routerInit.get('/docs', (ctx: Context) => {
    console.log('swaggerJSDoc', swaggerJSDoc)
    ctx.body = swaggerJSDoc
})
export default routerInit
