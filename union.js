let a = [34, 35, 45, 48, 49];
let b = [48, 55];
let union = [...new Set([...a, ...b])];
console.log(union);