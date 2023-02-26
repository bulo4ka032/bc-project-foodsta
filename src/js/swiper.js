var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.right-slider',
    prevEl: '.left-slider',
    },
  loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
  },

});
