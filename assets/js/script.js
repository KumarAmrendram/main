var menuHolder = document.getElementById("menuHolder");
var siteBrand = document.getElementById("siteBrand");
function menuToggle() {
  if (menuHolder.className === "drawMenu") menuHolder.className = "";
  else menuHolder.className = "drawMenu";
}
if (window.innerWidth < 426) siteBrand.innerHTML = "Polytropic";
window.onresize = function () {
  if (window.innerWidth < 420) siteBrand.innerHTML = "Polytropic HR";
  else siteBrand.innerHTML = "Polytropic HR | Consultancy";
};

//  from

const myFrom = document.getElementById("contact");
const inpFile = document.getElementById("inpFile");

myFrom.addEventListener('submit', e => {
    e.preventDefault();

    const endpoint = "upload.php";
    const formData = new FormData();
})