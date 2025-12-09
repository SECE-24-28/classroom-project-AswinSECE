/*
const cont=document.getElementById('b3');
cont.style.backgroundColor="black";
cont.style.color="white";
cont.style.fontSize="40px";

const fc=document.getElementById('Container');
fc.style.display="flex";

  */

/*
const cont = document.getElementsByClassName("Container")[0];
cont.style.border = "2px solid white";
cont.style.padding = "20px";
cont.style.margin = "20px";
cont.style.backgroundColor = "#002a44";   // Dark blue background
cont.style.borderRadius = "10px";
cont.style.display = "flex";
cont.style.justifyContent = "space-between";

const fc = document.getElementsByClassName("box");
for (let i = 0; i < fc.length; i++) {
    fc[i].style.border = "2px solid white";
    fc[i].style.margin = "10px";
    fc[i].style.padding = "20px";
    fc[i].style.flex = "1";
    fc[i].style.textAlign = "center";
    fc[i].style.backgroundColor = "#dddddd"; // light grey box
    fc[i].style.borderRadius = "12px";
    fc[i].style.fontSize = "20px";
    fc[i].innerHTML = `hello ${i + 1}`;
}
 */

/*
const cont3 = document.getElementById('Container');
cont3.innerHTML = '<h1 id="textChange">This is using innerHTML</h1>';
document.getElementById('textChange').innerText = 'Hello world';

 */


/*
const cont3=document.getElementById('Container');
document.getElementById('textChange').innerText='Hello world';
 */

/*
const box=document.getElementsByClassName('box')[2];
// box.style.backgroundColor="red";
console.log(box);
box.style.height="50px";
box.style.width="50px";
box.style.border="5px solid black";
 */


/*
const box=document.getElementsByClassName('box');
for(let i=0;i<box.length;i++){
console.log(box);
box[i].style.height="80px";
box[i].style.width="80px";
box[i].style.border="5px solid black";
box[i].style.backgroundColor="red";
box[i].style.color="white";
box[i].style.fontSize="30px";
box[i].style.margin="10px";

}
 */

/*
const cont = document.getElementsByTagName('div');
cont[3].style.backgroundColor="Red";
*/



/*
//querySelector and querySelectorAll
//querySelector- returns the first element that it finds
//querySelectorAll - returns us a list of all the elements
//                   that can be accessed using the index numbers
const cont=document.querySelector("div");
console.log(cont);
console.log("-------------------")
const cont2=document.querySelectorAll("div");
cont2[4].style.fontSize="30px";
[...cont2].forEach(x=>console.log(x));

  */



//classList

/*
//1.
const box1=document.getElementById('b1');
box1.classList.add('red');
box1.classList.remove('box');
  */


/*
//2.
const box1=document.getElementById('b1');
box1.classList.add('red');
box1.classList.replace('red','blue');
box1.classList.toggle('green');    //Adds the class if missing, removes if present
if(box1.classList.contains('box')){
    console.log("Box class has been applied");  
}
    */





/*
const div=document.createElement('h1');
div.textContent="This h1 tag has been made using js";  //add element on the html file at the end of the body
document.body.appendChild(div);       //remove the element from the html file
// document.body.removeChild(div);
 */
