$(document).ready(function () {
    $("#topCenter .left .iconBar i").click(function () {
        $(".sidebar").animate({ left: '280px' });
        $(this).data('clicked', true);
    });

    $(".sidebar .close i").click(function () {
        $(".sidebar").animate({ left: '-280px' });
        $(this).data('clicked', true);
    });

    $(window).resize(function () {
        if ($(window).width() > 991) {
            $(".sidebar").animate({ left: '-280px' });
        }
    });
});
$(document).ready(function () {
    $(".headings .menu").click(function () {
        $(".sections .menu").removeClass("d-none")
        $(".sections .catog").addClass("d-none")
    })
    $(".headings .catog").click(function () {
        $(".sections .catog").removeClass("d-none")
        $(".sections .menu").addClass("d-none")
    })
});
$(document).ready(function () {
    $("#topBottom .left").mouseover(function () {
        $("#topBottom .left .iconBar .bar").css("display", "none")
        $("#topBottom .left .iconBar .close").css("display", "block")
    })
    $("#topBottom .left").mouseout(function () {
        $("#topBottom .left .iconBar .bar").css("display", "block")
        $("#topBottom .left .iconBar .close").css("display", "none")
    })

})

$('.slider').owlCarousel({
    loop:false,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})

//sidebar
$(document).ready(function () {
    $(".secondSide .cog .open").click(function(){
        $(".secondSide").css("transform","translateX(0px)")
        $(".secondSide .cog .open").css("display","none")
        $(".secondSide .cog .close").css("display","flex")
    })
    $(".secondSide .cog .close").click(function(){
        $(".secondSide").css("transform","translateX(297px)")
        $(".secondSide .cog .open").css("display","flex")
        $(".secondSide .cog .close").css("display","none")
    })
})
$(window).resize(function() {
    if ($(window).width() > 991) {
        $(".secondSide .cog .open").css("display","none")
        $(".secondSide .cog .close").css("display","none")
        $(".secondSide").css("transform","translateX(297px)")
    } else {
        $(".secondSide .cog .open").css("display","flex")
    }
  });
  let basket = JSON.parse(localStorage.getItem("basket"))
  getCount(basket)
function getCount(arr) {
    let count = 0;
    arr.forEach(element => {
        count += element.count
    });
    document.querySelector("#topCenter .right .cart a i sup").innerHTML = count
}
let wishlist = JSON.parse(localStorage.getItem("wishlist"))
getWishCount(wishlist)
function getWishCount(arr) {
    let count = 0;
    arr.forEach(element => {
        count += element.count
    });
    document.querySelector("#topCenter .right .wish a i sup").innerHTML = count
}

//navbar
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("topBottom");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
