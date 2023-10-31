// JavaScript For Sticky Header

window.addEventListener("scroll", function () {
  const header = document.querySelector(".navbar");
  header.classList.toggle("sticky", window.scrollY > 100);
});

// Testimonials Slider JavaScript

$(".testimonials-slider").owlCarousel({
  loop: true,
  margin: 25,
  items: 3,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
  navText: ['<i class="fa-solid fa-chevron-right"></i>', '<i class="fa-solid fa-chevron-left"></i>']
});
