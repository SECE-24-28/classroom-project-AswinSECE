const myForm=document.getElementById('myForm');
const uname=document.getElementById('inp1');
const email=document.getElementById('inp2');
const age=document.getElementById('inp3');

myForm.addEventListener('submit',function(e){
    e.preventDefault();

    const nameErr = document.getElementById("nameErr");
    const emailErr = document.getElementById("emailErr");


    if(uname.value.length<3){
        nameErr.style.color="red";
        nameErr.innerText="Name should be greater than 3 letters";
        return;
    }

    if(email.value.length<15){
        emailErr.style.color="red";
        emailErr.innerText="Email should be greater than 15 letters";
        return;
    }

    nameErr.innerText="";
    emailErr.innerText="";
    console.log(`Name: ${uname.value}`);
     console.log(`Email: ${email.value}`);
     console.log(`Age: ${age.value}`);

     result.innerHTML += `
        <h3>Submitted Details:</h3>
        <p><strong>Name:</strong> ${uname.value}</p>
        <p><strong>Email:</strong> ${email.value}</p>
        <p><strong>Age:</strong> ${age.value}</p>
    `;
});

