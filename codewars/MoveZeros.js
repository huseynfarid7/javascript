function moveZeros(arr) {
    let zeroCount = 0;

    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
            arr.splice(i, 1);
            i--; 
        }
    }

  
    for (let i = 0; i < zeroCount; i++) {
        arr.push(0);
    }

    return arr;
}

// Testing
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // Output: [false, 1, 1, 2, 1, 3, "a", 0, 0]