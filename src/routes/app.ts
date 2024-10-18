import Router from 'koa-router'
import AppController from '../controllers/app'

const routerInit = new Router({ prefix: '/v1/app' })

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
 *   AppUser:
 *     properties:
 *       name:
 *         type: string
 *         required: true
 *         title: 姓名
 *       age:
 *         type: number
 *         title: 年龄
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
routerInit.post('/list', AppController.getAppList)

/**
 * @swagger
 * /v1/app/create:
 *   post:
 *     description: 保存用户信息
 *     tags: [子应用模块]
 *     produces:
 *       - application/json
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "保存的参数"
 *       schema:
 *         $ref: "#/definitions/AppUser"
 *     responses:
 *       200:
 *         description: 获取用户信息成功
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             age:
 *               type: number
 *
 *
 */
routerInit.post('/create', AppController.setUserInfo)

export default routerInit
