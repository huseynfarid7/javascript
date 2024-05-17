function Sum() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);

    var squareOfA = a * a;
    var squareOfB = b * b;
    var sum = squareOfA + squareOfB;

    document.getElementById('result').innerHTML = "The sum of squares is: " + sum;
}