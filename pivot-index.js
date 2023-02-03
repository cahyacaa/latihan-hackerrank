/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let rightSum = 0
    let leftSum = 0
    let pivotI = -1
    let count = 0
    rightSum = sumWithInitial(nums)

    nums.forEach((e, i) => {
        rightSum -= e
        if (rightSum === leftSum) {
            if (count < 1) {
                pivotI = i
            }
            count++
        }
        leftSum += e
    })
    return pivotI

};

const sumWithInitial = (number) => {
    if (number.length === 0) return 0
    return number.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );

}
console.log(pivotIndex([-1,-1,0,0,-1,-1]))