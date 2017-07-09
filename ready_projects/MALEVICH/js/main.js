$(document).ready(function() {

  var body = $('body'); // тело страницы
  var wrapper = $('.wrapper'); // обёртка всего контента
  var menu = wrapper.find('.menu'); // всё меню
  var menuTrigger = menu.find('.menu__trigger'); //  кнопка меню
  var showableContent = menu.find('.menu__showable-content'); // содержимое меню
  var mainContent = wrapper.find('.main-content'); // блок с главным содержимым
  var overlay = wrapper.find('.darkoverlay'); // тёмный оверлей при открывании меню

  var eventsItems = wrapper.find('.events__item'); // "события" на главной страницы

  // anchors
  var linkedAnchors = wrapper.find('.linkedAnchor');
  var linkedAnchor1 = wrapper.find('#linkedAnchor-1');
  var linkedAnchor2 = wrapper.find('#linkedAnchor-2');

  var animdur = 650; // длительность анимации


  var canPullOrNot = false;
  var mContent = $('.main-content');
  var mContent_2 = $('.main-content__secord');
  // $('#linkedAnchor-2').hide(); /// скрываем стрелку возвращения до поры

  var esb = $('.empty-space-block');


  /////////////////////////////////////
  menuTrigger.on('click', function(e) {
    e.preventDefault();

    menu.toggleClass('opened');

    if (menu.hasClass('opened') && menu.hasClass('fxd')) {
      body.addClass('ovHidden');

      showableContent.addClass('scrollabe-vertical');

    } else {
      body.removeClass('ovHidden');

      showableContent.removeClass('scrollabe-vertical');
    }
  });


  overlay.click(function(e) {
    e.preventDefault();

    menu.removeClass('opened');
    overlay.removeClass('opened');
    body.removeClass('ovHidden');

  });

  /////////////////////////////////////
  linkedAnchors.click(function(e) {
    e.preventDefault();

    var tt = $(this);

    var offset = tt.offset().left;
    var width = tt.width();
    var magickNumber = 0;


    if (tt.attr('id') === 'linkedAnchor-1') {
      canPullOrNot = true;
      var openedOrClosedMenu = 0;
      if (menu.hasClass('opened')) {

        menu.removeClass('opened');
        openedOrClosedMenu = -1280;
      }

      if ((menu.hasClass('fxd')) || (!(menu.hasClass('fxd')))) {
        magickNumber = -menu.width() + 26;
      }

      $('html,body').stop().animate({
        // составное число для смещения скролла
        scrollLeft: offset + width + magickNumber + openedOrClosedMenu
      }, 900, function() {
        canPullOrNot = false;
      });
    } else if (tt.attr('id') === 'linkedAnchor-2') {

      canPullOrNot = true;

      eventsItems.each(function() {
        $(this).removeAttr('offset').removeClass('scrolled');
      });
      mContent.css({ 'left': 0 });
      $('html,body').stop().animate({
        scrollLeft: 0
      }, animdur + 650, function() {
        canPullOrNot = false;
      });
    }
  });



  var s = 0;
  // init controller
  // var controller = new ScrollMagic.Controller({vertical: false});



  // // $('events').

  // $('.events .events__item').each(function () {


  //     var blockTween = new TweenMax.to( $('.main-content'), 0.5, {
  //      left: "-=535",


  //    });

  //     // build scene
  //     var scene = new ScrollMagic.Scene({
  //       triggerElement: $(this), 
  //       // duration: 560,
  //       offset:  $(this).css('maxWidth'),

  //       reverse: false
  //     })
  //     .setTween(blockTween)
  //     .addIndicators() // add indicators (requires plugin)
  //     .addTo(controller);
  // });
  // $('.events .events__item').each(function () {


  //     var blockTween = new TweenMax.to( $(this), 0.5, {
  //      minWidth: "+=634",
  //      maxWidth: "+=634",

  //    });
  //     var maxW = $(this).css('maxWidth');
  //     maxW = maxW.substr(0, maxW.length - 2);

  //     // maxW= maxW-40;
  //     console.log(maxW);
  //     // build scene
  //     var scene = new ScrollMagic.Scene({
  //       triggerElement: $(this), 

  //       offset:  maxW+'px',

  //       reverse: false
  //     })
  //     .setTween(blockTween)
  //     .addIndicators() // add indicators (requires plugin)
  //     .addTo(controller);
  // });
  // build tween





  ///onscroll functions


  var someOffset = 0;


  // var myoffset ;
  // var left_margin_x;
  // var dx;

  var halfWindow = 0;
  var rightSideOf_Item = 0;
  var leftSideOf_Item = 0;
  var rightSideOf_Menu = 0;
  // var emptyWidthBlock = $('.empty-space-block');



  var scrollLeft = 0;


  var ww = 0;
  var menuWidth = 0;

  var concreteW_min = 346;
  var concreteW_max = 985;

  var wholeDocWidth = $('.main-content').width() + menu.width();

  var scrlollMax = wholeDocWidth - ww; /// тут экперементируем
  var scrollMin = 0; /// тут экперементируем

  var ds = scrlollMax - scrollMin;
  var dh = concreteW_max - concreteW_min;


  var sclrar = 2;



  var debugitem = $('<div>', {
    class: 'debug_item',
    css: {
      backgroundColor: 'red',
      display: 'block',
      position: 'fixed',
      zIndex: '999999',
      width: '2px',
      height: '100%',
      pointerEvents: 'none'
    },
    offset: {
      top: 0,
      left: ($(window).width() / 2) - (2 / 2)
    }
  });
  var debugitem2 = debugitem.clone();

  debugitem2.css({
    'height': '2px',
    'width': '100%',
    'left': '0',
    // 'top': '50%',
    'background-color': 'blue',
    'top': ($(window).height() / 2) - (2 / 2)
  });

  $('html').append(debugitem).append(debugitem2);

  var lastScrollLeft = 0;

  eventsItems.each(function() {
    $(this).addClass('scrolled');
  });

  esb.css({
    'min-width': '885px',
    'max-width': '885px'
  });


  $(window).on('scroll', function(e) {

    scrollLeft = $(this).scrollLeft();
    s = scrollLeft;


    ww = $(this).width();
    menuWidth = menu.width();

    halfWindow = ww / 2;
    rightSideOf_Menu = menu.width();


    // манипуляции с меню, чтоб всё работало
    if (s === 0 && menu.hasClass('fxd')) {
      menu.removeClass('fxd').css({ 'opacity': 0 }).stop().animate({ 'opacity': 1 }, animdur);
      mainContent.removeClass('fixed-menu');
    } else if (s >= menuWidth && (!(menu.hasClass('fxd'))) && (!(menu.hasClass('opened')))) {
      menu.addClass('fxd').css({ 'opacity': 0 }).stop().animate({ 'opacity': 1 }, animdur);
      mainContent.addClass('fixed-menu');
    }


    // mContent.css({
    //   'left' : '-'+ (s/sclrar)+'px'
    // });
    // mContent_2.css({
    //   left:  '-'+(s/sclrar)+'px'
    // });


    // увеличение элементов events__item

    // var contentWidth = $('main-content').width();

    // left_margin_x = s+menuWidth;

    // dx = Math.abs( contentWidth - ww );

    // var p = left_margin_x/dx;

    // myoffset = ww*p;
    // var res = (myoffset+s+menuWidth)/1.7;

    // console.log(dx);
    // console.log(p);
    // console.log(myoffset);
    // console.log(res);


    // console.log('offset ' + s);
    // console.log('rightSideOf_Menu ' + (s + halfWindow) );
    // console.log('halfwindow ' + (halfWindow) );
    var leftVal = mContent.css('left');
    leftVal = leftVal.substr(0, leftVal.length - 2);

    if (s < 150 && lastScrollLeft > s && leftVal !== 0) {
      console.log('kokook');
      mContent.css({ 'left': 0 });
      eventsItems.each(function() {
        $(this).removeAttr('offset');
      });
    }

    eventsItems.each(function(indx, el) {
      var self = $(this);
      var itemOffsetLeft = self.offset().left;
      var itemRightSide = self.offset().left + self.width();


      if ((s + halfWindow >= itemRightSide + 28) && (!(self.hasClass('onview')))) {


        if (indx === 0) {
          esb.css({
            'min-width': '779px',
            'max-width': '779px'
          });
          $('html,body').stop().animate({
            scrollLeft: esb.offset().left + esb.width() + 3
          }, 400);
        }
        // console.log(indx);

        setTimeout(function() {
          self.addClass('onview');
          // var pullLeft ;//= Math.ceil(self.offset().left - s-menuWidth);
          var pullLeft = Math.ceil(self.offset().left - s - menuWidth);
          // --- если окно браузера сохранило положение скролла 
          // и после перезагрузки подставила его, то обнуляем число
          // на которое должны были сместить mContent_2.
          if (pullLeft < 0) { pullLeft = 0; }
          // ---
          if (!canPullOrNot) {

            self.attr({ 'offset': pullLeft });

            mContent.css({
              'left': '-=' + pullLeft
            });
          }
        }, 170);
      }
      // Немного перестраховки 
      // Убираем случаи, когда доскроллив до певрого элемента,
      // остаётся погрешность в расчетах сдвига mContent_2 влево.
      // Когда достигаем первого элемента , сносим left в 0
      if ((s + halfWindow > itemRightSide - 456 &&
          s + halfWindow < itemRightSide - 128) &&
        lastScrollLeft > s &&
        self.hasClass('onview') &&
        eventsItems.length - 1 === indx) {
        self.removeAttr('offset');

        mContent.css({ 'left': 0 });
      }

      // if (s<150 && lastScrollLeft > s && leftVal !==0) {
      //     console.log('kokook');
      //     mContent.css({'left':0});
      //     eventsItems.each(function () {
      //        $(this).removeAttr('offset');
      //     });
      // }

      if ((s + halfWindow > itemRightSide - 356 &&
          s + halfWindow < itemRightSide - 128) &&
        lastScrollLeft > s &&
        self.hasClass('scrolled') &&
        self.hasClass('onview')) {

        self.removeClass('scrolled');

        if (!canPullOrNot) {

          var pullRight = self.attr('offset') || 0;
          var ofst = self.attr('offset');

          if ($('.events__item.scrolled').length === 1 ||
            $('.events__item.scrolled').length === 0) {
            // Случается что при быстром сдвиге скроллбара влево
            // (если он был прокручен до этого вправо) 
            // возникает ошибка расчетах сдвига mContent_2 вправо
            // и поэтому то же,что и в else if ниже, но при достижении
            // предпоследнего или последнего элемента.

            mContent.css('left', '0px');

            eventsItems.each(function() {
              $(this).removeAttr('offset');
            });
          } else if (((+leftVal) + (+ofst)) > 0) {
            // Если проскролить скроллбар слишком быстро вправо
            // (еще это бывает при перезагрузки страницы, 
            // а позиция скролла сохранена браузером и подставлена после перезагрузки)
            // то будут погрешности в расчетах сдвига mContent_2 влево.
            // Поэтому, если leftval+ofst > 0, то выставляем mContent_2.css('left', '0px')
            //
            mContent.css('left', '0px');

            eventsItems.each(function() {
              $(this).removeAttr('offset');
            });
          } else {
            // Есди всё ОК, то двигаем
            // self.removeAttr('offset');
            mContent.css({

              'left': '+=' + pullRight
            });
          }

        }
      }


      // отчасти рабочий вариант 1 

      // if ( (s+halfWindow >= itemRightSide && self.hasClass('onview')) /*&& (itemRightSide > s+rightSideOf_Menu)*/  ) {

      //     var minW = self.css('minWidth');
      //     var maxW = self.css('maxWidth');
      //     maxW =   maxW.substr(0, maxW.length - 2);
      //     minW =   minW.substr(0, minW.length - 2);

      //     var sclr = 1.051912313;

      //     if (maxW*sclr > 985) {
      //         maxW = 985;
      //         sclr = 1;
      //     }
      //       console.log(maxW);

      //       self.css({
      //         'min-width': maxW * sclr ,
      //         'max-width': maxW * sclr
      //       });
      // }   


      // console.log('pageScrollLeft 1--- ' + s);

      // отчасти рабочий вариант 2 
      // if ( (s+halfWindow >= itemRightSide && self.hasClass('onview')) /*&& (itemRightSide > s+rightSideOf_Menu+400)*/  ) {

      //           var W_min = 346;
      //           var W_max = 985;

      //           var wholeDocWidth = $('.main-content').width() + menu.width();

      //           var s_Min = itemOffsetLeft-menuWidth;  /// тут экперементируем
      //           var s_Max = 0;//wholeDocWidth - $(window).width(); /// тут экперементируем

      //           var ds = s_Max - s_Min;
      //           var dh = W_max - W_min;
      // // var h = W_max - (( W_max - W_min ) * s) / ( wholeDocWidth - $(window).width() );// уменьшение блока


      // // var h = ( (W_max - W_min) * s ) / (s_Max - s_Min)+W_min; // увеличение блока

      // var h = ( ((W_max - W_min) * s ) / s_Min) + W_min; // увеличение блока


      //           //прибавляя В_мин в конце, тем самым задаётся начальная ширина элемента,если s равно 0 
      //           // Math.abs(itemOffsetLeft - s - menuWidth) // способ узнать достижение левой стороны блока края меню
      //           console.log('resultWidth --- ' + h);
      //           console.log('indx --- ' + indx);
      //           console.log('eventsItems.length --- ' + eventsItems.length);
      //           console.log('pageScrollLeft --- ' + s);
      //           console.log('itemOffsetLeft --- ' + itemOffsetLeft);
      //           // console.log('itemOffsetLeft - pageScrollLeft - menuWidth --- ' + (  ) );

      //           console.log('itemRightSide --- ' + itemRightSide);
      //           console.log('s_Min --- ' + s_Min);
      //           // console.log('s_Max --- ' + s_Max);
      //           console.log('вся ширина документа минус ширина экрана --- ' + (wholeDocWidth - $(window).width()) );
      //           // console.log('оффсет правой стороны элемента --- ' + itemRightSide);
      //           console.log(' --------------------------------- ');


      //           if (h > 985) {
      //             // console.log('kokokoooo;');
      //             h=985;
      //             self.css({
      //               'min-width': h ,
      //               'max-width': h
      //             });
      //               console.log('в ИФ условии resultWidth --- ' + h);

      //           }else{
      //             self.css({
      //               'min-width': h ,
      //               'max-width': h
      //             });
      //           }

      // }






      //////////////////////////////////////////////////////////////////
      /// первый вариант не подошел(оставим для чего нибудь дрругого)///
      //////////////////////////////////////////////////////////////////
      // if ( s+halfWindow >= itemRightSide /*&& 
      //      s+menuWidth <= itemRightSide - someOffset*/ ) {

      //     if ( !(self.hasClass('onview')) ) {

      //         // if (indx <= eventsItems.length - (eventsItems.length-5) ) {

      //         //   someOffset+=290;
      //         // }
      //         // else{someOffset=0;}
      //         console.log('offs--1 ' + someOffset);
      //         self.addClass('onview');
      //     }
      // }
      // else if ( (s+menuWidth)+ww < itemRightSide+menuWidth && self.hasClass('onview')){

      //         // if (indx <= eventsItems.length - (eventsItems.length-5) ) {
      //         //   // console.log('kokoko222222');
      //         //   someOffset-=290;
      //         // }
      //         // else{someOffset=0;}

      //         console.log('offs--2 ' + someOffset);
      //         self.removeClass('onview');
      // }
    });


    lastScrollLeft = scrollLeft;
  });

});