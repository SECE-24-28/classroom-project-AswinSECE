const myForm=document.getElementById('myForm');
const uname=document.getElementById('uname');
const email=document.getElementById('email');
const age=document.getElementById('age');

const myCards=document.getElementById('myCards');

myForm.addEventListener('submit',(event)=>{
    event.preventDefault();
 
    myCards.innerHTML+=`<div class="card">
                <div><span class="labels">Name:</span>${uname.value}</div>
                <div><span class="labels">E-Mail:</span>${email.value}</div>
                <div><span class="labels">Age:</span>${age.value}</div>
            </div>`;

            myForm.reset();
})