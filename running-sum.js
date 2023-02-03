/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let tempSum = 0
    return nums.map(e => {
        tempSum += e
        return tempSum
    })
};


console.log(runningSum([1, 2, 3, 4]))