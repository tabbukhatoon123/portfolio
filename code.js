let header=document.querySelector('header');
window.addEventListener((scroll),()=>{
header.classList.toggle('sticky',window.scroll>100);

});


// let newIcon=document.querySelector("#menu-icon");
// let navbar=document.querySelector(".navbar");
// newIcon.onclick=()=>{
//     newIcon.classList.toggle('fa-xmark');
//     navbar.classList.toggle("active");
// }

let newIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector(".navbar");
newIcon.onclick=()=>{
newIcon.classList.toggle("fa-marks");
navbar.classList.toggle('active');
}

let sections=document.querySelectorAll(
    'section'
);
let navlists=document.querySelectorAll("header  a");
window.onscroll=()=>{
sections.forEach(sec=>{
    let top =window.screenY;
    let offset=sec.offsetTop -150;
    let height= sec.offsetHeight;
    let id=sec.getAttribute('id');
    if(top>= offset && top <offset +height){
        navlists.forEach.apply(links=>{
            links.classList.remove("active");
            document.querySelector('header nav a[href='+id+']') .classList.add("active");
        })
    } 
})
}
menubar.classList.remove("fa-marks");
navbar.classList.add("active");
ScrollReveal({ distance:'80px',
duration:2000,
delay:200,


 });
 ScrollReveal().reveal('.home-text , heading', {origin :'top' });
 ScrollReveal().reveal('.about-image .services-container ,.contact form', {origin :'button' });
 ScrollReveal().reveal('.home-text  h1', {origin :'left' });
 ScrollReveal().reveal('.home-text  p  , about-text' , {origin :'right' });

