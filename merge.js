

let arr = [1, 2, 3, 4, 5, 6];
let reversedArr = [...arr].reverse();
let res = JSON.stringify(arr) === JSON.stringify(reversedArr) ? "Palindrome" : "Not Palindrome";
console.log(res);

  