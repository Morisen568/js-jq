window.onunload = function() {};

function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}

sizecheck();
$(function () {
if (w > 769) {
} else {
  $("header .drawer").click(function(){
  $('body').toggleClass('nav-open');
  $('header .navbar').fadeToggle(200);
    });

  $("header li a").click(function(){
  $('body').toggleClass('nav-open');
  $('header .navbar').fadeToggle(200);
    });
  }
});

function fadeIn() {

  $('.fadeLeftTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeLeft');
    } else {
      $(this).removeClass('fadeLeft');
    }
  });

  $('.fadeRightTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeRight');
    } else {
      $(this).removeClass('fadeRight');
    }
  });

}

$(window).scroll(function () {
  fadeIn();
});

function fadeIn1() {

$('.rollAnime').each(function () {
  let scroll = $(window).scrollTop();
  let triTop = $(this).offset().top + 100;
  let winHeight = $(window).height();
  if (scroll >= triTop - winHeight) {
    $(this).addClass('fadeRoll');
  } else {
    $(this).removeClass('fadeRoll');
  }
});
}

$(window).scroll(function () {
  fadeIn1();
});