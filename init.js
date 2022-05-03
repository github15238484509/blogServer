let express = require("express")
let app = express()

app.use(express.json())
app.use(express.urlencoded())

app.use("/blogs", require("./modulesServer/api/blogs"))
app.use("/comment", require("./modulesServer/api/comment"))
app.use("/daily", require("./modulesServer/api/daily"))
app.use("/tag", require("./modulesServer/api/tag"))


app.use("*",require("./modulesServer/sendStaus").error)
app.listen(3000, () => {
    console.log("localhost:3000");
})