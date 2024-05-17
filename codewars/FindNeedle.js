function findNeedle(haystack) {
    let index = -1;
    for (let i = 0; i < haystack.length; i++){
        if (haystack[i] === "needle") {
            index = i;
            break;
        }
    }
    if (index !== -1) {
        return "found the needle at position: " + " " + index;
    } else {
        return "there is no needle";
    }
}
const arr = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'];
console.log(findNeedle(arr));