// SHOW MENU
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

if(navToggle){
  navToggle.addEventListener("click",() => {
    navMenu.classList.add("show-menu");
  })
}

if(navClose){
  navClose.addEventListener("click",() => {
    navMenu.classList.remove("show-menu");
  })
}



// SCROLL HEADER
function scrollHeader(){
  const header = document.getElementById("header");
  if(this.scrollY >= 50)
      header.classList.add("scroll-header");
  else
    header.classList.remove("scroll-header");
}

window.addEventListener("scroll",scrollHeader);


// SHOW SCROLL UP
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350 ? scrollUp.classList.add("show-scroll")
                      : scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll",scrollUp);


// BRAND SWIPER
var brandSwiper = new Swiper(".brand-swiper", {
    spaceBetween: 24,
    loop : true,
    breakpoints: {
       450 : {
            slidesPerView: 2,
            spaceBetween: 24,
          },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
    },
  });

// ANIME SWIPER
var animeSwiper = new Swiper(".anime-swiper", {
  spaceBetween: 24,
  loop : true,
  breakpoints: {
     576 : {
          slidesPerView: 2,
          spaceBetween: 24,
        },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  },
});  