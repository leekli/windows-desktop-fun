// Selectors
const taskbarTime = document.getElementById("taskbar_time_p");
const taskbarTimeTooltip = document.getElementById("date_time_tooltip");
const startMenuButton = document.getElementById("start_menu");
const myComputerIcon = document.getElementById("my_computer");
const recycleBinIcon = document.getElementById("recycle_bin");
const myDocumentsIcon = document.getElementById("my_documents");
const internetExplorerIcon = document.getElementById("internet_explorer");
const msnMessengerIcon = document.getElementById("msn_messenger");
const startMenuModal = document.getElementById("start_menu_modal");

// Start Menu Event Listeners
startMenuButton.addEventListener("click", startMenuClick);
window.onclick = function (event) {
  if (event.target === startMenuModal) {
    startMenuModal.style.display = "none";
    startMenuClick();
  }
};

// Desktop Icons Event Listeners
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

myComputerIcon.addEventListener("dblclick", () => {
  alert("This will eventually load 'My Computer' 🧐");
});

let startMenuClickedFlag = false;

// Find the time and date logic
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const currentTimeStamp = new Date();
const currentMins = currentTimeStamp.getMinutes();
const minsIsOneNum =
  currentMins.toString().length === 1
    ? `0${currentTimeStamp.getMinutes()}`
    : `${currentTimeStamp.getMinutes()}`;
const currentTime = `${currentTimeStamp.getHours()}:${minsIsOneNum}`;
const todaysDate = `${
  days[currentTimeStamp.getDay()]
} ${currentTimeStamp.getDate()} ${
  months[currentTimeStamp.getMonth()]
} ${currentTimeStamp.getFullYear()}`;

// Insert HTML
taskbarTime.innerText = currentTime;
taskbarTimeTooltip.innerText = todaysDate;

// Functions
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
