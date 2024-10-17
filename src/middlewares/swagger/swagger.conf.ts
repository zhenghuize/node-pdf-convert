import path from 'path'
import swaggerJSDoc from 'swagger-jsdoc'
import AddressIp from 'ip'

const swaggerDefinition = {
    info: {
        // API informations (required)
        title: '账号权限系统', // Title (required)
        version: '1.0.0', // Version (required)
        description: '管理接入迅雷sso系统的账号和权限' // Description (optional)
    },
    host: `http://${AddressIp.address()}:${3000}`, // Host (optional)
    basePath: '/' // Base path (optional)
}
// console.log('first', path.join(__dirname, '../../routes/*.ts'))
const options = {
    swaggerDefinition,
    apis: [path.join(__dirname, '../../routes/*.ts')] // all api
}

const jsonSpc = swaggerJSDoc(options)
export default jsonSpc
