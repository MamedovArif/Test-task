var photos320 = [
  'img/pop4-mobile.png',
  'img/pop1-mobile.png',
  'img/pop2-mobile.png',
  'img/pop3-mobile.png'
];

var photos800 = [
  'img/slide-tablet.png',
  'img/pop1.png',
  'img/pop2.png',
  'img/pop3.png'
];

var photos1200 = [
  'img/slide.png',
  'img/pop1.png',
  'img/pop2.png',
  'img/pop3.png'
];

var thumbnails = document.querySelectorAll('.slider__main-btn');
var fullPhoto320 = document.querySelector('.slider__main-full-photo');
var fullPhoto800 = document.querySelector('.slider__main800');
var fullPhoto1200 = document.querySelector('.slider__main1200');

var buttons = document.querySelectorAll('.slider__main-btn');

var right = document.querySelector('.slider__main-right');
var left = document.querySelector('.slider__main-left');

var inkog;
var anonim;

buttons[0].classList.add('slider__main-btn--active');

var addArrowClickRight = function (buttonRight, photo1200, photo800, photo320) {
  buttonRight.addEventListener('click', function () {
    if (fullPhoto1200.srcset === photos1200[0]) {
    inkog = 1;
    buttons[0].classList.remove('slider__main-btn--active');
    buttons[1].classList.add('slider__main-btn--active');
  } if (fullPhoto1200.srcset === photos1200[1]) {
    inkog = 2;
    buttons[1].classList.remove('slider__main-btn--active');
    buttons[2].classList.add('slider__main-btn--active');
  } if (fullPhoto1200.srcset === photos1200[2]) {
    inkog = 3;
    buttons[2].classList.remove('slider__main-btn--active');
    buttons[3].classList.add('slider__main-btn--active')
  } if (fullPhoto1200.srcset === photos1200[3]) {
    inkog = 0;
    buttons[3].classList.remove('slider__main-btn--active');
    buttons[0].classList.add('slider__main-btn--active')
  }
    for (var i = inkog; i < photo1200.length; i++) {
      fullPhoto1200.srcset = photo1200[i];
      fullPhoto800.srcset = photo800[i];
      fullPhoto320.srcset = photo320[i];
      break;
  }
  });
};

var addArrowClickLeft = function (buttonLeft, photo1200, photo800, photo320) {
  buttonLeft.addEventListener('click', function () {
    if (fullPhoto1200.srcset === photos1200[0]) {
    anonim = 3;
    buttons[0].classList.remove('slider__main-btn--active');
    buttons[3].classList.add('slider__main-btn--active');
  } if (fullPhoto1200.srcset === photos1200[1]) {
    anonim = 0;
    buttons[1].classList.remove('slider__main-btn--active');
    buttons[0].classList.add('slider__main-btn--active');
  } if (fullPhoto1200.srcset === photos1200[2]) {
    anonim = 1;
    buttons[2].classList.remove('slider__main-btn--active');
    buttons[1].classList.add('slider__main-btn--active');
  } if (fullPhoto1200.srcset === photos1200[3]) {
    anonim = 2;
    buttons[3].classList.remove('slider__main-btn--active');
    buttons[2].classList.add('slider__main-btn--active');
  }
    for (var i = anonim; i < photo1200.length; i++) {
      fullPhoto1200.srcset = photo1200[i];
      fullPhoto800.srcset = photo800[i];
      fullPhoto320.srcset = photo320[i];
      break;
  }
  });
};

addArrowClickRight(right, photos1200, photos800, photos320);
addArrowClickLeft(left, photos1200, photos800, photos320);

var addThumbnailClickHandler = function (thumbnail, photo320, photo800, photo1200, button) {
  thumbnail.addEventListener('click', function () {
    fullPhoto320.src = photo320;
    fullPhoto800.srcset = photo800;
    fullPhoto1200.srcset = photo1200;
    button.classList.add('slider__main-btn--active');
  });
};

for (var i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], photos320[i], photos800[i], photos1200[i], buttons[i]);
};
