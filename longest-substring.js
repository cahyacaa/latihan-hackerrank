/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let tempNonRepeatingChar = ""
    let count=0
    let l = {}
    let i = 0

    for (const char of s) {
        if (tempNonRepeatingChar.indexOf(char) < 0) {
            tempNonRepeatingChar += char
            l[char] = i
        } else {
            tempNonRepeatingChar = s.slice(l[char] + 1, i)
            l[char] = i
            tempNonRepeatingChar += char
        }
        count = Math.max(count, tempNonRepeatingChar.length)
        i++
    }

    return count
};



console.log(lengthOfLongestSubstring("abcabcbb"))