// function myFirst() {
//     console.log("Hello");
//   }

const { rejects } = require("assert");
const { Console, error } = require("console");
const { promises } = require("dns");
const { resolve } = require("path");

//   function mySecond() {
//     console.log("Goodbye");                                          //Regular function
//   }

//   myFirst();
//   mySecond();


// function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }

//   let result = myCalculator(5, 5);                                        //Regular function
//   console.log(result);

// function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     console.log(sum);
//   }
//   myCalculator(5, 5);


// function greet(mydir){                                                //Call Back function
//   console.log("Hello")
//   mydir()
// }
// function SayBye(){
//   console.log("Bye")
// }

// greet(SayBye)


// function Greet(name,callback){
//   console.log("Hello  " + name)
//   callback()
// }

// function SayBye(){
//     console.log("Bye")
// }

// Greet("Binod",SayBye)



// function Calc(a,b,callback){
//     console.log(a,b)
//     callback(a,b)
// }

// function add(a,b){
//    console.log(a+b);
// }

// function sub(a,b){
//     console.log(a-b);
// }

// Calc(10,5,add)
// Calc(10,5,sub)



// function calc(a, b, callback) {
//     return callback(a, b);
// }
// function add(x, y) {
//     return x + y;
// }
// function mul(x, y) {
//     return x * y;
// }
// console.log(calc(5, 3, add));
// console.log(calc(5, 3, mul));



// function calc(a,b,mydir){
//    console.log(a,b)
//    mydir(a,b)
// }
// function add(a,b){
//     console.log(a+b)
// }
// function mul(a,b){
//     console.log(a*b)
// }
// calc(10,5,add)
// calc(10,5,mul)



// let p=new Promise((resolve,rejects)=>{
//     let num=2+2;
//  setTimeout(()=>{
//     if(num==4){
//         resolve("success")                                            //promise
//     }
//     else{
//         rejects("rejected")
//     }
//  },2000);
// console.log("Hello")
// })
// p.then((Message)=>
// {
//     console.log(Message)
//     console.log("Successfully resolved")
// }
// ).catch((error)=>{
//     console.log(error)
// })



// let prom = new Promise(function(resolve,reject){
//     let x=6
//     if (x==0){
//         resolve("Ok")
//     }
//     else{
//         reject("Error")
//     }
// });
// prom.then((message)=>
// {
//     console.log(message)
//     console.log("Successfully resolved")
// }

// ).
// catch((error)=>{
//     console.log("error")
// })


// let MyPromise = new Promise((resolve,rejects)=>{
//    let x=10;
//    if(x%2==1){
//        resolve("True")
//    }
//    else{
//       rejects("False")
//    }
// });
// MyPromise.then((message)=>{
//     console.log(message)
// }).
// catch((error)=>{
//     console.log(error)
// })

let MyPromise = new Promise((resolve, reject) => {
    let x = 10;

    setTimeout(function () {
        if (x % 2 === 0) {
            resolve("True");
        } else {
            reject("False");
        }
    }, 2000);

    console.log("Success")
});

MyPromise
    .then((message) => {
        console.log(message);
        console.log("Successfully running")

    })
    .catch((error) => {
        console.log(error);
    });


// let MyPromise = new Promise((rejects,resolve)=>{
//     let x=20;
//    setTimeout(function(){
//     if(x+5==35){
//        resolve("True")
//     }
//     else{
//        rejects("False")
//     }
//    },2000)
// });

// MyPromise.then((message)=>{
//     console.log(message)
// }).catch((error)=>{
//     console.error("Wrong message")
// console.log(error)
// })


// function Greet(callback){

//     console.log("Hello ")
//     callback()

//     setTimeout(

//         function SayBye(){
//             console.log("Bye")
//         }

//     ,2000)
// }
// Greet(SayBye)


// function doSomething()
// {
//     console.log("Jasaswee")
// }

// setTimeout(doSomething,2000)

async function myFunction() {
    return "Hello";
}
console.log(myFunction()
)
 