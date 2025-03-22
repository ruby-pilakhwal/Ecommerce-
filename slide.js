const swiper1 = new Swiper(".slider-1", {
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    grabCursor: true,
    effect: "fade",
    loop: true,
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
  });

  const swiper2 = new Swiper(".slider-2", {
    grabCursor: true,
    spaceBetween:30,
    // effect: "fade",
    // loop: true,
    navigation: {
      nextEl: ".custome-next",
      prevEl: ".custome-prev",
    },
    breakpoints:{
      640:{
        slidesPerView:2,
      },
      768:{
        slidesPerView:3,
      },
      1024:{
        slidesPerView:4,
      }
    }
  });
  const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});
const swiper3 = new Swiper(".slider-3", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});