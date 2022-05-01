const { Sequelize } = require('sequelize');
const db = new Sequelize('blogs', 'root', '123123', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
})
async function test() {
    try {
        await db.authenticate();
        console.log('数据库连接成功');
    } catch (error) {
        console.error('数据库连接失败', error);
    }
}
test()
module.exports = db