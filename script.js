'use strict';
let headerBurger = document.querySelector('.headerBurger');
let burgerNavActiv = document.querySelector('.burgerNavActiv');
let closeActive = document.querySelector('.closeActive');


function toggleMenu() {
	burgerNavActiv.classList.toggle('hidden');
}


headerBurger.addEventListener('click', toggleMenu);
closeActive.addEventListener('click', toggleMenu);
