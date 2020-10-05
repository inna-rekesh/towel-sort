// You should implement your task here.
module.exports = function towelSort(matrix) {
    if(!matrix) {
        return []
    }
    return matrix.map((item, index) => {
        if (index % 2 === 0 || index === 0) {
            return item
        }
        return item.reverse()
    }).reduce((acc, val) => acc.concat(val), [])
}

