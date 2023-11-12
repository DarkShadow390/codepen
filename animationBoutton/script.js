let animationParallelepiped = document.querySelector(".parallelepiped");
let playAnimation = document.querySelector('#playAnimation');

document.body.addEventListener("keyup",(e)=>{
    switch (e.key) {
        // start animation
        case "Enter":
            animationParallelepiped.classList.toggle("animation");
            break;
        // face top
        case "z":
            animationParallelepiped.style.transform = "RotateX(-90deg)";
            break;
        // face bottom
        case "s":
            animationParallelepiped.style.transform = "RotateX(90deg)";
            break;
        // face rigth
        case "d":
            animationParallelepiped.style.transform = "RotateY(-90deg)";
            break;
        // face left
        case "q":
            animationParallelepiped.style.transform = "RotateY(90deg)";
            break;
        // face front
        case "e":
            animationParallelepiped.style.transform = "RotateX(0deg)";
            break;
        // face back
        case "a":
            animationParallelepiped.style.transform = "RotateX(180deg)";
            break;
        default:
            break;
    }
});


animationParallelepiped.addEventListener('mouseover',()=>{
    animationParallelepiped.style.transform = "rotate3d(1, 0, 0, 90deg)";
})
animationParallelepiped.addEventListener('mouseleave',()=>{
    animationParallelepiped.style.transform = "rotate3d(1, 0, 0, 0deg)";
})

