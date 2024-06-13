const img=document.querySelector(".img-area");
const btn=document.querySelector('#btn1');

btn.addEventListener('click',(event)=>{
    console.log(img.src);//file:///D://web_dev/Javascript_tut/miniproj.js/bulboff.gif
    
    if(img.src.match('off')){
        img.src='./bulbon.gif';
        btn.innerHTML='Turn Off'
    }

    else{
        img.src='./bulboff.gif';
        btn.innerHTML='Turn On';
    }
    
    
    });