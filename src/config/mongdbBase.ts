// db.js
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/node_test', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('打开 mongodb 连接')
    } catch (error) {
        console.log('err:' + error)
        process.exit(1) // 连接失败时退出进程
    }
}

module.exports = connectDB
