var menuHolder = document.getElementById('menuHolder')
var siteBrand = document.getElementById('siteBrand')
function menuToggle() {
    if (menuHolder.className === "drawMenu") menuHolder.className = ""
    else menuHolder.className = "drawMenu"
}
if (window.innerWidth < 426) siteBrand.innerHTML = "Polytropic"
window.onresize = function () {
    if (window.innerWidth < 420) siteBrand.innerHTML = "Polytropic HR"
    else siteBrand.innerHTML = "Polytropic HR | Consultancy"
}


// popup 
document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    var closeIcon = document.getElementById("close-icon");
    var popupTitle = document.getElementById("popup-title");
    var popupMessage = document.getElementById("popup-message");
  
    closeIcon.addEventListener("click", function() {
      popup.style.display = "none";
    });
  
    // Set the content of the popup
    setTimeout(function() {
      popupTitle.textContent = "New Opening";
      popupMessage.textContent = "3 accountant needed. Apply now!.";
      popup.style.display = "block";
    }, 2000);
  });
  
  