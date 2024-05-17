function Digits() {
    var number = parseInt(prompt("Enter a number:"))
    
    var numberString = Math.abs(number).toString();

    for (var i = 0; i < numberString.length; i++) {
        document.getElementById('result').innerHTML += numberString[i] + "<br>";
    }
}