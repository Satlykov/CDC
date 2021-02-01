"use strict";

var menuIcon = document.querySelector(".burgerMenu");
var navbar = document.querySelector(".navbar");
var header = document.querySelector("header");
var navwrap = document.querySelector('.navwrap');

function toggleBurger() {
  navbar.classList.toggle("change");
  menuIcon.classList.toggle("change");
  navwrap.classList.toggle('v-change');
  document.body.classList.toggle('body-no-of');
}

menuIcon.addEventListener("click", toggleBurger);
navwrap.addEventListener('click', toggleBurger);