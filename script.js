const images = [
    "https://pin.it/5M9bYx0gT",
    "https://pin.it/BPLxT7E5E",
    "https://pin.it/4uokgXaBs",
    "https://pin.it/4VECDw7DG",
    "https://pin.it/6ExuoI0gw",
    "https://pin.it/55raP15gg", // ảnh gần cuối
    "https://pin.it/1gVQI2Ij6"  // ảnh cuối
];

let current = 0;

const mainImage = document.getElementById("main-image");
const message = document.getElementById("message");
const okeBtn = document.getElementById("oke-btn");
const wrongBtn = document.getElementById("wrong-btn");
const music = document.getElementById("bg-music");

music.play();

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
