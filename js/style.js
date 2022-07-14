var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    mousewheel: true,
    touchRatio : 2,
    speed:300,
    // virtual: true,
    // freeMode: true,
    // mousewheel: {
    //   sensitivity : 0.5,
    // },
    // observer:true,
    // observeParents:true,
    // virtual: true,

    // initialSlide :2,
    // loop: true,
    rewind:true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // dynamicBullets: true,
      // dynamicMainBullets: 9
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
  // swiper.slideTo(2);
  // swiper.activeIndex=3;
  // alert(swiper.activeIndex);
  // swiper.params.activeIndex=2;
  function fullscreen() {
    try {
      if (document.fullscreenElement) {
        document.exitFullscreen();
   
      } else {
        document.documentElement.requestFullscreen();
   
      }
    } catch (e) { console.warn(send("操作失败，请手动最大化窗口或全屏。<span class='dim'>建议使用Chrome/Edge/Firefox浏览器。</span>\n") + e); }
  }