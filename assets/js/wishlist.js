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

let basket = JSON.parse(localStorage.getItem("basket"))
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
let tableBody = document.querySelector("#cart .products table tbody")
let wishlist = JSON.parse(localStorage.getItem("wishlist"))

if (wishlist != null) {
    wishlist.forEach(element => {
        tableBody.innerHTML +=
            `
            <tr class="prod" data-id="${element.id}">
            <td class="pro"><div class="img"><img src="${element.image}" alt=""></div><div class = "b"><span>${element.name}</span></div></td>
            <td class="price">${element.price}</td>
        <td class="quant">In stock</td>
        <td class="tot"><button><i class="fa-solid fa-cart-plus"></i> ADD TO CART</button>
        </td>
        <td class="del"><i class="fa-solid fa-xmark"></i></td>
    </tr>
        `
    })
}
let removeBtn = document.querySelectorAll("#cart .products tbody .del i");
removeBtn.forEach(element => {
    element.addEventListener("click", function () {
        let wishlist = JSON.parse(localStorage.getItem("wishlist"))
        let thisId = parseInt(element.closest(".prod").getAttribute("data-id"))
        let unDeletedItem = wishlist.filter(m => m.id != thisId);
        localStorage.setItem("wishlist", JSON.stringify(unDeletedItem));
        element.closest(".prod").remove();
        let wishlistData = JSON.parse(localStorage.getItem("wishlist"));
        if (wishlistData && wishlistData.length > 0) {
            let none = document.querySelector("#cart .d-none");
            none.classList.add("d-none");
            none.nextElementSibling.classList.remove("d-none")

        }
        else {
            let none = document.querySelector("#cart .d-none");
            none.classList.remove("d-none");
            none.nextElementSibling.classList.add("d-none")
            none.nextElementSibling.nextElementSibling.classList.add("d-none")
        }
        getWishCount(JSON.parse(localStorage.getItem("wishlist")));

    })
})
let wishlistData = JSON.parse(localStorage.getItem("wishlist"));
if (wishlistData && wishlistData.length > 0) {
    let none = document.querySelector("#cart .d-none");
    none.classList.add("d-none");
    none.nextElementSibling.classList.remove("d-none")

}
else {
    let none = document.querySelector("#cart .d-none");
    none.classList.remove("d-none");
    none.nextElementSibling.classList.add("d-none")
    none.nextElementSibling.nextElementSibling.classList.add("d-none")
}
getWishCount(wishlist)
function getWishCount(arr) {
    let count = 0;
    arr.forEach(element => {
        count += element.count
    });
    document.querySelector("#topCenter .right .wish a i sup").innerHTML = count
}