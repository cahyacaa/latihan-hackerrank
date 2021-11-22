function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let appleSum, orangesSum;
    appleSum = orangesSum = 0
    apples.map(e => {
        const g = a + e
        if (g >= s && g <= t) {
            appleSum += 1
        }
        return appleSum
    })
    oranges.map(e => {
        const g = b + e
        if (g >= s && g <= t) orangesSum += 1
        return orangesSum
    })
    console.log(appleSum)
    console.log(orangesSum)
}
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])