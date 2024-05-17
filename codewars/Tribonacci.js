function tribonacci(signature,n){
    if (n === 0){
        return [];
    }
    let result = signature.slice(0,n);
    for (let i = 3; i < n; i++){
        let plus = result[i-1] + result[i-2] + result[i-3];
        result.push(plus);
    }
    return result;
}
let signature = [0,0,1];
let n = 10;
console.log(tribonacci(signature,n));