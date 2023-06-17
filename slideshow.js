const carouselContainer = document.querySelector(".carouselContainer");  
const slides = document.querySelectorAll('.slides');  
let counter = 0 ;  
slides.forEach((slide,index)=>{
    slide.style.left=`${index * 100}%`;
})
function before(){
    counter--;
    if(counter>=0){
        slideshow();
    }else{
        counter=slides.length;
        slideshow();
    }
}

function after(){
    counter++; 
    if(counter<slides.length){
        slideshow();
    }else{
        counter=0;
        slideshow();
    }
}
const slideshow=()=>{
slides.forEach((slide)=>{
    slide.style.transform=`translateX(-${counter*100}%)`
})
}
let a
const start=()=>{
    a=setInterval(after,1000);
}
const stop=()=>{
    clearInterval(a);
}
// let stop=document.querySelector('#stop');
// stop.addEventListner("click",function(){
//     clearInterval(a);
//     stop.innerHTML="START";
// })