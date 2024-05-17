function Factorial() {
    var number = parseInt(prompt("Enter a number between 0 and 20:"));

    if (number >= 0 && number <= 20) {
        var factorial = 1;

        for (var i = 1; i <= number; i++) {
            factorial *= i;
        }
        alert(factorial);
    } else {
        alert("Please enter a number between 0 and 20.");
    }
}