function SumOfPositives(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i]
        }
    }
    return sum;
}
const arr = [1,-4,7,12];
console.log(SumOfPositives(arr));