
const btn=document.getElementById('btn')
const click=document.getElementById('color')

let colors=["red","white","black","transparent","blue","yellow","green","orange"]

btn.addEventListener('click',function(){

    let randomnum=getRandomNumber()
    // console.log(randomnum);

    document.body.style.backgroundColor=colors[randomnum];
    click.textContent=colors[randomnum];
});
 
function getRandomNumber(){
    return Math.floor(Math.random()* colors.length)
}