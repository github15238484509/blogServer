let db = require("./db")
const { DataTypes } = require("sequelize")
let tags = db.define("tags", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '分类的名称'
    },
}, {
    paranoid: true
})
module.exports = tags