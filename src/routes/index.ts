import fs from 'fs'
import path from 'path'
import type Koa from 'koa'

export const autoRouter = async (app: Koa) => {
    const dir = path.join(__dirname)
    const fileList = fs.readdirSync(dir)

    const filesToImport = fileList.filter((file) => {
        return fs.statSync(path.join(dir, file)).isFile() && file !== 'index.ts'
    })

    if (filesToImport.length > 0) {
        filesToImport.forEach(async (file) => {
            const module = await import(path.join(dir, file))
            const route = module.default
            if (route && typeof route.routes === 'function') {
                app.use(route.routes()).use(route.allowedMethods())
            }
        })
    }
}
