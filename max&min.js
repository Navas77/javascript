function findMinMax() {
    let Arr = [5,6,7,2,3,1]

    const minValue = Math.min(...Arr)
    const maxValue = Math.max(...Arr)

    console.log("Minimum element is:"+ minValue)
    console.log("Maximum element is:"+ maxValue)

}
findMinMax()


