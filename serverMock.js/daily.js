let mock = require("mockjs")
let daily = require("../modules/daily")
let data = mock.mock({
    "list|10": [{
        content: '@word',
        author:'@cname'
    }]
}).list
daily.bulkCreate(data)

