
let pictures = ["./assets/Carousel1.jpg", "./assets/Carousel2.jpg", "./assets/Carousel3.jpg", "./assets/Carousel4.jpg", "./assets/Carousel5.jpg"];
let carousel = document.getElementById("carousel");
let currentIndex = 0;

for ( let i = 0; i < pictures.length; i++){
    let li = document.createElement(" li ");
    let img = document.createElement(" img ");
    img.src = pictures[i];
    img.alt = `image ${ i + 1 }`;
    img.classList.add(" img-carousel ")
}