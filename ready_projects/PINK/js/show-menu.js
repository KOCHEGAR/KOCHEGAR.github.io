var _menu = document.querySelector(".menu");
var _myDropDownMenu = _menu.querySelector(".menu__list");
var _burger = _menu.querySelector(".menu__burger");
var _cross = _menu.querySelector(".menu__cross");




_burger.addEventListener("click", function(event){
	event.preventDefault();

	_menu.classList.add("menu--bg");
	_myDropDownMenu.classList.add("menu__list--show");
	_burger.classList.add("menu__burger--remove");
	_cross.classList.add("menu__cross--show");
});

_cross.addEventListener("click", function(event) {
	event.preventDefault();

	_menu.classList.remove("menu--bg");
	_myDropDownMenu.classList.remove("menu__list--show");
	_cross.classList.remove("menu__cross--show");
	_burger.classList.remove("menu__burger--remove");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (myDropDownMenu.classList.contains("menu__list--show")) {
			event.preventDefault();

			_menu.classList.remove("menu--bg");
			_myDropDownMenu.classList.remove("menu__list--show");
			_cross.classList.remove("menu__cross--show");
			_burger.classList.remove("menu__burger--remove");
		}
	}
});