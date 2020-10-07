// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length === 0) return []
    let finishArr = []
    for (let i = 0; matrix.length > i; i++) {
        if (i % 2 !== 1) {
            for (let y = 0; matrix[i].length > y; y++) {
                finishArr.push(matrix[i][y])
            }
        } else {
            for (let y = matrix[i].length - 1; 0 <= y; y--) {
                finishArr.push(matrix[i][y])
            }
        }

    }

    return finishArr
}