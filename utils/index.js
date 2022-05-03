exports.filterRight = (inc, data) => {
    let obj = {}
    for (const key in data) {
        if (inc.includes(key)) {
            let result = data[key].trim()
            if (result) {
                obj[key] = result
            }
        }
    }
    return obj
}