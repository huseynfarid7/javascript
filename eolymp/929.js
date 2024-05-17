function Parallelogram() {
    var side1 = parseFloat(prompt("Enter side 1:"));
    var side2 = parseFloat(prompt("Enter side 2:"));
    var side3 = parseFloat(prompt("Enter side 3:"));
    var side4 = parseFloat(prompt("Enter side 4:"));

    if ((side1 === side3 && side2 === side4) || (side1 === side4 && side2 === side3)) {
        alert("Yes");
    } else {
        alert("No");
    }
}