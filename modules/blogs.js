let db = require("./db")
const { DataTypes } = require("sequelize")
let tag = require("./tag")
let blogs = db.define("Blogs", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    tags_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
          // 这是对另一个模型的参考
          model: tag,
          // 这是引用模型的列名
          key: 'id',
        }
      },
}, {
    paranoid: true
})
module.exports = blogs