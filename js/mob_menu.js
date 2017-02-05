var mob_menu = (function() {

    var menu_btn,
      burger_icon,
      close_icon,
      menu_wrap;



    // Функция инициализации
    var launchInit = function() {
      _initVars();
      _launchListeners(); // запуск прослушки событий  

    };

    var _initVars = function() {

      menu_btn = $('.mob-menu__trigger');
      burger_icon = menu_btn.find('.svg-ic--hamburger');
      close_icon = menu_btn.find('.svg-ic--close');
      menu_wrap = $('.mob-menu__wrap');
    };

    var _launchListeners = function() {
      // тут пишем код для прослушки событий

      menu_btn.on('click', _toggleMobileMenu);
    };

    // другие функции располагаются здесь, до return

    _toggleMobileMenu = function() {

      burger_icon.toggle('fast');
      close_icon.toggle('fast');
      menu_wrap.slideToggle('fast');

    };
    
    $(document).on('click', function(e) {
      if (!$(e.target).closest(".mob-menu__trigger").length) {
      
        burger_icon.show('fast');
        close_icon.hide('fast');
        menu_wrap.slideUp('fast');
      }
      e.stopPropagation();
    });
    

    return {
      init: launchInit
    };
  })();

  mob_menu.init();
