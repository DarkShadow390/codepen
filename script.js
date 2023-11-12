let titleHover = document.querySelector(".title");
let circle = document.querySelector(".circle");

titleHover.addEventListener('mouseover',()=>{
    circle.classList.add("animation");
});

titleHover.addEventListener('mouseleave',()=>{
    circle.classList.remove("animation");
});