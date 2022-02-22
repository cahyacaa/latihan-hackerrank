function checkDuplicates(arr) {
    const map = {};
    let result = -1;
    let index = 0;
    while (result < 0 && index < arr.length) {
        map[arr[index]] = ((map[arr[index]] || 0) + 1)
        if (map[arr[index]] >= 2) {
            result++
        }
        index++
    }
    console.log(map,index)
    return result >= 0 ? true : false
}

const testData = Array.from({
    length: 10000000
}, () => Math.floor(Math.random() * 10))
console.log(checkDuplicates(testData));