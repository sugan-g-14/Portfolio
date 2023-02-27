const nav=document.getElementById("nav");

window.addEventListener('scroll',()=>{
    const scroll=window.scrollY;
    if(scroll>=50){
        nav.classList.add('nav-active');
    }else{
        nav.classList.remove('nav-active'); 
    }
})