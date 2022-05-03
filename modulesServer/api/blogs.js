let express = require("express")
const { errorHandel: Handel } = require("../Handel")
let router = express.Router()
let { getAllBlogs, getOne, deleteOne, putOne, addOne } = require("../server/blogs")

//增加一个博客
router.post("/", Handel(async function (req, res) {
    let result = await addOne(req.body)
    return result
}))
//获取所有的博客
router.get("/", Handel(async function (req, res) {
    let params = {
        page: req.query.page || 1,
        limit: req.query.limit || 10
    }
    let { count, rows } = await getAllBlogs(params)
    return {
        count,
        rows
    }
}))

//根据id获取单个博客
router.get("/:id", Handel(async function (req, res) {
    let result = await getOne(1 * req.params.id)
    return {
        result
    }
}))

//根据id获取删除一个博客
router.delete("/:id", Handel(async function (req, res) {
    let result = await deleteOne(req.params.id)
    return {
        result
    }
}))

//修改一个博客
router.put("/:id", Handel(async (req, res) => {
    let result = await putOne(req.params.id, req.body)
    return {
        result
    }
}))



module.exports = router