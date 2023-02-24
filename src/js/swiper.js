var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.right-slider',
    prevEl: '.left-slider',
  },
});
