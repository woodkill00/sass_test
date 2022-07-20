/******* Dropdown Start Here *******/ 

$(".about_dropdown").hover(function () {
    $(".about_dropdown_icon").toggleClass("down");
})
$(".focus_dropdown").hover(function () {
    $(".focus_dropdown_icon").toggleClass("down");
})
$(".shop_dropdown").hover(function () {
    $(".shop_dropdown_icon").toggleClass("down");
})

/******* Dropdown End Here *******/ 

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener('click', ()=>{
   //Animate Links
    // navLinks.classList.toggle("open");
    // links.forEach(link => {
    //     link.classList.toggle("fade");
    // });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
