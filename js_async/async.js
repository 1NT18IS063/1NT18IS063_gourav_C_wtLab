// async function example
/*async function f() {
console.log('Asynchronous  function output.');
return Promise.resolve(1);
}
f(); */
/*async function f() {
console.log('Asynchronous function with promise.');
return Promise.resolve(1);
}
f().then(function(result) {
console.log(result)
});*/
// a promise
/*let promise = new Promise(function (resolve, reject) {
setTimeout(function () {
resolve('Promise resolved with time-stamp')}, 8000);
});
// async function
async function asyncFunc() {
// wait until the promise resolves
let result = await promise;
console.log(result);
console.log('hello javascript');
}
// calling the async function
asyncFunc();*/
//The other way you can handle an error is by using try/catch block
// a promise
/*let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved with time-stamp')}, 8000);
    });
    // async function
    async function asyncFunc() {
    try {
    // wait until the promise resolves
    let result = await promise;
    console.log(result);
    }
    catch(error) {
    console.log(error);
    }
    }
    // calling the async function
    asyncFunc(); // Promise resolved */

    // implementation of async and await on webpage
    let fn_btn = document.getElementById("btn");
    fn_btn.addEventListener("click", ()=>{
    async function myDisplay() {
        let myPromise = new Promise(function(myResolve, myReject) {
          setTimeout(function() { myResolve("Implementation of asynchronous function"); }, 3000);
        });
        document.getElementById("demo").innerHTML = await myPromise;
      }
      
      myDisplay();
    });
    
    let fn_btn1 = document.getElementById("btn1");
    fn_btn1.addEventListener("click", ()=>{
    async function myDisplay() {
        let myPromise = new Promise(function(myResolve, myReject) {
          myResolve("Promise has been resolved successfully.");
        });
        document.getElementById("demo1").innerHTML = await myPromise;
      }
      
      myDisplay();
    });

    let fn_btn2 = document.getElementById("btn2");
    fn_btn2.addEventListener("click", ()=>{
    async function myDisplay() {
        let myPromise = new Promise(function(myResolve, myReject) {
          setTimeout(function() { myResolve("Promise resolved"); }, 3000);
        });
        try {
          // wait until the promise resolves
          let result = await promise;
          console.log(result);
          }
          catch(error) {
          console.log(error);
          }
          document.getElementById("demo2").innerHTML = await myPromise;
          }
      
      myDisplay();
    });

    let fn_btn3 = document.getElementById("btn3");
    fn_btn3.addEventListener("click", ()=>{
    async function myDisplay() {
        let myPromise = new Promise(function(myResolve, myReject) {
          myResolve(alert("Promise has been resolved successfully."));
        });
      }
      
      myDisplay();
    });

    let fn_btn4 = document.getElementById("btn4");
    fn_btn4.addEventListener("click", ()=>{
    async function myDisplay() {
        let myPromise = new Promise(function(myResolve, myReject) {
          setTimeout(function() { myResolve(alert("Promise resolved")); }, 3000);
        });
        try {
          // wait until the promise resolves
          let result = await promise;
          console.log(result);
          }
          catch(error) {
          console.log(error);
          }
          }
      
      myDisplay();
    });

    
