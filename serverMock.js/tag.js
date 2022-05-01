let mock = require("mockjs")
let tag = require("../modules/tag")
let data = mock.mock({
    "list|10": [{
        name: '@word',
    }]
}).list
tag.bulkCreate(data)

