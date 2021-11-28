// Link active
let navbar = document.querySelector(".navbar");
let section = document.querySelectorAll("section");
let navlink = document.querySelectorAll("header nav ul li a");

navbar.onclick = function () {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  // menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlink.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header .navbar ul li a[href*=" + id + "]").classList.add("active");
      });
    }
  });
};

// Sticky Navbar
let navbarSticky = document.getElementById("nav");

window.onscroll = function () {
  if (window.pageYOffset > 50) {
    navbarSticky.style.background = "#bdbdbd";
    navbarSticky.style.boxShadow = "0px 5px 2px blue lighten-4";
  } else {
    navbarSticky.style.background = "transparent";
    navbarSticky.style.boxShadow = "none";
  }
};
