// Link active
let navbarToggle = document.querySelector(".navbar");
let section = document.querySelectorAll("section");
let navlink = document.querySelectorAll("header nav ul li a");
let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-container");
let menuToggle = document.querySelector("#menu-bars");
let formClose = document.querySelector("#form-close");

menuToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  menuToggle.classList.toggle("fa-times");
});

searchBtn.addEventListener("click", function () {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});
// window.onscroll = () => {
//   navbar.classList.remove("active");
//   searchBtn.classList.remove("active");
//   searchBar.classList.remove("fa-times");
//   menuToggle.classList.remove("fa-times");

//   section.forEach((sec) => {
//     let top = window.scrollY;
//     let height = sec.offsetHeight;
//     let offset = sec.offsetTop - 150;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navlink.forEach((links) => {
//         links.classList.remove("active");
//         document.querySelector("header .navbar ul li a[href*=" + id + "]").classList.add("active");
//       });
//     }
//   });
// };

// formClose.addEventListener("click", function () {
//   formClose.classList.remove("active");
// });

// navbar.onclick = function () {
//   navbar.classList.toggle("active");
// };

// Sticky Navbar
let navbarSticky = document.getElementById("nav");

window.onscroll = function () {
  if (window.pageYOffset > 50) {
    navbarSticky.style.background = "#fff";
    navbarSticky.style.boxShadow = "0px 5px 2px blue lighten-4";
  } else {
    navbarSticky.style.background = "rgb(238, 237, 237)";
    navbarSticky.style.boxShadow = "none";
  }
};
