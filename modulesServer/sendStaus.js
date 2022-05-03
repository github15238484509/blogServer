exports.setRightCode = function (data, message = "") {
    return {
        code: 200,
        data: data,
        message
    }
}
exports.setErrorCode = function (code, message = "") {
    return {
        code,
        message,
        data: null,

    }
}
exports.error = function (req, res) {
    res.send(exports.setErrorCode(404, '文件不存在'))
}