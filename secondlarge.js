array1 =  [12, 16, 1, 5]


function largestElement(array){

    largestE = array.reduce((acc,currentValue) => currentValue > acc ? currentValue : acc )

    return largestE
}


console.log(largestElement(array1))