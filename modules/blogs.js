let db = require("./db")
const { DataTypes } = require("sequelize")
let blogs = db.define("Blogs", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    // tag: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     comment: '分类名称的id'
    // },
}, {
    paranoid: true
})
module.exports = blogs