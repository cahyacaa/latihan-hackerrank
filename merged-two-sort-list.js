function mergeTwoList(list1, list2){
    list2.forEach(element => {
        list1.push(element);
    });
    list1.sort((a,b)=> a-b);
    return list1;
}


console.log(mergeTwoList([1,2,3],[1,3,4]))