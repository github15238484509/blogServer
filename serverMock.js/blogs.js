let mock = require("mockjs")
let blogs = require("../modules/blogs")
let data = mock.mock({
    "list|10": [{
        title: '@word',
        content: "@paragraph",
        tags_id: '@increment'
    }]
}).list
console.log(data);
blogs.bulkCreate(data)
blogs.bulkCreate(data)
blogs.bulkCreate(data)
blogs.bulkCreate(data)