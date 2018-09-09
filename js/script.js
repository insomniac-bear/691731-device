// JavaScript Document
var btnPopularOne = document.querySelector(".btn-one");
var slidePopularOne = document.querySelector(".item-one");
var btnPopularTwo = document.querySelector(".btn-two");
var slidePopularTwo = document.querySelector(".item-two");
var btnPopularThree = document.querySelector(".btn-three");
var slidePopularThree = document.querySelector(".item-three");

btnPopularOne.addEventListener ("click", function() {
  slidePopularOne.classList.add("active");
  if (!btnPopularTwo.checked) {
    slidePopularTwo.classList.remove("active");
  }
  if (!btnPopularThree.checked) {
    slidePopularThree.classList.remove("active");
  }
});

btnPopularTwo.addEventListener ("click", function() {
  slidePopularTwo.classList.add("active");
  if (!btnPopularOne.checked) {
    slidePopularOne.classList.remove("active");
  }
  if (!btnPopularThree.checked) {
    slidePopularThree.classList.remove("active");
  }
});

btnPopularThree.addEventListener ("click", function() {
  slidePopularThree.classList.add("active");
  if (!btnPopularTwo.checked) {
    slidePopularTwo.classList.remove("active");
  }
  if (!btnPopularOne.checked) {
    slidePopularOne.classList.remove("active");
  }
});

var btnDelivery = document.querySelector(".delivery-btn");
var slideDelivery = document.querySelector(".delivery");

btnDelivery.addEventListener ("click", function() {
  slideDelivery.classList.add("active");
  if (!btnWarranty.checked) {
    slideWarranty.classList.remove("active");
  }
  if (!btnCredit.checked) {
    slideCredit.classList.remove("active");
  }
});


var btnWarranty = document.querySelector(".warranty-btn");
var slideWarranty = document.querySelector(".warranty");

btnWarranty.addEventListener ("click", function() {
  slideWarranty.classList.add("active");
  if (!btnDelivery.checked) {
    slideDelivery.classList.remove("active");
  }
  if (!btnCredit.checked) {
    slideCredit.classList.remove("active");
  }
});

var btnCredit = document.querySelector(".credit-btn");
var slideCredit = document.querySelector(".credit");

btnCredit.addEventListener ("click", function() {
  slideCredit.classList.add("active");
  if (!btnDelivery.checked) {
    slideDelivery.classList.remove("active");
  }
  if (!btnWarranty.checked) {
    slideWarranty.classList.remove("active");
  }
});
 



var link = document.querySelector(".write-link");
      
var popup = document.querySelector(".modal-feedback");
var closePopup = document.querySelector(".modal-close");
      
link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});
      
closePopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
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