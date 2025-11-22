//언어
$(".lan > a").click(function (e) {
  e.preventDefault();
  $(".lan_inner").toggleClass("on");
  $(".lan img").toggleClass("active");
});

//메뉴
$(".menu > ul > li").hover(
  function () {
    let ht = $(this).find(".sub > ul").height();
    console.log(ht);
    $(this).find(".sub").height(ht).addClass("show");
  },
  function () {
    $(".menu > ul > li").find(".sub").height(0).removeClass("show");
  }
);

$("header").hover(
  function () {
    $(this).addClass("on");
    $(".logo img").attr("src", "./images/sulwhasoo_logo-amber_250224.png");
  },
  function () {
    $(this).removeClass("on");
    $(".logo img").attr("src", "./images/sulwhasoo_white_logo_220902.png");
  }
);
//비주얼 슬라이드
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper_btn.next",
    prevEl: ".swiper_btn.prev",
  },
});
//설화수 추천 슬라이드
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper_btn.next",
    prevEl: ".swiper_btn.prev",
  },
});
// AOS애니메이션
AOS.init();
