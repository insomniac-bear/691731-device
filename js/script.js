// JavaScript Document

document.addEventListener("click", function (e) {
  var target = e.target;

  while (target !== document) {
    if (target.classList.contains("btn-popular")) {
      var slide = document.querySelector("#" + target.getAttribute("data-id")); // Или  document.querySelector('#' + target.value)
      var currentActive = slide.parentNode.querySelector(".active");
      if (currentActive) {
        currentActive.classList.remove("active");
      }
      slide.classList.add("active");
      return;
      }
      target = target.parentNode;
    }
  }
);
 



var link = document.querySelector(".write-link");
      
var popup = document.querySelector(".modal-feedback");
var closePopup = document.querySelector(".modal-close");

var form = popup.querySelector("form");
var inputName = popup.querySelector("[name=username]");
var inputAddress = popup.querySelector("[name=e-mail]");
var inputText = popup.querySelector("[name=feedback-text]")
      
link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  inputName.focus();
});
      
closePopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt) {
  if (!inputName.value || !inputAddress.value || !inputText.value) {
    evt.preventDefault();
    console.log("Нужно заполнить все поля формы");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});





var mapLink = document.querySelector(".mini-map");

var mapPopup = document.querySelector(".modal-map");
var closeMap = document.querySelector(".map-close");

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

closeMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

  window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });