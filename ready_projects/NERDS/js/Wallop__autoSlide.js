		setTimeout(function nextSlide() {
			
			wallop.next(); 
			setTimeout(nextSlide, 10000);

		}, 10000);