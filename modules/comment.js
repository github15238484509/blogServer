let db = require("./db")
let { DataTypes } = require("sequelize")

let comment = db.define("comment", {
    userName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    conent:{
        type:DataTypes.TEXT,
        allowNull:false
    },
})

module.exports = comment