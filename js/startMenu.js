// JavaScript for Start Menu interactivity / DOM manipulation

// Selectors
const startMenuButton = document.getElementById("start_menu");
const startMenuModal = document.getElementById("start_menu_modal");
const startMenuItem = document.getElementsByClassName("start_menu_highlight");

// Event Listeners
Array.from(startMenuItem).forEach((item) => {
  item.addEventListener("mouseover", startMenuHoverOn);
  item.addEventListener("mouseleave", startMenuHoverOff);
});

startMenuButton.addEventListener("click", startMenuClick);

// Closes the Start Menu Modal if screen is clicked outside of the modal
window.onclick = (event) => {
  if (event.target === startMenuModal) {
    startMenuModal.style.display = "none";
    startMenuClick();
  }
};

// Event Listener Functions
let startMenuClickedFlag = false;

function startMenuClick() {
  if (startMenuClickedFlag === false) {
    startMenuButton.src = "./assets/start_button_clicked.png";
    startMenuClickedFlag = true;
    startMenuModal.style.display = "block";
  } else {
    startMenuButton.src = "./assets/start_classic_icon.png";
    startMenuClickedFlag = false;
    startMenuModal.style.display = "none";
  }
}

function startMenuHoverOn(event) {
  event.target.style.backgroundColor = "#10286F";
  event.target.style.color = "white";
}

function startMenuHoverOff(event) {
  event.target.style.backgroundColor = "";
  event.target.style.color = "black";
}
