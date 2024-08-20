// if(condition)
//     {
    
//     }
//     else{
    
//     }
    
//     if(){
    
//     }
//      else if(){
    
//     }
//     else{
    
//     }
    
//     switch()
//     {
//         case 1()
//         break;
//         case 2()
//         break;
//         case 3()
//         break;
//         default()
//     }
    
//     for(inizilation; condition;increement ){
        
    
//     }
    
//     while(condition){
//       textexpression
//     }
//     inizilation
    
//     do{
//        inizilation
//     }
//     while(condition){
    
//     }
    
//     // function-
//     // function
//     // expression function/anonymous function
//     // arrow function
    
//     // callback function
    
//     // normal
    
//     // function fun_name(){
    
//     // }
//     // fun_name()
    
//     function hello(){
//         console.log("hello good morning")
//     }
//     hello()
    
    
//     // passing parameters
//     function sum(a,b){  //paranters
//         return a+b
        
//     }
//     let c=sum(7,8)//arguments
//     console.log(c);
    
    
//     //function expression -oru function ennai oru variable lottu assign chaiuya
    
//     let b=function(){
//         console.log("dssd");
//     }
//     b()
    
    
//     // arrow-es6 -mpodern js-function
    
//     let arrow=()=>{
//     console.log("hello");
//     }
//     arrow()
    
//     // passing parameters to arrow functoion
    
//     let sub=(d,e)=>{
//     return d-e
//     }
//     let s=sub(9,7)
//     console.log(s);
    
    
//     // 0r
    
//     const dd=(f,g)=>{return f+g }
//     let t=dd(4,5)
//     console.log(t);
    
//     c
//     //call back-oru fun vere funcilek argument ayiot pass cheyimbol adhine namalk call back fun en parayunath
    
//     function greet(name,cb){
//         console.log("good morning"+name);
//         cb();
//     }
    
    
//     // 
//     function hello(){
//         console.log("hello everyone");
//     }
    
    
//     greet("freena",hello)








// functions

// normal function
// function expression or anonymous function
// arrow function
// callback function
// higer order function


// js 

function hello(){
    console.log("hi");
    
}
hello()

// passing parameters

function sum(a,b){   //parameters
return a+b

}

console.log(sum(7,8));  //arguments


// function expression or anonymous function

const add=function (){
console.log("hello everyone");

}

add()


// arrow function

// =>

    const hi=()=>{
        console.log("hey");
        
    }

    hi()

    // or

    const sub=(x,y)=>{
       console.log(x-y);
       
    }
    sub(6,7)


    const fun=((a,b)=>a+b)
    console.log(fun(6,8));
    

    // callback function

    function helloo(name,cb){
        console.log("hi im "+ name);
        cb()
        

    }

    function greet(){
        console.log("good afternoon");
        
    }

    helloo("freena",greet)


    // higher 