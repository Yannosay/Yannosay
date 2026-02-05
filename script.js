const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

menuBtn.onclick = () => {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
};

overlay.onclick = () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
};

// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 20) {
    nav.style.background = "rgba(25,25,40,0.85)";
    nav.style.boxShadow = "0 20px 50px rgba(0,0,0,0.7)";
  } else {
    nav.style.background = "rgba(25,25,35,0.65)";
    nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.45)";
  }
});
