let Blogs = require("../../modules/blogs")
let tag = require("../../modules/tag")
let Sequelize = require("sequelize")
const { filterRight } = require("../../utils")

exports.getAllBlogs = async (params) => {
    return await Blogs.findAndCountAll({
        offset: params.limit * (params.page - 1),
        limit: params.limit * 1,
        attributes: [
            "title",
            "content",
            "tags_id",
            Sequelize.col('name')
        ],
        include: [
            {
                model: tag,
                required: true,
                attributes: []
            }
        ],
        raw: true
    })
}
exports.getOne = async (id) => {
    let result = await Blogs.findByPk(id, {
        attributes: [
            "title",
            "content",
            "tags_id",
            "id",
            Sequelize.col('name')
        ],
        include: [
            {
                model: tag,
                required: true,
                attributes: []
            }
        ],
        raw: true
    })
    return result
}

exports.deleteOne = async (id) => {
    try {
        let result = await Blogs.findByPk(id)
        await result.destroy()
        return '删除成功'
    } catch (error) {
        throw new Error('此id已经删除了')
    }
}

exports.putOne = async (id, option) => {
    let include = ["title", "content", "tags_id"]
    let info = filterRight(include, option)
    try {
        let result = await Blogs.findByPk(id);
        if (result) {
            for (const key in info) {
                if (Object.hasOwnProperty.call(info, key)) {
                    result[key] = info[key];
                }
            }
            await result.save()
            return '修改成功'
        } else {
            return '修改失败，此博客没有'
        }
    } catch (error) {
        throw new Error(error.message)
    }
}
exports.addOne = async (option) => {
    let include = ["title", "content", "tags_id"]
    let info = filterRight(include, option)
    console.log(info);
    try {
        let result = await Blogs.create(info, {
            attributes: include
        });
        if (result) {
            return info = filterRight(include, result.toJSON())
        } else {
            return '修改失败，此博客没有'
        }
    } catch (error) {
        throw new Error(error.message)
    }
}