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


//borderofImages
$(document).ready(function () {
    $("#aboutProduct .leftSide .img").click(function () {
        $("#aboutProduct .leftSide .img").removeClass("first")
        $(this).addClass("first")
    })
})

//scaler of image
// const scaler = document.querySelector('.scaleble-image');
// const imageBlock = document.querySelector('.image-container');

// const blockOffsetLeft = imageBlock.offsetLeft;
// const blockOffsetTop = imageBlock.offsetTop;

// scaler.addEventListener('mousemove', function (e) {

//     const x = e.clientX - blockOffsetLeft + 5;
//     const y = e.clientY - blockOffsetTop + 5;

//     scaler.style.transform = `translate(-${x}px, -${y}px) scale(1.5)`;
// });
// scaler.addEventListener('mouseout', function () {
//     scaler.style.transform = 'translate(0px, 0px) scale(1)';
// });

//tabemenu
$(document).ready(function () {
    $("#productDetail .headers p").click(function () {
        $("#productDetail .headers p").removeClass("first")
        $(this).addClass("first")
        let headId = $(this).attr("data-id")

        $("#productDetail .contents .cont").each(function () {
            let contentId = $(this).attr("data-id");
            if (contentId == headId) {
                $("#productDetail .contents .cont").addClass("d-none")
                $(this).removeClass("d-none")
            }
        })
    })
})

//slider
$('.menu').owlCarousel({
    loop: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: true
        },
        700: {
            items: 3,
            nav: false
        },
        1100: {
            items: 4,
            nav: true,
            loop: false
        }
    }
})
let basket = JSON.parse(localStorage.getItem("basket")) || []
getCount(basket)
function getCount(arr) {
    let count = 0;
    arr.forEach(element => {
        count += element.count
    });
    document.querySelector("#topCenter .right .cart a i sup").innerHTML = count
}
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []
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


//
let leftSides = document.querySelectorAll(".leftSide");
let rightSide = document.querySelector(".rightSide");
let products = JSON.parse(localStorage.getItem("products")) || [];

window.addEventListener('unload', function() {
    localStorage.removeItem("products");
});

if (products != null) {
    products.forEach(element => {
        leftSides.forEach(leftSide => {
            leftSide.innerHTML +=
                `
            <div class="img first">
            <img src="${element.img1}" alt="">
            </div>
            <div class="img">
            <img src="${element.img2}" alt="">
            </div>
                `
        });
        rightSide.innerHTML +=
        `
        <div class="img image-container">
        <img src="${element.img1}" alt="" class="scaleble-image">
        <span class="new">New</span>
        <span class="top">Top</span>
        <i class="fa-solid fa-maximize"></i>
    </div>
        `
    });
}
leftSides.forEach(leftSide => {
  leftSide.addEventListener("click", function(event) {
    let clickedImageSrc = event.target.getAttribute("src");
    rightSide.querySelector(".scaleble-image").setAttribute("src", clickedImageSrc);
  });
});

