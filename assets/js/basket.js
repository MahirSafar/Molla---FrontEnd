
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

let allPrice = 0;
let tableBody = document.querySelector("#cart .products table tbody")
let basket = JSON.parse(localStorage.getItem("basket"))



if (basket != null) {
    basket.forEach(element => {
        tableBody.innerHTML +=
            `
    <tr class="prod" data-id="${element.id}">
    <td class="pro"><div class="img"><img src="${element.image}" alt=""></div><div class = "b"><span>${element.name}</span></div></td>
    <td class="price">${element.price}</td>
    <td class="quant"><div class="inp"><span class="minus">-</span><input type="number" min="1" value="${element.count}"><span class="plus">+</span></div></td>
    <td class="tot">${(element.price.replace(/\$/g, '').split("-")[0] * element.count).toFixed(2)}</td>
    <td class="del"><i class="fa-solid fa-xmark"></i></td>
    </tr> 
    `
        allPrice += element.price.replace(/\$/g, '').split("-")[0] * element.count

    })
    let topTotal = document.querySelector("#cart .total .topCenter span")
    let botTotal = document.querySelector("#cart .total .bottom span")
    topTotal.innerHTML = "$" + allPrice;
    botTotal.innerHTML = "$" + allPrice;
}


getCount(basket)
function getCount(arr) {
    let count = 0;
    arr.forEach(element => {
        count += element.count
    });
    document.querySelector("#topCenter .right .cart a i sup").innerHTML = count
}


let plusBtn = document.querySelectorAll("#cart .products tbody .quant .plus");

plusBtn.forEach(element => {
    element.addEventListener("click", function () {
        let thisId = parseInt(element.closest(".prod").getAttribute("data-id"))
        let thisProd = basket.find(m => m.id == thisId);
        if (thisProd != null) {
            thisProd.count += 1;
            element.previousElementSibling.value = thisProd.count;
        }
        localStorage.setItem("basket", JSON.stringify(basket));
        element.closest(".quant").nextElementSibling.innerHTML = "$" + (element.previousElementSibling.value * element.closest(".quant").previousElementSibling.innerHTML.replace(/\$/g, '').split("-")[0]).toFixed(2)

        let topTotal = document.querySelector("#cart .total .topCenter span")
        let botTotal = document.querySelector("#cart .total .bottom span")
        let topTotalNum = Number(topTotal.innerHTML.replace(/[\$\,]/g, '').split("-")[0]);
        let proTotalNum = Number(element.closest(".quant").previousElementSibling.innerHTML.replace(/[\$\,]/g, '').split("-")[0]);
        let diff = topTotalNum + proTotalNum;
        topTotal.innerHTML = "$" + diff.toLocaleString();
        botTotal.innerHTML = "$" + diff.toLocaleString();
    })
})

let minusBtn = document.querySelectorAll("#cart .products tbody .quant .minus");
minusBtn.forEach(element => {
    element.addEventListener("click", function () {
        if (element.nextElementSibling.value != 1) {
            let topTotal = document.querySelector("#cart .total .topCenter span")
            let botTotal = document.querySelector("#cart .total .bottom span")
            let topTotalNum = Number(topTotal.innerHTML.replace(/[\$\,]/g, '').split("-")[0]);
            let proTotalNum = Number(element.closest(".quant").previousElementSibling.innerHTML.replace(/[\$\,]/g, '').split("-")[0]);
            let diff = topTotalNum - proTotalNum;
            topTotal.innerHTML = "$" + diff.toLocaleString();
            botTotal.innerHTML = "$" + diff.toLocaleString();
        }
        let thisId = parseInt(element.closest(".prod").getAttribute("data-id"))
        let thisProd = basket.find(m => m.id == thisId);
        if (thisProd != null) {
            thisProd.count -= 1;
            element.nextElementSibling.value = thisProd.count;
            if (thisProd.count <= 1) {
                thisProd.count = 1;
                element.nextElementSibling.value = thisProd.count;
            }
        }
        localStorage.setItem("basket", JSON.stringify(basket));
        element.closest(".quant").nextElementSibling.innerHTML = "$" + (element.nextElementSibling.value * element.closest(".quant").previousElementSibling.innerHTML.replace(/\$/g, '').split("-")[0]).toFixed(2)

    })
})
let removeBtn = document.querySelectorAll("#cart .products tbody .del i");
removeBtn.forEach(element => {
    element.addEventListener("click", function () {
        let basket = JSON.parse(localStorage.getItem("basket"))
        let thisId = parseInt(element.closest(".prod").getAttribute("data-id"))
        let unDeletedItem = basket.filter(m => m.id != thisId);
        localStorage.setItem("basket", JSON.stringify(unDeletedItem));
        element.closest(".prod").remove();
        let basketData = JSON.parse(localStorage.getItem("basket"));
        if (basketData && basketData.length > 0) {
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
        let topTotal = document.querySelector("#cart .total .topCenter span")
        let botTotal = document.querySelector("#cart .total .bottom span")
        let topTotalNum = Number(topTotal.innerHTML.replace(/[\$\,]/g, ''));
        let totTotalNum = Number(element.closest(".del").previousElementSibling.innerHTML.replace(/[\$\,]/g, ''));
        let diff = topTotalNum - totTotalNum;
        topTotal.innerHTML = "$" + diff.toLocaleString();
        botTotal.innerHTML = "$" + diff.toLocaleString();

        getCount(JSON.parse(localStorage.getItem("basket"))); // sayacı güncelle
    })
})

let basketData = JSON.parse(localStorage.getItem("basket"));
if (basketData && basketData.length > 0) {
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
