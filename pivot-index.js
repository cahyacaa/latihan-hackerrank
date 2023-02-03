/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let rightSum = 0
    let leftSum = 0
    let pivotI = 0
    let count = 0
    if (nums.length === 1) {
        pivotI = 0
        return pivotI
    }
    nums.forEach((_, i) => {
        leftSum = sumWithInitial(nums.slice(0, i))
        rightSum = sumWithInitial(nums.slice(-(nums.length - i) + 1))
        if (i === nums.length - 1) {
            rightSum = 0
        }
        if (leftSum === rightSum) {
            count++
            if (count < 2) {
                pivotI = i
            }
        }
    })
    return count == 0 ? -1 : pivotI

};

const sumWithInitial = (number) => {
    if (number.length === 0) return 0
    return number.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );

}
console.log(pivotIndex([0, 0, 0, 0]))