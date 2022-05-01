let mock = require("mockjs")
let comment = require("../modules/comment")
let data = mock.mock({
    "list|10": [{
        "userName": '@word',
        conentText: "@paragraph()"
    }]
}).list
comment.bulkCreate(data)

