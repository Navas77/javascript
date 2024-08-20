function sortArray (inputArray){
    let non_zeroArray = []
    let zero_Array = []
    inputArray.map(item => {
        item != 0 ? non_zeroArray.push(item) : zero_Array.push(item)

});


return non_zeroArray.concat(zero_Array)

}
console.log(
    sortArray([32, 0, 12, 78, 0, 56, 0, 87, 0])
  )
