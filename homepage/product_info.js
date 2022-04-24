let slideIndex = 1;
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
autoShowSlides();

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function autoShowSlides() {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(autoShowSlides, 3000); // Change image every 2 seconds
}

let productsWithSameCategory = document.getElementsByClassName('product-with-same-category');
let nums = productsWithSameCategory.length;

function changeBackground(n) {
    productsWithSameCategory[n].style.backgroundColor = "aquamarine";
    for(let i = 0; i < nums; i++){
        if(i != n) productsWithSameCategory[i].style.backgroundColor = "beige";
    }
}

leaveMouse();
function leaveMouse(){
    for (let index = 0; index < nums; index++) {
        const element = productsWithSameCategory[index];
        element.onmouseleave = function(){
            element.style.backgroundColor = "beige"
        }
    }
}