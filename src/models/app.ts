import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    //标题
    // title: { type: String },
    // //简介
    // introduction: { type: String },
    // //封面
    // cover: { type: String },
    // //内容(markdown)
    // body: { type: String },
    // //html
    // content: { type: String },
    // //所含标签
    // tags: { type: Array },
    // //标签id
    // tagid: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Tag' }],
    // //更新日期
    // date: { type: String },
    // //点击量
    // click: { type: Number },
    // //评论数量
    // comment: { type: String },
    // //作者
    // author: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
    name: { type: String },
    age: { type: Number }
})
//导出model模块
export const User = mongoose.model('User', UserSchema)
