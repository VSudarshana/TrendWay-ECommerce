var sidenav = document.querySelector(".side-navbar");

function ShowNavBar() {
    sidenav.style.left = "0";
}

function CloseNavBar() {
    sidenav.style.left = "-60%";
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
});