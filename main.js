const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerMenu = document.querySelector('.menu');

const toggleDesktopMenu = () => {
	desktopMenu.classList.toggle('inactive');
};
const toggleMobileMenu = () => {
	mobileMenu.classList.toggle('inactive');
};

navBarEmail.addEventListener('click', toggleDesktopMenu);
hamburgerMenu.addEventListener('click', toggleMobileMenu);
