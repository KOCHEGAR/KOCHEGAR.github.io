		var mapOpen = document.querySelector(".js-open-map");
		var mapPopup = document.querySelector(".modal-content-map");
		var mapClose = mapPopup.querySelector(".modal-content-close");
		var overlay = document.querySelector(".modal-overlay");

		mapOpen.addEventListener("click", function(event) {
			event.preventDefault();
			mapPopup.classList.add("modal-content-show");
			overlay.classList.add("modal-overlay-show");
		});

		mapClose.addEventListener("click", function(event) {
			event.preventDefault();
			mapPopup.classList.remove("modal-content-show");
			overlay.classList.remove("modal-overlay-show");
		});

		window.addEventListener("keydown", function(event) {
			if (event.keyCode === 27) {
				if (mapPopup.classList.contains("modal-content-show")) {
					mapPopup.classList.remove("modal-content-show");
					overlay.classList.remove("modal-overlay-show");
				}
			}
		});