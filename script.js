const images = [
    "https://i.ibb.co/7S7c1yR/1.jpg",
    "https://i.ibb.co/Zm8hJ4M/2.jpg",
    "https://i.ibb.co/5kYyY0K/3.jpg",
    "https://i.ibb.co/7nY1M0N/4.jpg",
    "https://i.ibb.co/tD0f7Pw/5.jpg",
    "https://i.ibb.co/0KX9q5f/6.jpg", // ảnh gần cuối
    "https://i.ibb.co/1gVQI2Ij/7.jpg"  // ảnh cuối
];

let current = 0;

const mainImage = document.getElementById("main-image");
const message = document.getElementById("message");
const okeBtn = document.getElementById("oke-btn");
const wrongBtn = document.getElementById("wrong-btn");

function updateImage(nextIndex) {
    current = nextIndex;
    mainImage.src = images[current];

    if (current === images.length - 2) {
        okeBtn.style.fontSize = "50px";
        wrongBtn.style.display = "none";
    }

    if (current === images.length - 1) {
        message.textContent = "Cảm ơn An Thư 蛋 nhen 💖";
        okeBtn.style.fontSize = "60px";
        wrongBtn.style.display = "none";
    }
}

okeBtn.addEventListener("click", () => {
    if (current < images.length - 1) {
        updateImage(images.length - 1);
    }
});

wrongBtn.addEventListener("click", () => {
    if (current < images.length - 1) {
        updateImage(current + 1);
        okeBtn.style.fontSize = "30px";
    }
});
