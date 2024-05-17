function Quadratic() {
    var a = parseFloat(prompt("Enter a:"));
    var b = parseFloat(prompt("Enter b:"));
    var c = parseFloat(prompt("Enter c:"));

    var discriminant = b * b - 4 * a * c;
    var x1, x2;

    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        alert("Two roots: x1 = " + x1 + ", x2 = " + x2);
    } else if (discriminant == 0) {
        x1 = -b / (2 * a);
        alert("One root: x = " + x1);
    } else {
        alert("No roots");
    }
}