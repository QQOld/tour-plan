$(document).ready(function(){
  var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
})

var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
})

var menuButton = $(".menu-button")
menuButton.on('click', function () {
  $(".navbar-bottom").toggleClass("navbar-bottom--visible");
})

var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);

function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass('modal__overlay--visible');
  modalDialog.addClass('modal__dialog--visible');
}

function closeModal(event) {
  event.preventDefault()
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass('modal__overlay--visible');
  modalDialog.removeClass('modal__dialog--visible');
}
// Обработка форм
$('.form').each(function() {
  $(this).validate({
  errorClass: "invalid",  
  messages: {
    name: {
      required: "Write your name",
      minlength: "Name must be at least 2 letters long",
    },
    email: {
      required: "Enter your email address",
      email: "Format - name@domain.com",
    },
    phone: {
      required: " Phone is required"
    },
  },
});
});
AOS.init({disable: 'mobile'});

$('.phone').mask('+7(000)000-00-00');
});