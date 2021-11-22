const index=[]
function minimumDistances(a) {
    // Write your code here
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a.length;j++){
            if(i<j&&i!=j){
                if(a[i]===a[j]){
                    index.push(Math.abs (i-j))
                }
            }
        }
    }
    if(index.length===0){
        return -1
    }
    return Math.min(...index);
}

const result = minimumDistances([7, 1, 3, 4, 8, 0])
console.log(result)