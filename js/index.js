
let pictures = ["./assets/Carousel1.jpg", "./assets/Carousel2.jpg", "./assets/Carousel3.jpg", "./assets/Carousel4.jpg", "./assets/Carousel5.jpg"];
let carousel = document.getElementById("carousel");
let currentIndex = 0;

for ( let i = 0; i < pictures.length; i++){
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = pictures[i];
    img.alt = `image ${ i + 1 }`;
    img.classList.add("img-carousel")

    img.style.display = i === 0 ? "block" : "none";

    li.appendChild(img);
    carousel.appendChild(li)
}
const images = document.querySelectorAll('.img-carousel');

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
});
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});