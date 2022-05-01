let db = require("./db")
let { DataTypes } = require("sequelize")

let comment = db.define("comments", {
    userName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    conentText:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    type_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        comment:'-1为自己的博客评论，其他的对应为博客的id'
    }
})

module.exports = comment