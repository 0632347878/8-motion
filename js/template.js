document.addEventListener('DOMContentLoaded', function() {
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  var keys = {37: 1, 38: 1, 39: 1, 40: 1};
  var targetButton = document.querySelector('.order-button'); 
  var closeButton = document.querySelector('.close');
  var modalWindow = document.querySelector('#openModal');

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;  
  }

  function preventDefaultForScrollKeys(e) {
      if (keys[e.keyCode]) {
          preventDefault(e);
          return false;
      }
  }

  function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove  = preventDefault; // mobile
    document.onkeydown  = preventDefaultForScrollKeys;
  }

  function enableScroll() {
      if (window.removeEventListener)
          window.removeEventListener('DOMMouseScroll', preventDefault, false);
      window.onmousewheel = document.onmousewheel = null; 
      window.onwheel = null; 
      window.ontouchmove = null;  
      document.onkeydown = null;  
  }

  targetButton.onclick = function() {
   disableScroll();
  };

  closeButton.onclick = function() {
   enableScroll();
  };
});

  var $container = $('.tabs-overlay').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      category: '[data-category]'
    }
  });



  $('.ttabs').on( 'click', 'li', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
   
    $container.isotope({ filter: filterValue });
  });

$(function(){
  $('img').load(function(){
    $(".tabs-overlay").isotope( 'layout' )
  })

});


$(".vimeo").fancybox({
  width: 960,
  height: 540,
  type: 'iframe',
  fitToView : false,
  padding: 0
 });

$(window).on('resize', function(){
	$('#main-slider, .slide-content, .slide, .pattern').height( ($(window).height()-$('header').height()) + 2 );
	$('.slide-content, .slide').width( $(window).width() );
});

$(window).trigger('resize');

$(window).on('scroll', function(){
  if($(document).scrollTop() > $(window).height()){
    $('.pattern').css('opacity', '0');
  }else{
    $('.pattern').css('opacity', '1');
  }
});


$.scrollIt({
	  topOffset: -80,
    scrollTime: 800
});

var Count=0;

var slides = $(".slides");
  slides.owlCarousel({
  	items: 1,
    loop: true,
    dots: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoPlay: false,
    slideBy: 1,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false
  });

  function addAnimateP(){
    $('#main-slider .owl-item.active p').addClass('animated flipInX').css('opacity', 1);
    $('#main-slider .owl-item.active p').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $('#main-slider .owl-item p').removeClass('animated flipInX')
    });
  }

  function addAnimateSPAN(){
    $('#main-slider .owl-item.active span').addClass('animated fadeInUp').css('opacity', 1);
    $('#main-slider .owl-item.active span').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $('#main-slider .owl-item span').removeClass('animated fadeInUp')
    });
  }

$('.pattern').vegas({
    delay: 6000,
    timer: false,
    shuffle: false,
    overlay: true,
    cover: true,
    transition: [ 'fade' ],
    transitionDuration: 600,
    autoplay: false,
    slides: [
        { src: 'img/slide-1.jpg' },
        { src: 'img/slide-2.png' },
        { src: 'img/slide-3.jpg' }
    ],
    walk: function(){
    	if(Count!=0){
    		slides.trigger('next.owl.carousel');
        $('#main-slider .owl-item p').css('opacity', 0)
        $('#main-slider .owl-item span').css('opacity', 0)
        setTimeout(addAnimateP, 50)
        setTimeout(addAnimateSPAN, 600)
    	}else{
        setTimeout(addAnimateP, 50)
        setTimeout(addAnimateSPAN, 600)
      }
    	Count++;
    }
});

$('#next').on('click', function(){
  $('.pattern').vegas('next');
  $('#main-slider .owl-item p').removeClass('animated flipInX');
  $('#main-slider .owl-item span').removeClass('animated fadeInUp');
});
$('#prev').on('click', function(){
  $('.pattern').vegas('previous');
  $('#main-slider .owl-item p').removeClass('animated flipInX');
  $('#main-slider .owl-item span').removeClass('animated fadeInUp');
});



// $('.sercices-list .showmore').on('click', function(){
//   $(this).toggleClass('open');

//   if($(this).hasClass('open')){
//     trueHeight = $(this).parent().find('p').get(0).scrollHeight;
//     $(this).parent().find('p').animate({
//       'height': trueHeight
//     })
//     $(this).text('Скрыть')
//   }else{
//     $(this).parent().find('p').animate({
//       'height': 175
//     })
//     $(this).text('Подробнее')
//   }
  
// })


$('ul.ttabs').on('click', 'li:not(.current)', function() {  
    $(this).addClass('current').siblings().removeClass('current');
});

$('.video-overlay').on('mouseenter', function(){
  blockWidth = $(this).width();
  pWidth = $(this).find('p span').width();
  lineWidth = ((blockWidth+pWidth) / 2)-5;
  $(this).find('.line-l, .line-r').stop(true, true).animate({
    'width': lineWidth
  }, 400, function(){
      $(this).parent().find('p').stop(true).animate({
        'opacity': 1
      })
    })
  });



$('.video-overlay').on('mouseleave', function(){
    $('.line-l, .line-r').css({
    'width': 0
    })
    $(this).find('p').stop(true).css('opacity', 0)
})

$(window).on('resize', function(){
  liHeight = $('.element-item').height()
  console.log(liHeight)
  $('.showmore-container').height( (liHeight*2) )
})

$('.video-showmore').on('click', function(){
  $(this).toggleClass('open');

  if($(this).hasClass('open')){
    ulTrueHeight = $('.showmore-container').get(0).scrollHeight;
    $('.showmore-container').animate({
    'height': ulTrueHeight
  })
    $(this).text('Скрыть')
  }else{
    liHeight = $('.element-item').height()
    // $('.showmore-container').animate( {
    //   'height' : (liHeight*2) 
    //   })
    $(this).text('Показать больше')
  }
  
})


var team = $(".team ul");
  team.owlCarousel({
    items: 4,
    loop: true,
    dots: true,
    slideBy: 4,
      autoplay:true, //Автозапуск слайдера
      smartSpeed:1000, //Время движения слайда
      autoplayTimeout:2000 //Время смены слайда
  });

$('.team .next').on('click', function(){
  team.trigger('next');
});
$('.team .prev').on('click', function(){
  team.trigger('prev');
});


var clients = $(".clients ul");
  clients.owlCarousel({
    items: 5,
    loop: true,
    dots: true,
    slideBy: 4,
      autoplay:true, //Автозапуск слайдера
      smartSpeed:1000, //Время движения слайда
      autoplayTimeout:2000 //Время смены слайда
  });

$('.clients .next').on('click', function(){
  clients.trigger('next');
});
$('.clients .prev').on('click', function(){
  clients.trigger('prev');
});

function windowResize(){
  $(window).trigger('resize');

}
windowResize();

setTimeout(windowResize, 1000);










