var menuHolder = document.getElementById("menuHolder");
var siteBrand = document.getElementById("siteBrand");
function menuToggle() {
  if (menuHolder.className === "drawMenu") menuHolder.className = "";
  else menuHolder.className = "drawMenu";
}
if (window.innerWidth < 426) siteBrand.innerHTML = "<img style='width:90px; height:50px;margin-left:2rem' src='./assets/images/hr-cunsultant-logo.png'>";
window.onresize = function () {
  if (window.innerWidth < 420) siteBrand.innerHTML = "<img style='width:70px; height:40px;margin-left:2rem' src='./assets/images/hr-cunsultant-logo.png'>";
  else siteBrand.innerHTML = "<img src='./assets/images/hr-cunsultant-logo.png' >";
};

//  from

const myFrom = document.getElementById("contact");
const inpFile = document.getElementById("inpFile");

myFrom.addEventListener('submit', e => {
    e.preventDefault();

    const endpoint = "upload.php";
    const formData = new FormData();
})