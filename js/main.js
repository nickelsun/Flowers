$(document).ready(function () {
  const flowersSlider = new Swiper('.flower-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      100: {
        slidesPerView: 1,
      },
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 6,
      },
    },
  })

  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    observer: true,
    observeParents: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  $('#review-1').on('click', function () {
    $.fancybox.open(
      [
        {
          src: './img/review-image-1.jpg',
          opts: {
            caption: 'Алиса Иванова',
            thumb: './img/review-image-1.jpg',
          },
        },
      ],
      {
        loop: true,
        thumbs: {
          autoStart: true,
        },
      }
    )
  })
  $('#review-2').on('click', function () {
    $.fancybox.open(
      [
        {
          src: './img/review-image-2.jpg',
          opts: {
            caption: 'Екатерина Анц',
            thumb: './img/review-image-2.jpg',
          },
        },
      ],
      {
        loop: true,
        thumbs: {
          autoStart: true,
        },
      }
    )
  })
})
