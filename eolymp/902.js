function Score() {
    var score = parseInt(document.getElementById('score').value);

    if (score >= 1 && score <= 12) {
        if (score >= 1 && score <= 3) {
            document.getElementById('result').innerHTML = "Initial";
        } else if (score >= 4 && score <= 6) {
            document.getElementById('result').innerHTML = "Average";
        } else if (score >= 7 && score <= 9) {
            document.getElementById('result').innerHTML = "Sufficient";
        } else if (score >= 10 && score <= 12) {
            document.getElementById('result').innerHTML = "High";
        }
    } else {
        document.getElementById('result').innerHTML = "Enter a score between 1 and 12.";
    }
}