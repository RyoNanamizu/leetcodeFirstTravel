/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let flag
    const min = Math.pow(-2, 31)
    const max = Math.pow(2, 31) - 1
    if (x < 0){
        flag = true
        x = 0 - x
    }
    let count = 0
    while (x) {
        count *= 10
        count += x % 10
        x = Math.ceil((x - x % 10)/10)
    }
    if (flag) {
        count = 0 - count
    }
    if (count < min || count > max) {
        return 0
    }
    return count
};