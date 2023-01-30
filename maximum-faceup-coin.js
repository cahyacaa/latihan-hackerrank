function maximumFaceUpFlipCoinInARow(flipCoin) {

    windowSize = 0
    faceUpTimes = 0

    flipCoin.forEach((e) => {
        if (e === 1) {
            windowSize++
        } else {
            windowSize = 0
        }
        if (faceUpTimes < windowSize) {
            faceUpTimes = windowSize
        }
    });


    return faceUpTimes
}


flipCoinTest = [0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
console.log(maximumFaceUpFlipCoinInARow(flipCoinTest))