    	$(function () {
	$("#back-top").hide();
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		$('#back-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	
	(function($){
   $(document).on('click', 'a[href^=#]', function () {
        $('html, body').animate({ scrollTop:  $('a[name="'+this.hash.slice(1)+'"]').offset().top }, 1000 ); 
        return false;
    });
})(jQuery);

	function formatText(index, panel) {
		  return index + "";
	    }
            $(function () {
            $('.anythingSlider').anythingSlider({
                easing: "easeInOutExpo",        // Anything other than "linear" or "swing" requires the easing plugin
                autoPlay: true,                 // This turns off the entire FUNCTIONALY, not just if it starts running or not.
                delay: 5000,                    // How long between slide transitions in AutoPlay mode
                startStopped: false,            // If autoPlay is on, this can force it to start stopped
                animationTime: 600,             // How long the slide transition takes
                hashTags: true,                 // Should links change the hashtag in the URL?
                buildNavigation: true,          // If true, builds and list of anchor links to link to each slide
        		pauseOnHover: true,             // If true, and autoPlay is enabled, the show will pause on hover
        		startText: "Старт",             // Start text
		        stopText: "Стоп",               // Stop text
		        navigationFormatter: formatText       // Details at the top of the file on this use (advanced use)
            });
            $("#slide-jump").click(function(){
                $('.anythingSlider').anythingSlider(6);
            });
        });     function formatText(index, panel) {
		  return index + "";
	    }
            $(function () {
            $('.anythingSlider1').anythingSlider({
                easing: "easeInOutExpo",        // Anything other than "linear" or "swing" requires the easing plugin
                autoPlay: true,                 // This turns off the entire FUNCTIONALY, not just if it starts running or not.
                delay: 2000,                    // How long between slide transitions in AutoPlay mode
                startStopped: false,            // If autoPlay is on, this can force it to start stopped
                animationTime: 600,             // How long the slide transition takes
                hashTags: true,                 // Should links change the hashtag in the URL?
                buildNavigation: true,          // If true, builds and list of anchor links to link to each slide
        		pauseOnHover: true,             // If true, and autoPlay is enabled, the show will pause on hover
        		startText: "Старт",             // Start text
		        stopText: "Стоп",               // Stop text
		        navigationFormatter: formatText       // Details at the top of the file on this use (advanced use)
            });
            $("#slide-jump1").click(function(){
                $('.anythingSlider1').anythingSlider(6);
            });
        });
		
		$(function(){
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top < 720) $("#menu").css({top: '0', position: 'relative'});
        else $("#menu").css({top: '0px', position: 'fixed'});
    });
});

jQuery(document).ready(function(){
 function htmSlider(){
  /* Зададим следующие параметры */
  /* обертка слайдера */
  var slideWrap = jQuery('.slide-wrap');
  /* кнопки вперед/назад и старт/пауза */
  var nextLink = jQuery('.next-slide');
  var prevLink = jQuery('.prev-slide');
  var playLink = jQuery('.auto');
  /* Проверка на анимацию */
  var is_animate = false;
  /* ширина слайда с отступами */
  var slideWidth = jQuery('.slide-item').outerWidth();
  /* смещение слайдера */
  var scrollSlider = slideWrap.position().left - slideWidth;
		
  /* Клик по ссылке на следующий слайд */
  nextLink.click(function(){
   if(!slideWrap.is(':animated')) {
    slideWrap.animate({left: scrollSlider}, 500, function(){
     slideWrap
      .find('.slide-item:first')
      .appendTo(slideWrap)
      .parent()
      .css({'left': 0});
    });
   }
  });

  /* Клик по ссылке на предыдующий слайд */
  prevLink.click(function(){
   if(!slideWrap.is(':animated')) {
    slideWrap
     .css({'left': scrollSlider})
     .find('.slide-item:last')
     .prependTo(slideWrap)
     .parent()
     .animate({left: 0}, 500);
   }
  });
		
  /* Функция автоматической прокрутки слайдера */
  function autoplay(){
   if(!is_animate){
    is_animate = true;
    slideWrap.animate({left: scrollSlider}, 500, function(){
     slideWrap
      .find('.slide-item:first')
      .appendTo(slideWrap)
      .parent()
      .css({'left': 0});
     is_animate = false;
    });
   }
  }
		
  /* Клики по ссылкам старт/пауза */
  playLink.click(function(){
   if(playLink.hasClass('play')){
    /* Изменяем клас у кнопки на клас паузы */
	playLink.removeClass('play').addClass('pause');
    /* Добавляем кнопкам вперед/назад клас который их скрывает */
    jQuery('.navy').addClass('disable');
    /* Инициализируем функцию autoplay() через переменную
       чтобы потом можно было ее отключить
	*/
    timer = setInterval(autoplay, 1000);
   } else {
    playLink.removeClass('pause').addClass('play');
	/* показываем кнопки вперед/назад */
    jQuery('.navy').removeClass('disable');
    /* Отключаем функцию autoplay() */
    clearInterval(timer);
   }
  });

 }
 
 /* иницилизируем функцию слайдера */
 htmSlider();
});

