//hamburger-menu

const nav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");
const menuBtn = document.querySelector('.menu-btn');

navToggle.addEventListener("click", () => {
    
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        menuBtn.classList.add('open');
    } else {
        nav.setAttribute("data-visible", false);
        menuBtn.classList.remove('open');
    }
})




//pricing section js
function check() {
  var checkBox = document.getElementById("checkbox");
  var text1 = document.getElementsByClassName("text1");
  var text2 = document.getElementsByClassName("text2");

  for (var i = 0; i < text1.length; i++) {
    if (checkBox.checked == true) {
      text1[i].style.display = "inline";
      text2[i].style.display = "none";
    } else if (checkBox.checked == false) {
      text1[i].style.display = "none";
      text2[i].style.display = "inline";
    }
  }
}
check();

//swiper js
		var swiper = new Swiper('.swiper', {
			spaceBetween: 30,
			slidesPerView: 3,
			centeredSlides: true,
			loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
			autoplay: {
			delay: 5000,
			disableOnInteraction: false,
			},
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768:{
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }
		});


    