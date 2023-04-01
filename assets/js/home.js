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
    $(".headings .menus").click(function () {
        $(".sections .menus").removeClass("d-none")
        $(".sections .catog").addClass("d-none")
    })
    $(".headings .catog").click(function () {
        $(".sections .catog").removeClass("d-none")
        $(".sections .menus").addClass("d-none")
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
//     $(".sections .menus .caret i").each(function(index){
//         $(this).click(function(){
//             $(".sections .menus .content").each(function(){
//                 $(this).slideToggle()
//                 return;
//             });
//         })
//     })
// });



//slide
$(document).ready(function () {
    $("#sliderPart .slide .rightSide i").click(function () {
        $("#sliderPart .slide .slide-1").animate({ left: '-780px' });
        $("#sliderPart .slide .slide-2").animate({ left: '-780px' });
        $("#sliderPart .slide .slide-2 .text").addClass("addAnimation")
        $("#sliderPart .slide .slide-1 .text").removeClass("addAnimation")
    })
    $("#sliderPart .slide .leftSide i").click(function () {
        $("#sliderPart .slide .slide-1").animate({ left: '0px' });
        $("#sliderPart .slide .slide-2").animate({ left: '0px' });
        $("#sliderPart .slide .slide-1 .text").addClass("addAnimation")
        $("#sliderPart .slide .slide-2 .text").removeClass("addAnimation")
    })
})

//tabmenu
$('#tabMenu .menu').owlCarousel({
    loop: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        576: {
            items: 2,
            nav: true
        },
        900: {
            items: 3,
            nav: true
        },
        1200: {
            items: 4,
            nav: true,
            loop: false
        }
    }
})
$(document).ready(function () {
    $("#tabMenu .header h3").mouseover(function () {
        if ($(this).attr("class") != "first") {
            $(this).css("color", "#fcb941")
        }
    })
    $("#tabMenu .header h3").mouseout(function () {
        if ($(this).attr("class") != "first") {
            $(this).css("color", "#CCCCCC")
        }
    })
})
$(document).ready(function () {
    $("#tabMenu .header h3").click(function () {
        $("#tabMenu .header .first").removeClass("first")
        $("#tabMenu .header h3").css("color", "#CCCCCC")
        $(this).css("color", "#333333")
        $(this).addClass("first");
    })
})
let headers = document.querySelectorAll("#tabMenu .header h3");
headers.forEach(function (header) {
    header.addEventListener("click", function () {
        let headId = header.getAttribute("data-id");
        let menus = document.querySelectorAll("#tabMenu .menu");
        menus.forEach(function (menu) {
            if (menu.getAttribute("data-id") === headId) {
                menu.classList.remove("d-none");
                translate = 0;
            } else {
                menu.classList.add("d-none");
                translate = 0;
            }
        });
    });
});

//brands
$('.brands').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: true,
            loop: false
        },
        600: {
            items: 4,
            nav: false,
            loop: false
        },
        1000: {
            items: 7,
            nav: true,
            loop: false
        }
    }
})

//trendPro
let heads = document.querySelectorAll("#trendPro .headers p");
heads.forEach(function (head) {
    head.addEventListener("click", function () {
        let headId = head.getAttribute("data-id");
        let menus = document.querySelectorAll("#trendPro .menu");
        menus.forEach(function (menu) {
            if (menu.getAttribute("data-id") === headId) {
                menu.classList.remove("d-none");
            } else {
                menu.classList.add("d-none");
            }
        });
    });
});
$(document).ready(function () {
    $("#trendPro .headers p").mouseover(function () {
        if ($(this).attr("class") != "first") {
            $(this).css("color", "#fcb941")
        }
    })
    $("#trendPro .headers p").mouseout(function () {
        if ($(this).attr("class") != "first") {
            $(this).css("color", "#777777")
        }
    })
})
$(document).ready(function () {
    $("#trendPro .headers p").click(function () {
        $("#trendPro .headers .first").removeClass("first")
        $("#trendPro .headers p").css("color", "#777777")
        $(this).css("color", "#fcb941")
        $(this).addClass("first");
    })
})
$('#trendPro .menu').owlCarousel({
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
            nav: true
        },
        1100: {
            items: 4,
            nav: true,
            loop: false
        }
    }
})
//sellingPro
let allP = document.querySelectorAll("#sellingPro .headers .right p");
allP.forEach(function (p) {
    p.addEventListener("click", function () {
        let headId = p.getAttribute("data-id");
        let menus = document.querySelectorAll("#sellingPro .menu");
        menus.forEach(function (menu) {
            if (menu.getAttribute("data-id") === headId) {
                menu.classList.remove("d-none");
            } else {
                menu.classList.add("d-none");
            }
        });
    });
});
$(document).ready(function () {
    $("#sellingPro .headers .right p").mouseover(function () {
        if ($(this).attr("class") != "first") {
            $(this).css("color", "#fcb941")
        }
    })
    $("#sellingPro .headers .right p").mouseout(function () {
        if ($(this).attr("class") != "first") {
            $(this).css("color", "#777777")
        }
    })
})
$(document).ready(function () {
    $("#sellingPro .headers .right p").click(function () {
        $("#sellingPro .headers .first").removeClass("first")
        $("#sellingPro .headers .right p").css("color", "#777777")
        $(this).css("color", "#fcb941")
        $(this).addClass("first");
    })
})
$('#sellingPro .menu').owlCarousel({
    loop: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        576: {
            items: 2,
            nav: true
        },
        900: {
            items: 3,
            nav: true
        },
        1200: {
            items: 4,
            nav: true,
            loop: false
        }
    }
})
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#topBottom').addClass('sticky')
    } else {
        $('#topBottom').removeClass('sticky')
    }
});
//basket
let toBasket = document.querySelectorAll(".mainBasketIcon");
let basket = [];

if (JSON.parse(localStorage.getItem("basket")) != null) {
    basket = JSON.parse(localStorage.getItem("basket"))
}

toBasket.forEach(element => {
    element.addEventListener("click", function (e) {
        e.preventDefault();

        let parent = this.closest('.card');
        let productImg = parent.querySelector('.first').src;
        let productName = parent.querySelector('.text p').innerHTML;
        let productPrice = parent.querySelector('.text .price, .discount').innerHTML;
        let productId = parseInt(this.closest(".card").getAttribute("data-id"));
        let existProduct = basket.find(m => m.id == productId);

        if (existProduct != undefined) {
            existProduct.count += 1;
        }
        else {
            basket.push({
                id: productId,
                name: productName,
                price: productPrice,
                image: productImg,
                count: 1
            })
        }
        localStorage.setItem("basket", JSON.stringify(basket));
        getCount(basket)

    })
});

getCount(basket)
function getCount(arr) {
    let count = 0;
    arr.forEach(element => {
        count += element.count
    });
    document.querySelector("#topCenter .right .cart a i sup").innerHTML = count
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

//wishlist
let toWish = document.querySelectorAll(".wishLi");
let wishlist = [];

if (JSON.parse(localStorage.getItem("wishlist")) != null) {
    wishlist = JSON.parse(localStorage.getItem("wishlist"))
    getWishCount(wishlist)
}

toWish.forEach(element => {
    let productId = parseInt(element.closest(".card").getAttribute("data-id"));
    let existProduct = wishlist.find(m => m.id == productId);
    if (existProduct != undefined) {
        element.classList.add("fa-solid");
        element.classList.remove("fa-regular");
    } else {
        element.classList.remove("fa-solid");
        element.classList.add("fa-regular");
    }
    element.addEventListener("click", function (e) {
        e.preventDefault();

        let parent = this.closest('.card');
        let productImg = parent.querySelector('.first').src;
        let productName = parent.querySelector('.text p').innerHTML;
        let productPrice = parent.querySelector('.text .price, .discount').innerHTML;
        let productId = parseInt(this.closest(".card").getAttribute("data-id"));
        let existProduct = wishlist.find(m => m.id == productId);
        if (existProduct != undefined) {
            wishlist = wishlist.filter(m => m.id != productId);
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            element.classList.add("fa-regular")
            element.classList.remove("fa-solid")
            getWishCount(JSON.parse(localStorage.getItem("wishlist")));
            return;
        }
        else {
            wishlist.push({
                id: productId,
                name: productName,
                price: productPrice,
                image: productImg,
                count: 1
            })
            element.classList.remove("fa-regular")
            element.classList.add("fa-solid")
        }
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        getWishCount(wishlist)
    })
    // let productId = parseInt(element.closest(".card").getAttribute("data-id"));
    // let exist = wishlist.find(m => m.id == productId);
    // console.log(exist);
    // if (exist != undefined) {
    //     element.classList.add("fa-regular")
    //     element.classList.remove("fa-solid")
    // }
    // else{
    //     element.classList.remove("fa-regular")
    //     element.classList.add("fa-solid")
    // }
});

let wishNewList = JSON.parse(localStorage.getItem("wishlist")) || [];
getWishCount(wishNewList);

function getWishCount(arr) {
    let count = arr.reduce((total, item) => total + item.count, 0);
    document.querySelector("#topCenter .right .wish a i sup").innerHTML = count;
}

let cards = document.querySelectorAll(".card");
let products = JSON.parse(localStorage.getItem("products")) || [];

cards.forEach(element => {
    element.addEventListener("click", function(event) {
        // Tıklanan öğe bir <i> ise varsayılan davranışı engelle
        if (event.target.tagName === "I") {
            event.preventDefault();
        } else {
            let productImgFirts = element.querySelector('.first').src;
            let productImgSecond = element.querySelector('.secondImg').src;
            let productId = parseInt(element.getAttribute("data-id"));
            products.push({
                id: productId,
                img1: productImgFirts,
                img2: productImgSecond,
            });
            localStorage.setItem("products", JSON.stringify(products));
            location.replace("/product.html");
        }
    });
});

