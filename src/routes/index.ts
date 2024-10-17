import Router from 'koa-router'
import { Context } from 'koa'
const RouterInit = new Router()

/**
 * @swagger
 * definitions:
 *   Success:
 *     properties:
 *       code:
 *         type: integer
 *         title: 成功的状态码
 *       msg:
 *         type: string
 *         title: 提示语
 */
/**
 * @swagger
 * definitions:
 *   AppModel:
 *     properties:
 *       appName:
 *         type: string
 *         title: 应用名
 *       appId:
 *         type: string
 *         title: 应用ID
 *       appSecret:
 *         type: string
 *         title: 应用secret
 *       id:
 *         type: number
 *         title: id
 *       remark:
 *         type: string
 *         title: 备注
 */
/**
 * @swagger
 * definitions:
 *   App:
 *     properties:
 *       name:
 *         type: string
 *         required: true
 *         title: 应用名
 *       pageNo:
 *         type: number
 *         title: 当前页
 *       pageSize:
 *         type: number
 *         title: 每页数量
 *         default: 10
 */
/**
 * @swagger
 * definitions:
 *   AddUser:
 *     properties:
 *       name:
 *         type: string
 *         title: 应用名
 *       appId:
 *         type: string
 *         title: 应用id
 *       appSecret:
 *         type: string
 *         title: secret
 *       remak:
 *         type: string
 *         title: 备注
 */
/**
 * @swagger
 * /v1/app/list:
 *   post:
 *     description: 获取子应用列表
 *     tags: [子应用模块]
 *     produces:
 *       - application/json
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "查询参数"
 *       schema:
 *         $ref: "#/definitions/App"
 *     responses:
 *       200:
 *         description: 获取子应用成功
 *         schema:
 *           type: object
 *           properties:
 *             total:
 *               type: number
 *             rows:
 *               type: array
 *               items:
 *                   $ref: '#/definitions/AppModel'
 *
 *
 */
RouterInit.get('/', async (ctx: Context) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
})

RouterInit.get('/string', async (ctx: Context) => {
    ctx.body = {
        message: 'Hello, this is your data!',
        status: 'success'
    }
    ctx.type = 'application/json' // 设置响应类型为JSON
})

/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: 创建用户
 *     description: 提交用户信息以创建新用户
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: '张三'
 *               email:
 *                 type: string
 *                 example: 'zhangsan@example.com'
 *               password:
 *                 type: string
 *                 example: 'password123'
 *     responses:
 *       201:
 *         description: 用户创建成功
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
 *       400:
 *         description: 请求数据不正确
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: 服务器错误
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

RouterInit.get('/json', async (ctx: Context) => {
    ctx.body = {
        title: 'koa2 json',
        name: 'a'
    }
})

export default RouterInit
