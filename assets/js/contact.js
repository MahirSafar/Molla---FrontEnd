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

function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      var map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 8
      });

      var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'Konumum'
      });
    });
  } else {
    alert('Tarayıcınız konum tabanlı işlevsellik desteklemiyor.');
  }
}

let map;

async function initMap() {

  const position = { lat: -25.344, lng: 131.031 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");


  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });



  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Uluru",
  });
}
let basket = JSON.parse(localStorage.getItem("basket"))
initMap();
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
