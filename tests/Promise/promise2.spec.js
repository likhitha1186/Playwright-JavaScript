
// let prom=new Promise((resolve,rejects)=>{
//     let num=10
//    setTimeout(function(){
//     if(num==11){
//         resolve(true)
//     }
//     else{
//         rejects(false)
//     }
//    },3000)
// });
// prom
// .then((message)=>{
//     console.log(message)
// })
// .catch((error)=>{
//     console.log(error)
// })





// function myCir(name){
//     console.log("Hii "+name)
// }
// function mydir(){
//     console.log("Hello Guys")                   //code which will execute after 2ms
// }
// myCir("john")
// setTimeout(mydir,2000)


// async function myFunction() {
//     return "Hello";
//   }
// console.log(myFunction())                                 //async await code using resolve

// function myFunction() {
//     return Promise.resolve("Hello");
//   }
//   console.log(myFunction())



// async function myDisplay() {
//     let prom = new Promise((resolve)=>{                                //async await code using promise
//         setTimeout(function(){resolve("How are you?")},2000)
//     });
//     console.log(await prom);
// }
// myDisplay();


// let n=40
// if(n>40){                                           //large num code
//     console.log("n is large")
// }
// else{
//     console.log("n is small")
// }


// let a= [1,2,3,4,5]
// for(let i=0;i<a.length;i++){
//     console.log(a[i])
// }


// for(let i=1;i<=10;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }


// for(let i=1;i<=10;i++){
//     if(i%2!=0){
//         console.log(i)
//     }
// }


// const a=[10,20,30,40];
// a.push(50)
// console.log(a)


// let promise = new Promise((resolve, reject) => {
//     let s = "HELLO GFG";
//     if (s) {
//         resolve(s);
//     }
//     else {
//         reject("Some error Occured");
//     }
// }
// )
// promise.then((data) =>
//  console.log(data)).catch((error) =>
//      console.log(error));


// let add=(a,b)=>{
//     return a+b
// }
// console.log(add(10,20))

// Function that simulates an asynchronous operation using setTimeout
// function delay() {
//     console.log("Greeting will be displayed after 2 seconds...");

//     setTimeout(() => {
//         console.log("Hello, after 2 seconds!");
//     }, 2000);
// }

// delay();
// console.log("This is displayed immediately.");



// function myPromiseFunction(condition) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (condition) {
//                 resolve("Promise Resolved!");
//             } else {
//                 reject("Promise Rejected!");
//             }
//         }, 1000);
//     });
// }

// // Calling the function with both cases
// myPromiseFunction(true)
//     .then(response => console.log(response))
//     .catch(error => console.log(error));

// myPromiseFunction(false)
//     .then(response => console.log(response))
//     .catch(error => console.log(error));



// function evenOddFunction(val){
//     return promise= new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         let num=val
//         if(num+5===15){
//             resolve(num+true)
//         }
//         else{
//             reject("5555555555555555")
//         }
//      },2000);
//     });
// }
// evenOddFunction(10)
//      .then(response=>console.log(response))
//      .catch(error=>console.log(error))

// evenOddFunction(15)
//      .then(response=>console.log(response))
//      .catch(error=>console.log(error))



/ let promise1= new Promise((resolve,reject)=>{
//     let promise=true
//     if(promise){
//         resolve("Promise Passed")
//     }
//     else{
//         reject("Promise failed")
//     }
// })
// promise1.then((message)=>{

//   console.log("first message: "+message)
//   return "Promise fulfilled second message"

// }).then((message)=>{
//     console.log("Second msg: "+message)
//     return "Promise fulfilled third message"
// }).then((message)=>{
//     console.log("third msg: "+message)
//     return "Promise fulfilled fourth message"
// })
// .catch((error)=>{

//   console.log("Error: "+error)
// })


//2

// let promise2= new Promise((resolve,reject)=>{
//     let promise=true
//     if(promise){
//         resolve("10")
//     }
//     else{
//         reject("-1")
//     }
// })
// promise2.then((message)=>{

//   console.log("first message: "+message)
//   return 20

// }).then((message)=>{
//     console.log("Second msg: "+message)
//     return 30
// }).then((message)=>{
//     console.log("third msg: "+message)
//     return 40
// })
// .catch((error)=>{

//   console.log("Error: "+error)
// })


//3

// let promise2= new Promise((resolve,reject)=>{
//     let promise=false
//     if(promise){
//         resolve("10")
//     }
//     else{
//         reject("Internal server error")
//     }
// })
// promise2.then((message)=>{

//   console.log("first message: "+message)
//   return 20

// }).then((message)=>{
//     console.log("Second msg: "+message)
//     return 30
// }).then((message)=>{
//     console.log("third msg: "+message)
//     return 40
// })
// .catch((error)=>{

//   console.log("Error: "+error)
// })


//promise.all -> means a new promise will create when all promise has passed inside it, will be resolve
//handling multiple promises

let promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve , 1000 , "first")
})

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve , 2000 , "Second")
})

let promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve , 3000, "Third")
})

Promise.all([promise1 , promise2 , promise3])
