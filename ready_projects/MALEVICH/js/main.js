/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,i){"function"==typeof define&&define.amd?define(["ScrollMagic","jquery"],i):"object"==typeof exports?i(require("scrollmagic"),require("jquery")):i(e.ScrollMagic,e.jQuery)}(this,function(e,i){"use strict";e._util.get.elements=function(e){return i(e).toArray()},e._util.addClass=function(e,t){i(e).addClass(t)},e._util.removeClass=function(e,t){i(e).removeClass(t)},i.ScrollMagic=e});

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
        // scrollLeft: eventsItems[0].querySelector('.event')
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

  // // отрицательное число или нет
  // Math.sign = Math.sign || function(x) {
  //   x = +x; // преобразуем в число
  //   if (x === 0 || isNaN(x)) {
  //     return x;
  //   }
  //   return x > 0 ? 1 : -1;
  // };

  // $('.events .events__item').each(function () {

  // })

  $('.events .events__item').each(function(indx, el) {
    var self = $(this);
    var itms = eventsItems.length - (indx);
    self.find('.event__number').text(itms);
  });

  var s = 0;
  var W_min = 346;
  var W_max = 985;
  // init controller
  var controller = new ScrollMagic.Controller({ vertical: false });

  $('.events .events__item').each(function(indx, el) {
    var self = $(this);
    var eventItem = self.find('.event');
    var eventItemNumber = self.find('.event__number');
    var eventItemImgWrap = self.find('.event__img-wrap');
    var eventItemParagraph = self.find('.event__descr');

    var timeline = new TimelineMax();
    var dur = 0.1;

    if (eventsItems[indx - 1] !== undefined) {
      var r = eventsItems[indx - 1].querySelector('.event');

      var tween5 = new TweenMax.to(r, dur, {
        right: '+=' + (W_max - W_min),
        ease: Power1.easeIn,

      });

      timeline.add(tween5, '0');
    }

    var tween = new TweenMax.to(eventItem, dur, {
      width: '+=' + (W_max - W_min),
      ease: Power1.easeIn
      // ease: SlowMo.ease.config(0.1, 0.4, false)
    });
    var tween2 = new TweenMax.to(eventItemImgWrap, dur, {
      maxHeight: '+=427',
      ease: Power1.easeIn
      // ease: SteppedEase.config(40)
      // ease: SlowMo.ease.config(0.1, 0.4, false)
    });
    var tween3 = new TweenMax.to(eventItemParagraph, dur, {
      top: 105,
      ease: Power1.easeIn
    });
    var tween4 = new TweenMax.to(eventItemNumber, dur, {
      color: '#818181',
      ease: Power1.easeIn
    });


    timeline
      .add(tween, '0')
      .add(tween2, '0')
      .add(tween3, '0')
      .add(tween4, '0');
    // .add(tween5,'0');

    var scene = new ScrollMagic.Scene({
        triggerElement: self,
        tweenChanges: true,
        duration: 340,
        offset: 0,
        triggerHook: 0.545
        // reverse: false
      })
      .setTween(timeline)
      .addIndicators()
      .addTo(controller);

    // scene.on("progress", function (event) {
    //   console.log("Scene progress changed to " + event.progress);
    //   console.log("scrollDirection " + event.scrollDirection);
    // });
  });


  // new TweenMax.staggerFromTo('.events__item', 0.5, 
  //  {opacity:0, backgroundColor:'white'},
  //  {opacity:1,backgroundColor:'green'} ,
  //  0.4);

  function myUpdFunk(indx, trgt) {
    console.log(indx + '---' + trgt.parentElement.offsetLeft);
  }


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
      left: ($(window).width() / 2) - (2 / 2) + 71
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

  var windowWidth = 0;
  // eventsItems.each(function () {
  //   $(this).addClass('scrolled');
  // });

  // esb.css({
  //   'min-width' : '885px',
  //   'max-width' : '885px'
  // });

  // var W_min = 346;
  // var W_max = 985;

  var s_Max = 0;


  $(window).on('scroll', function(e) {

    scrollLeft = $(this).scrollLeft();
    s = scrollLeft;


    windowWidth = $(this).width();
    menuWidth = menu.width();


    halfWindow = windowWidth / 2;
    rightSideOf_Menu = menu.width();


    // манипуляции с меню, чтоб всё работало
    if (s === 0 && menu.hasClass('fxd')) {
      menu.removeClass('fxd').css({ 'opacity': 0 }).stop().animate({ 'opacity': 1 }, animdur);
      mainContent.removeClass('fixed-menu');
    } else if (s >= menuWidth && (!(menu.hasClass('fxd'))) && (!(menu.hasClass('opened')))) {
      menu.addClass('fxd').css({ 'opacity': 0 }).stop().animate({ 'opacity': 1 }, animdur);
      mainContent.addClass('fixed-menu');
    }

    // var leftVal = mContent.css('left');
    //     leftVal = leftVal.substr(0, leftVal.length - 2);

    // if (s<150 && lastScrollLeft > s && leftVal !==0) {

    //     mContent.css({'left':0});
    //     eventsItems.each(function () {
    //        $(this).removeAttr('offset');
    //     });
    // }

    eventsItems.each(function(indx, el) {
      var self = $(this);
      var itemOffsetLeft = self.offset().left;
      var itemRightSide = self.offset().left + self.width();

      // 
      if ((s + halfWindow >= itemOffsetLeft) && (!(self.hasClass('onview')))) {

        self.css({ 'borderColor': 'green' });
        // self.css({'opacity': '0'});
        // self.addClass('onview');
      }


      // отчасти рабочий вариант 
      if ((s + halfWindow >= itemRightSide + 28 - 346 && self.hasClass('onview')) /*&& (itemRightSide > s+rightSideOf_Menu+400)*/ ) {

        self.css({ 'borderColor': 'red' });


        //     console.log();

        //     // var ds = s_Max - S_min;
        //     // var dh = W_max - W_min;

        //     var S_min = 108+menuWidth*2;  // норм значение
        //     var q = s;
        //     if (!self.attr('offset')) {

        //       self.attr('offset', s);

        //     }
        //     var startFrom =  self.attr('offset');

        //     if ( q > 0 && lastScrollLeft < s && q <= startFrom ) {
        //        q = 0;
        //     }else{
        //       q -= startFrom;
        //       if (q <= 0) {
        //         q = 0;
        //       }
        //     }
        //     if (s+menuWidth >= itemOffsetLeft) { console.log('kokokko'); }
        //     console.log('currentSroll ' + s + 'px');

        //     // var h = W_max - (( W_max - W_min ) * s) / ( wholeDocWidth - $(window).width() );// уменьшение блока

        //     // var h = ( (W_max - W_min) * s ) / (s_Max - S_min)+W_min; // увеличение блока

        //     var w = ( ((W_max - W_min) * q ) / S_min) + W_min; // увеличение блока


        //     // //прибавляя В_мин в конце, тем самым задаётся начальная ширина элемента,если q равно 0 


        //     if (w > W_max) {
        //       // console.log('kokokoooo;');
        //       w = W_max;
        //       self.css({
        //         'min-width': w ,
        //         'max-width': w
        //       });
        //         console.log('в ИФ условии resultWidth --- ' + w);

        //     }else{
        //       self.css({
        //         'min-width': w ,
        //         'max-width': w
        //       });
        //     }

      }
    });


    lastScrollLeft = scrollLeft;
  });

});