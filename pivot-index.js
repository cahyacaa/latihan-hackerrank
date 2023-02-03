/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let leftSum = rightSum = 0;
    nums.forEach(n => rightSum += n);

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        rightSum -= current;

        if (leftSum === rightSum) return i;

        leftSum += current;
    }   
    return -1;

};

const sumWithInitial = (number) => {
    if (number.length === 0) return 0
    return number.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );

}
console.log(pivotIndex([1,-1,4]))