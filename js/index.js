
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

// document.addEventListener("DOMContentLoaded", function() {
//     // Mặc định hiển thị form Sign Up
//     document.getElementById('form-signup').classList.add('active');
//     document.getElementById('form-login').classList.remove('active');
// });

// function showSignUp() {
//     // Ẩn form đăng nhập và hiển thị form đăng ký
//     document.getElementById('form-login').classList.remove('active');
//     document.getElementById('form-signup').classList.add('active');
// }

// function showLogin() {
//     // Ẩn form đăng ký và hiển thị form đăng nhập
//     document.getElementById('form-signup').classList.remove('active');
//     document.getElementById('form-login').classList.add('active');
// }

// function showLoginForm() {
//     document.querySelector('.background2').style.display = 'block';
// }

// document.querySelector('.btn_close').addEventListener('click', function() {
//     // Ẩn phần tử có class background2
//     document.querySelector('.background2').style.display = 'none';
// });
