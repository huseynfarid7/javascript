function compOfNumbers() {
    var number = Math.abs(parseInt(prompt("Enter a number: ")))
    console.log(number)
    if (number > 999 || number < 100) {
        console.log("Please enter a valid three-digit number.");
    } else {
        var firstDigit = Math.floor(number / 100);
        var lastDigit = number % 10;

        if (firstDigit>lastDigit) {
            document.getElementById('result').innerHTML = `<p>${firstDigit}</p>`;
        } else if (lastDigit>firstDigit) {
            document.getElementById('result').innerHTML = `<p>${lastDigit}</p>`;
        } else {
            document.getElementById('result').innerHTML = "<p> = </p>";
        }
    }
}