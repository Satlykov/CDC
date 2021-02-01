"use strict";

var menuIcon = document.querySelector(".burgerMenu");
var navbar = document.querySelector(".navbar");
var header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});
menuIcon.addEventListener("click", function () {
  navbar.classList.toggle("change");
  menuIcon.classList.toggle("change");
});