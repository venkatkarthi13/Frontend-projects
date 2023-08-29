let button=document.querySelector('.bttn')
let closebtn=document.querySelector('.button-icon')
let modal=document.querySelector('.modal-overlay')

button.addEventListener('click',function(){
   modal.classList.add('visible')
})

closebtn.addEventListener('click',function(){
    modal.classList.remove('visible')
})