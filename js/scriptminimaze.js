var btnMenu=document.querySelector(".catalog-head"),catalogMenu=document.querySelector(".catalog-wrapper");btnMenu.addEventListener("click",function(e){e.preventDefault(),catalogMenu.classList.toggle("active")}),document.addEventListener("click",function(e){for(var t=e.target;t!==document;){if(t.classList.contains("btn-popular")){var o=document.querySelector("#"+t.getAttribute("data-id")),a=o.parentNode.querySelector(".active");return a&&a.classList.remove("active"),void o.classList.add("active")}t=t.parentNode}});var link=document.querySelector(".write-link"),popup=document.querySelector(".modal-feedback"),closePopup=document.querySelector(".modal-close"),form=popup.querySelector("form"),inputName=popup.querySelector("[name=username]"),inputAddress=popup.querySelector("[name=e-mail]"),inputText=popup.querySelector("[name=feedback-text]");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),inputName.focus()}),closePopup.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show")}),form.addEventListener("submit",function(e){inputName.value&&inputAddress.value&&inputText.value||(e.preventDefault(),console.log("Нужно заполнить все поля формы"))});var mapLink=document.querySelector(".mini-map"),mapPopup=document.querySelector(".modal-map"),closeMap=document.querySelector(".map-close");mapLink.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-show")}),closeMap.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),mapPopup.classList.contains("modal-show")?mapPopup.classList.remove("modal-show"):popup.classList.contains("modal-show")&&popup.classList.remove("modal-show"))});