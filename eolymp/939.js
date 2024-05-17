function sumDigitsSquared() {
    var number = parseInt(prompt("Enter a number:"));
    var numberString = number.toString();
    var sum = 0;

    for (var i = 0; i < numberString.length; i++) {
        sum += parseInt(numberString[i]);
    }
    var result = sum * sum;
    alert("The sum of digits squared is: " + result);
}