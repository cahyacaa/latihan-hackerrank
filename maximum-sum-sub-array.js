/*
https://dev.to/procode/sliding-window-technique-from-o-n-to-o-n-3la3
*/
function maxSumSubArray(arr) {
    let maxSum = 0; //to keep track of maximum sum.
    let sumOfWindow = 0; //to keep track of sum of the window.
    let windowSize = 0;

    for (let i = 0; i < arr.length + 1; i++) {
        if (windowSize == 3) {
            //storing the maximum sum
            maxSum = Math.max(maxSum, sumOfWindow);
            //deleting the end element of the window
            sumOfWindow = sumOfWindow - arr[i - 3];
            windowSize--;
        }

        //adding elements to the window.
        sumOfWindow = sumOfWindow + arr[i];
        windowSize++;

    }
    return maxSum;
}



function maxSumSubArray2(arr,size) {
    let maxSum = 0;
    let tempSum = 0;
    let windowSize = 0;
    if(size===1) return Math.max(...arr);

    arr.forEach((e, i) => {
        if (windowSize >= size) {
            tempSum += arr[i]
            tempSum -= arr[i - size]
            maxSum = Math.max(maxSum, tempSum);

        } else {
            tempSum += arr[i]
            windowSize++
        }

    });
    return maxSum;
}
const arr = [1, 2, 3, 4, 3, 2, 3, 2, 1, 6, 6]
console.log("The maximum sum is: " + maxSumSubArray2(arr,4));