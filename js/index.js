/******* Dropdown Start Here *******/ 

$(".about_dropdown").click(function () {
    $(".about_dropdown_icon").toggleClass("down");
})
$(".focus_dropdown").click(function () {
    $(".focus_dropdown_icon").toggleClass("down");
})
$(".shop_dropdown").click(function () {
    $(".shop_dropdown_icon").toggleClass("down");
})

/******* Dropdown End Here *******/ 


/******* Swiper Js Start Here *******/ 

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

/******* Swiper Js End Here *******/ 