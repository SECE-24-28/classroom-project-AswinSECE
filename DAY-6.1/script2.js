
/*1.
console.log("Hello World from JS");    //print first

setTimeout(()=>{      //print third because setTimeOut is of asynchronous nature
    console.log("Hello World from setTimeOut");     
},0);   //time is in milliseconds.  1s=1000ms

setInterval(()=>{     //print last because setInterval is of asynchronous
    console.log("Hello World from setInterval");
},1000); 

console.log("Hello World 3");  //print second

*/




/*2.
//Temporal Dead Zone - can't access functions of variables before initialization
//Hoisting - shift all the variables and functions at the top for it to be accessible

//IIFE --> Immediately Involked Function Execution
(function(){
    console.log("I will run first as I am an IIFE");
})()

console.log("Hello World from JS");    //print first

setTimeout(()=>{      //print third because setTimeOut is of asynchronous nature
    console.log("Hello World from setTimeOut");     
},0);   //time is in milliseconds.  1s=1000ms

setInterval(()=>{     //print last because setInterval is of asynchronous
    console.log("Hello World from setInterval");
},1000); 

console.log("Hello World 3");  //print second

  */


/*3.
//Callback function is a function that can be accessed with another function.
//     It is a function within function
function display(uname){
    console.log("Your Name is:",uname);
}

function func1(){
    display("DARSHAN S");
}

func1();

 */


/*4.
function display(num){
    console.log("The value is:",num);
}

function add(num1,num2,callBackfntn){
    const sum=num1+num2;
    callBackfntn(sum);
}

add(4,3,display);
 */



/*5.
//Promise: promises are objects that promise to return us something.

const prom1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("setTimeOut is involked");
        resolve("This function has been resolved");
    },2000);
})
prom1.then((message)=>{console.log(message);})
 */


/*6.
const prom1=new Promise((resolve,reject)=>{
    const val=Math.random();
    if(val<0.5){
         reject(`The number is ${val} which is lesser than 0.5`);
    }
    else{
         resolve(`The number is ${val} which is greater than 0.5`);
    }
})
prom1.then((message)=>{console.log(message);})
 */



/*7.
const prom1=new Promise((resolve,reject)=>{
    const val=Math.random();
    if(val<0.5){
         reject(`The number is ${val} which is lesser than 0.5`);
    }
    else{
         resolve(`The number is ${val} which is greater than 0.5`);
    }
})
prom1.then((message)=>{
    console.log(message);
}).catch((err)=>{
    alert("The battery is losser so the computer is restarting");
})
   */




//states of Premise - 1)     2)     3)





//6 - types


// const promise1=new Promise((resolve,reject)=>{
//     const val=Math.random();
//     if(val<0.5){
//          reject(`The number is ${val} which is lesser than 0.5`);
//     }
//     else{
//          resolve(`The number is ${val} which is greater than 0.5`);
//     }
// })

// const promise2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("setTimeOut is involked");
//         resolve("This function has been resolved");
//     },2000);
// })

/*
//(i)Promise.all() - waits for all promises to be fulfilled and then returns the value
let promise3=Promise.all([promise1,promise2]);
promise3.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})
*/


/*
//(ii)Promise.allSettled() - waits for the premises to settle and then returns their value
//            in an array
let promise3=Promise.allSettled([promise1,promise2]);
promise3.then((data)=>{
    console.log("The data is:",data);
}).catch((err)=>{
    console.log(err);

});
 */


/*
//(iii)Promise.race() - waits for the first promise to be fulfilled and then returns its value

let promise3=Promise.race([promise1,promise2]);
promise3.then((data)=>{
    console.log("The data is:",data);
}).catch((err)=>{
    console.log(err);

});
 */


/*
//(iv)Promise.any() - waits for the first promise to be fulfilled and then returns its value

let promise3=Promise.any([promise1,promise2]);
promise3.then((data)=>{
    console.log("The data is:",data);
}).catch((err)=>{
    console.log(err);

});
 */



/*
//(v)Promise.resolve() - static method for resolve that will return a value

let promise3=Promise.resolve("This has been resolved");
promise3.then((data)=>{
    console.log("The data is:",data);
}).catch((err)=>{
    console.log(err);

});
 */




/*
//(vi)Promise.resolve() - static method for reject that will return a value

let promise3=Promise.resolve("This has been rejected");
promise3.then((data)=>{
    console.log("The data is:",data);
}).catch((err)=>{
    console.log(err);

});
 */




//Async - Await

/*
console.log("Data will be loaded now");
function loadData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("The data has been initiated");
        },2000);
    })
}
console.log("Data is loading...");
let datas=loadData();
datas.then((datas)=>{
      console.log("The datas are:",datas);
      console.log("Data is cleaning...");
      console.log("Data is ready to process.");
})
*/




/*
console.log("Data will be loaded now");
async function loadData(){
   const rawData = await fetch('https://jsonplaceholder.typicode.com/todos/1');
   const data= await rawData.json();
   return data;
}
console.log("Data is loading...");
let datas=loadData();
datas.then((datas)=>{
      console.log("The datas are:",datas);
      console.log("Data is cleaning...");
      console.log("Data is ready to process.");
})

async function main(){
    let data = await loadData();
    console.log(data);
}

main();
 */



localStorage.setItem("movie","Marvel's Avengers");
localStorage.setItem("hero","Robert Downey Jr.");
let movie = localStorage.getItem("movie");
let hero = localStorage.getItem("hero");
console.log("The movie is:",movie);
console.log("The hero is:",hero);
localStorage.removeItem('movie');   //remove your item in localStorage
localStorage.clear(); //clear your localStorage


