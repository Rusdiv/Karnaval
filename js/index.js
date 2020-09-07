
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.navigation__list')
const body = document.querySelector('body');
const link = document.getElementById('1');
const link2 = document.getElementById('2');
const link3 = document.getElementById('3');
// const input1 = document.querySelector('.input1');
// const input2 = document.querySelector('.input2');
// const input3 = document.querySelector('.input3');

// if (!input1) {

// }

function showMenu() {
  hamburger.classList.contains('is-active') ? hamburger.classList.remove('is-active') : hamburger.classList.add('is-active');
  navList.classList.contains('response') ? navList.classList.remove('response') : navList.classList.add('response');
  body.classList.contains('scroll') ? body.classList.remove('scroll') : body.classList.add('scroll');
}

function closeMenu () {
    navList.classList.remove('response');
    hamburger.classList.remove('is-active');
    body.classList.remove('scroll');
}

link.addEventListener('click', closeMenu);
link2.addEventListener('click', closeMenu);
link3.addEventListener('click', closeMenu);

hamburger.addEventListener( 'click', showMenu);

$('.button').click(function(){
	$('html').addClass('scroll');
	$('.popup').addClass('popup_open');
	$('.form').addClass('open');
});

$('.popup').click(function(event){
	if(event.target == this){
		$('.popup').removeClass('popup_open');
		$('html').removeClass('scroll');
	}
});

$('.js-btn').click(function(e){
	e.preventDefault();
	let href = $(this).attr('href');
	let offset = $(href).offset().top;
	$('html , body').animate({
		scrollTop: offset
	}, 500);
});

var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
  },
  breakpoints: {
      1025: {
          slidesPerView: 4,
          spaceBetween: 0,
      },
      768: {
          slidesPerView: 3,

      },
  }
});

var mySwiper1 = new Swiper('.swiper-container1', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
    pagination: {
        el: '.swiper-pagination1',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        1025: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 3,
  
        },
    }
  });

  $(".form").validate();

