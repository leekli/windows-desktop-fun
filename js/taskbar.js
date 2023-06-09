// JavaScript for Taskbar interactivity / DOM manipulation

// Selectors
const taskbarTime = document.getElementById("taskbar_time_p");
const taskbarTimeTooltip = document.getElementById("date_time_tooltip");

// Taskbar Date & Time Logic
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
