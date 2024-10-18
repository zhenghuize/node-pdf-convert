import { Context } from 'koa'
// import { SsoResult } from './../@types/sso'
// import AuthJwt from './../middlewares/jwt/auth'
// import AppService from '../services/app'
// import { createIdHash, createSecretHash } from './../utils/index'
// const { appModel, roleModel, menuModel } = require('../models/index')
const Sequelize = require('sequelize')
// const { Op } = Sequelize
// const sequelize = require('../config/sequelizeBase')
// const Joi = require('joi')
import Joi from 'joi'
import { User } from '../models/app'

export default class UserController {
    /**
     * 获取应用列表
     * @param {Context} ctx
     * @memberof UserController
     */
    public static async getAppList(ctx: Context) {
        const request: any = ctx.request.body
        // const userInfo: SsoResult = AuthJwt.verifyUserToken(ctx.header.authorization)
        const schema = Joi.object({
            username: Joi.string().empty(''),
            pageSize: Joi.number().required(),
            pageNo: Joi.number().required(),
            name: Joi.string().empty('')
        })
        try {
            await schema.validateAsync(request)
            // const appList = await AppService.findList(
            //     // userInfo.username,
            //     request.name,
            //     request.pageSize,
            //     request.pageNo
            // )
            ctx.status = 200
            ctx.body = ctx.body = {
                code: 0,
                msg: '查询列表成功',
                data: []
            }
        } catch (error: any) {
            console.log(error)
            ctx.status = 200
            ctx.body = {
                code: -1,
                msg: error.message || '查询失败'
            }
        }
    }
    /**
     * 添加用户信息
     * @param {Context} ctx
     * @memberof UserController
     */
    public static async setUserInfo(ctx: Context) {
        const request: any = ctx.request.body

        const schema = Joi.object({
            name: Joi.string().required(),
            age: Joi.alternatives().try(Joi.string(), Joi.number()).required()
        })
        try {
            await schema.validateAsync(request)
            const user = new User(ctx.request.body)
            await user.save()
            // const appList = await AppService.findList(
            //     // userInfo.username,
            //     request.name,
            //     request.pageSize,
            //     request.pageNo
            // )
            ctx.status = 200
            ctx.body = {
                code: 0,
                msg: '添加用户信息成功',
                data: '添加用户信息成功'
            }
        } catch (error: any) {
            console.log(error)
            ctx.status = 200
            ctx.body = {
                code: -1,
                msg: error.message || '查询失败'
            }
        }
    }
}
