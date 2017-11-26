var link = document.querySelector(".button-write-us");
var popup = document.querySelector(".modal-message");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");

var storage = localStorage.getItem("email");


link.addEventListener("click", function(evt) {
evt.preventDefault();
popup.classList.add("modal-show");

if (storage) {
username.value = storage;
email.focus();
} else {
username.focus();
}
});

close.addEventListener("click", function(evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
if (!username.value || !email.value) {
evt.preventDefault();
popup.classList.remove("modal-error");
popup.offsetWidth = popup.offsetWidth;
popup.classList.add("modal-error");
} else {
localStorage.setItem("username", username.value);
}
});

window.addEventListener("keydown", function(evt) {
if (evt.keyCode === 27) {
if (popup.classList.contains("modal-show")) {
popup.classList.remove("modal-show");
popup.classList.remove("modal-error");
}
}
});


var mapLink = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = popup.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt) {
evt.preventDefault();
mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
evt.preventDefault();
mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
if (evt.keyCode === 27) {
if (mapPopup.classList.contains("modal-show")) {
mapPopup.classList.remove("modal-show");
}
}
});


var cartLink = document.querySelector(".buy");
var cartPopup = document.querySelector(".modal-cart");
var cartClose = popup.querySelector(".modal-close");

cartLink.addEventListener("click", function(evt) {
evt.preventDefault();
cartPopup.classList.add("modal-show");
});

cartClose.addEventListener("click", function(evt) {
evt.preventDefault();
cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
if (evt.keyCode === 27) {
if (cartPopup.classList.contains("modal-show")) {
cartPopup.classList.remove("modal-show");
}
}
});
