

const video=document.querySelector('.video-container')
const btn=document.querySelector('.switch-btn')

btn.addEventListener('click',function(){
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide')
        video.play();
    }else
    {btn.classList.remove('slide')
    video.pause();
    }
})

// To view preloader inspect-> change network settings from offline to (Fat3G or slow3G)
const preloader=document.querySelector('.pre-loader')

window.addEventListener('load',function(){
    preloader.classList.add('hide-preloader')
})