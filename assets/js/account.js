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
    //     else if ($("#topCenter .left .iconBar i").data('clicked') && $(window).width() < 991) {
    //         $(".sidebar").animate({ left: '280px' });
    //     }
    //     else if($(".sidebar .close i").data('clicked')){
    //         $(".sidebar").animate({left: '-280px'})
    //     }
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
// $(document).ready(function () {
//     $(".sections .menu .caret i").each(function(index){
//         $(this).click(function(){
//             $(".sections .menu .content").each(function(){
//                 $(this).slideToggle()
//                 return;
//             });
//         })
//     })
// });

//login
$(document).ready(function(){
    $(".regLog .up").click(function(){
        $(".regLog .register").css("display","block")
        $(".regLog .login").css("display","none")
    })
    $(".regLog .in").click(function(){
        $(".regLog .login").css("display","block")
        $(".regLog .register").css("display","none")
    })
})

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
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("topBottom");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
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
