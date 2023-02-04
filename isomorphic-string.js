/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let sMap = {}
    let tMap = {}

    let isNot = true

    if (s.length != t.length) {
        return false
    }

    for (let index = 0; index < s.length; index++) {
        if (!isNot) {
            continue
        }

        if (!sMap[s[index]]) {
            sMap[s[index]] = t[index]
        } else {
            if (sMap[s[index]] !== t[index]) {
                isNot = false
            }
        }
        if (!tMap[t[index]]) {
            tMap[t[index]] = s[index]
        } else {
            if (tMap[t[index]] !== s[index]) {
                isNot = false
            }
        }
    }

    return isNot
};


console.log(isIsomorphic("paper", "titlA"))