
let slideIndex = 0;
let slideInterval = setInterval(showSlides, 3000); 
function showSlides() {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.style.display = "none");

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
}

function nextSlide() {
    slideIndex++;
    showSlideManually();
    resetInterval();
}

function prevSlide() {
    slideIndex--;
    showSlideManually();
    resetInterval();
}

function showSlideManually() {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.style.display = "none");

    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    slides[slideIndex].style.display = "block";
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(showSlides, 3000); 
}

function toggleMenu() {
    var menu = document.querySelector(".hamburger_display");
    // Nếu menu đang ẩn, hiển thị nó
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

document.addEventListener('click', function(event) {
    var menu = document.querySelector(".hamburger_display");
    var hamburger = document.querySelector(".hamburger");

    // Nếu người dùng click vào phần tử hamburger hoặc trong menu thì không làm gì
    if (hamburger.contains(event.target) || menu.contains(event.target)) {
        return;
    }

    // Nếu click ra ngoài, ẩn menu
    menu.style.display = "none";
});

