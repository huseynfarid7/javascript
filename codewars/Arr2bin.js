function arr2bin(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] === "number"){
            sum += arr[i];
        }
    }
    return sum.toString(2);
}
const arr = [1, 2, 3, 'a', 4, 5, 'b'];
const result = arr2bin(arr);
console.log("Binary sum:" + " " + result)