var productContainer = document.getElementById("new-arrival");
var search = document.getElementById("search");
var productList = productContainer.querySelectorAll(".new-arrival-container");

search.addEventListener("keyup", function (event) {
  var enteredValue = event.target.value.toUpperCase();

  for (var i = 0; i < productList.length; i++) {
    var productName = productList[i].querySelector("p").textContent;
    var priceElement = productList[i].querySelector(".original-price");
    
    var productPrice = priceElement ? priceElement.textContent.toUpperCase() : '';

    if (productName.toUpperCase().indexOf(enteredValue) < 0 && productPrice.indexOf(enteredValue) < 0) {
      productList[i].style.display = "none";
    } else {
      productList[i].style.display = "block";
    }
  }
}); 

var sidenav = document.querySelector(".side-navbar");

function ShowNavBar() {
    sidenav.style.left = "0";
}

function CloseNavBar() {
    sidenav.style.left = "-60%";
}
