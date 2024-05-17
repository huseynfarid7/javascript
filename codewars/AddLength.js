function addLength(str){
    let j = str.split(" ")
    let result = [];
    for (i of j){
        let words = i + " " + i.length;
        result.push(words);
    }
    return result;
}
console.log(addLength("apple ban"));
console.log(addLength("you will win"));