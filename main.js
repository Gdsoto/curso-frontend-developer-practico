const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerMenu = document.querySelector('.menu');
const menuCartIcon = document.querySelector('.product-detail');
const shoppingCart = document.querySelector('.navbar-shopping-cart');

const toggleDesktopMenu = () => {
	if (!menuCartIcon.classList.contains('inactive')) {
		menuCartIcon.classList.add('inactive');
	}
	desktopMenu.classList.toggle('inactive');
};
const toggleMobileMenu = () => {
	if (!menuCartIcon.classList.contains('inactive')) {
		menuCartIcon.classList.add('inactive');
	}
	mobileMenu.classList.toggle('inactive');
};
const toggleCartMenu = () => {
	if (!mobileMenu.classList.contains('inactive')) {
		mobileMenu.classList.add('inactive');
	}
	menuCartIcon.classList.toggle('inactive');
};

navBarEmail.addEventListener('click', toggleDesktopMenu);
hamburgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleCartMenu);
