

let btn=document.getElementById('iclock')
let dv=document.getElementById('dclock')
let visible=false

function clicke(){
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let session="AM"

    if(h==0){
        h=12;
    }
    if(h>12){
        h=h-12;
        session="PM";
    }

    h=(h<10)?"0"+h:h;
    m=(m<10)?"0"+m:m;
    s=(s<10)?"0"+s:s;

    let time=h+":"+m+":"+s+""+"."+session;

    dclock.innerText=time;
    dclock.TextContent=time;

    if(visible){
        dv.style.display='block';
    }else{
        dv.style.display='none';
    }
   
    setTimeout(clicke,1000)
}

    btn.addEventListener("click",

    function (){
        visible=!visible;

        clicke();
       }    
    )
