function digitize(n) {
    const digitsArray = String(n).split('').map(Number);
    const reversedArray = digitsArray.reverse();
    return reversedArray;
}
console.log(digitize(35231));  