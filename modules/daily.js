let db = require("./db")
let { DataTypes } = require("sequelize")
let daily = db.define("daily", {
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    author:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = daily