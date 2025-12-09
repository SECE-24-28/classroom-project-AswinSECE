/*
const btn=document.getElementById('modeChng');
btn.addEventListener('click',()=>{
    console.log("Botton is Working");
})
 */



const btn=document.getElementById('modeChng');
const body=document.body
btn.addEventListener('click',()=>{
    if(body.classList.contains('light')){
        body.classList.remove('light');
        body.classList.add('dark');
    }
    else{
        body.classList.remove('dark');
        body.classList.add('light');
    }
})