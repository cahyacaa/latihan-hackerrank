function score(arr){
    let score =0
    arr.forEach(e=>{
        if(e%2===0){
            score++
        }else if(e%2!==0 && e!==5) score +=3
        else if(e===5) score +=5
    })
    return score
}


console.log(score([5,5,5]))