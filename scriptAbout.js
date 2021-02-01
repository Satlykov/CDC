const menuIcon = document.querySelector(".burgerMenu");
const navbar = document.querySelector(".navbar");
const header = document.querySelector("header");
const navwrap = document.querySelector('.navwrap');

function toggleBurger() {
    navbar.classList.toggle("change");
		menuIcon.classList.toggle("change");    
		navwrap.classList.toggle('v-change');
		document.body.classList.toggle('body-no-of');
}

menuIcon.addEventListener("click", toggleBurger);
navwrap.addEventListener('click', toggleBurger);
