function migratoryBirds(arr) {
    const res ={};
    let count = 0;
    let keys =0
    arr.forEach(element => {
       res[element]= ((res[element]||0)+1)
    });
    Object.keys(res).forEach((key,n)=>{
        if(res[key]>count){
            count=res[key]
            keys=key
            console.log(count)
        }
    })
    console.log(keys)
}

migratoryBirds([1,2,3,4,2,2,2,3,3,4,4,6,6,6,6])