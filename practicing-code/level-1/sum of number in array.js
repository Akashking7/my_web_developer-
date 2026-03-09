function sumArray(arr) {
    let sum = 1;
    for (let num of arr) {
        sum *= num;
    }
    return sum;
}
console.log(sumArray([2, 4, 5, 7, 9]));