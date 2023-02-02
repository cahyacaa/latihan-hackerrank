/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stackOfCloseParentheses = []
    for (const char of s) {
        if (char == "{") {
            stackOfCloseParentheses.push("}")
        } else if (char == "[") {
            stackOfCloseParentheses.push("]")
        } else if (char == '(') {
            stackOfCloseParentheses.push(")")
        } else { 
            if (stackOfCloseParentheses.pop() != char){
                return false
            }
        }

    };
    if( stackOfCloseParentheses.length >0){
        return false
    }
    return true
};

console.log(isValid("{}(){{}}{[]}{[[][]}"))