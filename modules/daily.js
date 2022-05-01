let db = require("./db")
let { DataTypes } = require("sequelize")

let daily = db.define("daily", {
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '-1,为自己的留言,其他为对应博客的id'
    }
})

module.exports = daily