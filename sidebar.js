let toggle=document.querySelector('.sidebar-toggle')
let btn=document.querySelector('.button-icon')
let side=document.querySelector('.side')

toggle.addEventListener('click',function(){
    side.classList.toggle('show-sidebar')
})

btn.addEventListener('click',function(){
    side.classList.remove('show-sidebar')
})