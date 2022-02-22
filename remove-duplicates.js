function removeDuplicates(arr){
    const map ={};
    let result;
    arr.forEach((element) => {
        if(!map[element]){
            map[element] = element 
        }
    });
    result= Object.values(map)
    return result;
}


console.log(removeDuplicates([1,1,2,2,4,3,4,4,56,7,8,9,10]))