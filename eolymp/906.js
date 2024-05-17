function compOfNumbers() {
    var number = Math.abs(parseInt(prompt("Enter a number: ")))
    console.log(number)
    if (number > 999 || number < 100) {
        console.log("Please enter a valid three-digit number.");
    } else {
       var digit1 = Math.floor(number/100);
       var digit2 = Math.floor((number % 100) / 10);
       var digit3 = Math.floor(number % 10);
       var result = digit1 * digit2 * digit3
       document.getElementById('result').innerHTML = `<p>${result}</p>`
    }
}