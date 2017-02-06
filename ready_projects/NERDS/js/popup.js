		var popup = document.querySelector(".modal-write-us");
		var btnClose = popup.querySelector(".modal-write-us-close");

		var overlay = document.querySelector(".modal-overlay");
		var link = document.querySelector("#write-us");
		

		link.addEventListener("click", function(event) {
			event.preventDefault();
			popup.classList.add("modal-write-us-show");
			overlay.classList.add("modal-overlay-show");
		});

		btnClose.addEventListener("click", function(event) {
			event.preventDefault();
			popup.classList.remove("modal-write-us-show");
			overlay.classList.remove("modal-overlay-show");
		});

		window.addEventListener("keydown", function(event) {
			if (event.keyCode === 27) {
				if (popup.classList.contains("modal-write-us-show")) {
					popup.classList.remove("modal-write-us-show");
					overlay.classList.remove("modal-overlay-show");
				}
			}
		});