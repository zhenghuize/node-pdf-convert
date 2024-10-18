import { Context } from 'koa'
import Cors from 'koa2-cors'

export const corsHandler = {
    origin: function (ctx: Context) {
        return '*'
    },
    exposeHeaders: ['Authorization'],
    maxAge: 5 * 24 * 60 * 60,
    // credentials: true,
    allowMethods: ['GET', 'POST', 'OPTIONS', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Requested-With']
}

export const setCors = Cors(corsHandler)
