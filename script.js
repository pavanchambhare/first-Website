const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};
mobile_nav.addEventListener("click", () => toggleNavbar());

  
var pics = document.getElementById("pic")
var gallery = document.getElementById("gallery")

function openGallery(pics){
 pics.style.display = "flex";
 gallery.src = pics;

}