const db = require("./db")
let blogs = require("./blogs")
let tag = require("./tag")
let daily = require("./daily")
let comment = require("./comment")
blogs.belongsTo(tag);
tag.hasMany(blogs);

async function test() {
    try {
        await db.sync({
            alert: true
        })
        console.log('同步表成功');
    } catch (error) {
        console.error('同步表失败', error);
    }
}
test()