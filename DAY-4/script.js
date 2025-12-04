/*console.log("Hello, World!");
alert("Welcome to Day 4!");
document.body.style.backgroundColor = "#2899ffff";
document.getElementById("h1").innerText = "JavaScript is Fun!";*/

/* ---------------Variables in JavaScript-----------------

a = 10;
a = 5; not allowed
only var can be redeclared 
use var only when necessary as it can be used even before initialization and it can also be redeclared
we cannot change const variabless value once it declared
//let a = true;
//a = false;
let a = 25;//cannot redeclare again
var b = 30;
var b = 40;//redeclared
const c = 1.5;
//c = 3;//error
console.log(a,"+", b, "+", c ,"=", a + b + c);*/

//---------------------ARRAYS--------------------

// Arrays in JavaScript : Arrays is a data structure that can hold multiple values of same data type 
//const a = [12,13,15];//array of numbers 
//console.log(a);
//const c = [10, "Hello", true, 15.5];//array of mixed data types

//c.push(15);//adds 15 at the end of the array
//console.log(c);
//c.push(10,23,45);//adds multiple values at the end of the array
//c[2] = 40;//modifying value at index 2
//console.log("Before:", c);

//c.pop();//removes last element from the array
//console.log("After:", c);   

//c.unshift("Welcome","to","JavaScript");//adds element at the beginning of the array
//console.log("After unshift:", c);

//c.shift();//removes first element from the array
//console.log("After shift:", c);

// c.slice(1,4);//returns elements from index 1 to index 3 (4-1)
// console.log("After slice:", c);

// c.splice(2,1,"New Value");//at index 2, remove 1 element and add "New Value"
// console.log("After splice:", c);

// c.splice(-1,1);//removes last element
// console.log("After removing last element using splice:", c);

// const arr = [1,2,3,4,5,6];
// console.log("Before the Map function:", arr);

// const newArr = arr.map(num => num * 5);//multiplies each element by 5 and returns a new array
// console.log("After the Map function:", newArr);

//---------------------FILTER FUNCTION--------------------

// Array filter
// array filter will only return those elements which satisfy the given condition

// const newArr = arr.filter(num => num % 2 === 0);//returns only even numbers
// console.log("After the Filter function:", newArr);

// const courses = ["MongoDB", "ExpressJS", "Portugese" , "ReactJS", "NodeJS"];
// console.log("Courses before filter:", courses);

// const newCourses = courses.filter(c => c !=="Portugese")
// console.log("Courses after filter:", newCourses);

//---------------------REDUCE FUNCTION--------------------

//Reduce - folds an array into a single value by calling a reducer funtion for each element in the array
// const arr = [1,2,3,4,5];
// //Addition of all elements in the array
// const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(`Sum of all elements in the array: ${arr} =`, sum);

// //Multiplication of all elements in the array
// const product = arr.reduce((accumulator, currentValue) => accumulator * currentValue);
// console.log(`Product of all elements in the array: ${arr} =`, product);

// //Find the maximum element in the array
// const max = arr.reducce((accumulator,currentValue) => Math.max(accumulator,currentValue));
// console.log(`Maximum element in the array: ${arr} =`, max);

// //Find the minimum element in the array
// const min = arr.reduce((accumulator,currentValue) => Math.min(accumulator,currentValue));
// console.log(`Minimum element in the array: ${arr} =`, min);

//---------------------OBJECTS--------------------

//Objects in JavaScript
// const user = {
//     firstname: "John",
//     lastname: "Doe",
//     company:{
//         salary: 50000,
//         position: "Developer"
//     },
//     };
// console.log(user);
// const user2 = {}; //empty object

// console.log("First Name:", user.firstname);
// console.log("Last Name:", user["lastname"]);

// user.age = 30; //adding new key-value pair
// console.log("After adding age:", user);

// user['lastname'] = "Smith"; //modifying existing value
// console.log("After modifying lastname:", user);

// delete user.age; //deleting key-value pair
// console.log("after deleting age:", user);

// //KEYS:
// console.log("Keys in user object:", Object.keys(user));//returns an array of keys in the object
// //VALUES:
// console.log("Values in user object:", Object.values(user));//returns an array of values in the object
// //ENTRIES:
// console.log("Entries in user object:", Object.entries(user));//returns an array of key-value pairs in the object

//---------------------SPREAD OPERATOR--------------------

//Spread Operator in JavaScript:
// const arr1 = [5,6,7];
// const arr2 = [1,2,3,4];
// const arr3 = [8,9,10];
// const SpreadAr1 = [...arr1,...arr2,...arr3];//combining arr1, arr2 and arr3
// console.log("Array after using Spread Operator:", SpreadAr1);

// const SpreadAr = [...arr2,...arr1,...arr3,11,12];//combining arr1, arr2 and arr3 and adding 11 and 12 at the end
// console.log("Array after using Spread Operator:", SpreadAr);

//---------------------FUNCTIONS--------------------
// Functions in JavaScript:
// function(a,b){ // hoisted function: declaration is done first and then it can be used
//     const c = a + b; 
//     return c;
// }
// console.log(add(5,10));


// const add = function(a,b){ // non-hoisted function: variable declaration is done first and then it can be used
//     const c = a + b; 
//     return c;
// }

// addition of array using functions.
// const arr = [12,53,23,76,56];
// function arrAdd(arr){
//     const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
//     return sum;
// }
// console.log(`Sum of array elements : ${arrAdd(arr)}`);

// const fact = function factorial(num){
//     //return n<=1 ? 1 : num * fact(num-1);
//     if(num<=1){
//             return 1;
//     }else{
//         return num * factorial(num-1);
//     }
    
// }
// console.log("Factorial of 5 is:", fact(5));

//---------------------METHODS INSIDE OBJECTS--------------------

// const user = {
//     add: function(a,b){ //method inside object
//         return a + b;
//     }
//     ,subtract : function(a,b){
//         return a - b;   
//     }
// }

// ----------------------ARROW FUNCTIONS--------------------
// const sum = (a,b) => {return a + b;}//arrow function
// const subtract = (a,b) => {return a - b;}//arrow function with implicit return

// console.log("Sum using arrow function:", sum(10,5));
// console.log("Subtract using arrow function:", subtract(10,5));

// -----------------------DEFAULT PARAMETERS IN FUNCTIONS--------------------
// function greet(Name = "Guest"){
    // console.log(`Hello, ${Name}, Welcome to JavaScript!`);


// greet() //Will only work when theres no argument passed through the function whilie calling.
// greet("John") //Will work when argument is passed through the function while calling.

//-------------looping--------------------------------
//Types of loops in JavaScript:
//for loop
// for(let i=1;i<=10;i++)
// {
//     console.log(`5 x ${i} = ${5*i}`);
// }

// //while loop
// let i = 1;
// while(i<=10){
//     console.log(`While Loop - 5 x ${i} = ${5*i}`);
//     i++;
// }

// do{
//     console.log(`Do-While Loop - 5 x ${i} = ${5*i}`);
//     i++;
// }while(i<=10);

const user = {
    fname : "John",
    lname : "Doe",
    age : 30,
    occupation : "Developer"
}

for(const key in user)
{
    console.log(`${key} : ${user[key]}`);
}

//for-each loop
const arr = [10,20,30,40,50];
arr.forEach(x => console.log(x));
