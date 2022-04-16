const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};
mobile_nav.addEventListener("click", () => toggleNavbar());

 if (inputImage.complete) {
  flipImage();
}
else {
  inputImage.onload = flipImage;
}
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth'
});

window.scrollBy({ 
  top: 100,
  left: 0, 
  behavior: 'smooth' 
});

document.querySelector('.hello').scrollIntoView({ 
  behavior: 'smooth' 
});