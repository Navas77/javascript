let a=[1,2,3,4,5,6]
const b=a.reduce((current,accumulater)=>{
    return accumulater + current;
})
console.log(b);