function squareSum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]**2;
    }
    return sum;
}
const arr = [1,2,2];
console.log(squareSum(arr));