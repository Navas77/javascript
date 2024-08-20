function removeDuplicates(arr) {
    return[...new Set (arr) ]
}
let arrayWithDuplicates = [1,2,1,2,3,3,4,5];
let arrayWithoutDuplicates = removeDuplicates (arrayWithDuplicates);
console.log(arrayWithoutDuplicates);


