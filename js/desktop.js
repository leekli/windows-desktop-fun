// JavaScript for Main Desktop interactivity / DOM manipulation

// Selectors
const myComputerIcon = document.getElementById("my_computer");
const recycleBinIcon = document.getElementById("recycle_bin");
const myDocumentsIcon = document.getElementById("my_documents");
const internetExplorerIcon = document.getElementById("internet_explorer");
const msnMessengerIcon = document.getElementById("msn_messenger");

// Event Listeners
myComputerIcon.addEventListener("mouseover", desktopIconHoverOn);
myComputerIcon.addEventListener("mouseleave", desktopIconHoverOff);
recycleBinIcon.addEventListener("mouseover", desktopIconHoverOn);
recycleBinIcon.addEventListener("mouseleave", desktopIconHoverOff);
myDocumentsIcon.addEventListener("mouseover", desktopIconHoverOn);
myDocumentsIcon.addEventListener("mouseleave", desktopIconHoverOff);
internetExplorerIcon.addEventListener("mouseover", desktopIconHoverOn);
internetExplorerIcon.addEventListener("mouseleave", desktopIconHoverOff);
msnMessengerIcon.addEventListener("mouseover", desktopIconHoverOn);
msnMessengerIcon.addEventListener("mouseleave", desktopIconHoverOff);

// Event Listener Functions
function desktopIconHoverOn(event) {
  event.target.style.border = "thin solid #709de3";
  event.target.style.borderTopWidth = "2px";
  event.target.style.borderBottomWidth = "2px";
  event.target.style.borderLeftWidth = "2px";
  event.target.style.borderRightWidth = "2px";
  event.target.style.backgroundColor = "#709de3";
}

function desktopIconHoverOff(event) {
  event.target.style.border = "";
  event.target.style.borderTopWidth = "";
  event.target.style.borderBottomWidth = "";
  event.target.style.borderLeftWidth = "";
  event.target.style.borderRightWidth = "";
  event.target.style.backgroundColor = "";
}
