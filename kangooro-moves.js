'use strict';


/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    const j = (x1-x2)%(v2-v1);
    if(j===0 && v1>v2){
        return "YES"
    }else{
        return "No"
    }
}

const data = kangaroo(0,3,4,2);
console.log(data)
