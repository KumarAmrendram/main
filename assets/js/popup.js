document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    var closeIcon = document.getElementById("close-icon");
    var popupTitle = document.getElementById("popup-title");
    var popupMessage = document.getElementById("popup-message");
    var section = document.getElementsByTagName("section");
    closeIcon.addEventListener("click", function() {
      popup.style.display = "none";
    });
  
    // Check if the popup has been shown in the current session
    var popupShown = sessionStorage.getItem("popupShown");
    if (!popupShown) {
      // Set the content of the popup
      popupTitle.textContent = "New Job Opening!";
      popupMessage.textContent = "We have exciting job opportunities available. Apply now!";
  
      // Show the popup after a delay of 2 seconds
      setTimeout(function() {
        popup.style.display = "block";
      }, 2000);
      // Set the flag to indicate the popup has been shown in the current session
      sessionStorage.setItem("popupShown", "true");
    }
  });
  