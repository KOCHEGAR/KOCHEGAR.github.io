		var popup = document.querySelector(".modal-content");
		var link = document.querySelector(".login");
		var overlay = document.querySelector(".modal-overlay");

		//var storage = localStorage.getItem("login");
		var btnClose = popup.querySelector(".modal-content-close");
		var form = popup.querySelector(".login-form");
		var login = popup.querySelector("[name=login]");
		var password = popup.querySelector("[name=password]");

		form.addEventListener("submit", function(event) {
			if (!login.value || !password.value) {
				event.preventDefault();
				popup.classList.add("modal-error");
			}
			else {
				//localStorage.setItem("login", login.value);
			}
		});

		link.addEventListener("click", function(event) {
			event.preventDefault();
			popup.classList.add("modal-content-show");
			overlay.classList.add("modal-overlay-show");
			
			
		});

		btnClose.addEventListener("click", function(event) {
			event.preventDefault();
			popup.classList.remove("modal-content-show");
			popup.classList.remove("modal-error");
			overlay.classList.remove("modal-overlay-show");
		});

		window.addEventListener("keydown", function(event) {
			if (event.keyCode === 27) {
				if (popup.classList.contains("modal-content-show")) {
					popup.classList.remove("modal-content-show");
					popup.classList.remove("modal-error");
					overlay.classList.remove("modal-overlay-show");
				}
			}
		});