function eachCons(array,n){
    let result = [];
    for (let i = 0; i <= array.length - n; i++){
        let x = array.slice(i,i+n);
        result.push(x);
    }
    return result;
}
console.log(eachCons([1,2,3,4],2));
console.log(eachCons([1,2,3,4],3));