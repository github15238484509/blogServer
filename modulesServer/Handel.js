const { setErrorCode, setRightCode } = require("./sendStaus")

exports.errorHandel = function (callback) {
    return async (req, res, next) => {
        try {
            let data = await callback(req, res, next)
            res.send(setRightCode(data))
        } catch (error) {
            console.log(error);
            res.send(setErrorCode(0, error.message))
        }
    }
}