// function showTime() {
//   let date = document.getElementById("date");
//   date.innerText = new Date().toLocaleTimeString();
// }

// setInterval(showTime, 1000);
// Uhrzeit
let span = document.getElementById("date");
let date = new Date();

if (span && span.textContent === "") {
  span.innerText = date.toLocaleTimeString();
}

setInterval(myTimer, 1000);

function myTimer() {
  let date = new Date();
  span.innerText = date.toLocaleTimeString();
}

const days = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

const dayElement = document.getElementById("day");
const dayOfTheWeek = new Date().getDay();
dayElement.innerText = days[dayOfTheWeek];

// Begrüßung
const jetzt = new Date();
const stunde = jetzt.getHours();

if (stunde >= 5 && stunde < 12) {
  document.getElementById("greeting").textContent = "Guten Morgen";
} else if (stunde >= 12 && stunde < 18) {
  document.getElementById("greeting").textContent = "Guten Tag";
} else if (stunde >= 18 && stunde < 22) {
  document.getElementById("greeting").textContent = "Guten Abend";
} else {
  document.getElementById("greeting").textContent = "Gute Nacht";
}

// random background image
document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  const imgSrc = [
    "./src/images/randomImages/bg1.webp",
    "./src/images/randomImages/bg2.webp",
    "./src/images/randomImages/bg3.webp",
    "./src/images/randomImages/bg4.webp",
    "./src/images/randomImages/bg5.webp",
    "./src/images/randomImages/bg6.webp",
    "./src/images/randomImages/bg7.webp",
    "./src/images/randomImages/bg8.webp",
    "./src/images/randomImages/bg9.webp",
    "./src/images/randomImages/bg10.webp",
  ];

  const randomImg = Math.floor(Math.random() * imgSrc.length);

  body.style.backgroundImage = `url('${imgSrc[randomImg]}')`;
  body.style.backgroundSize = "cover";
});

// color changer
document.querySelector(".me").style.color = randomColors();

function randomColors() {
  return "hsl(" + 360 * Math.random() + ",50%,50%)";
}

// wetter
let apiKey = config.MY_KEY;
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=de&q";

const searchBar = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const errorDisplay = document.querySelector(".error");
const weatherDisplay = document.querySelector(".weather");
const cityDisplay = document.querySelector(".city");
const tempDisplay = document.querySelector(".temp");
const humidityDisplay = document.querySelector(".humidity");
const windDisplay = document.querySelector(".wind");

function displayWeather(data) {
  cityDisplay.innerText = data.name;
  tempDisplay.innerText = Math.floor(data.main.temp) + "°C";
  humidityDisplay.innerText = data.main.humidity + "%";
  windDisplay.innerText = data.wind.speed + " km/h";

  switch (data.weather[0].main) {
    case "Clouds":
      weatherIcon.src = "src/images/clouds.png";
      break;
    case "Clear":
      weatherIcon.src = "src/images/clear.png";
      break;
    case "Rain":
      weatherIcon.src = "src/images/rain.png";
      break;
    case "Drizzle":
      weatherIcon.src = "src/images/drizzle.png";
      break;
    case "Mist":
      weatherIcon.src = "src/images/mist.png";
      break;
  }

  weatherDisplay.style.display = "block";
  errorDisplay.style.display = "none";
}

function handleFetchError() {
  errorDisplay.style.display = "block";
  weatherDisplay.style.display = "none";
}

function checkWeather(city) {
  if (city.trim() === "") {
    handleFetchError();
    return;
  }
  fetch(`${apiUrl}=${city}&appid=${apiKey}`)
    .then((response) => {
      if (!response.ok) {
        handleFetchError();
      } else {
        return response.json();
      }
    })
    .then((data) => {
      if (data) {
        displayWeather(data);
      }
    })
    .catch((error) => {
      console.error(error);
      handleFetchError();
    });
}

searchBar.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBar.value);
  }
});

searchBtn.addEventListener("click", () => {
  checkWeather(searchBar.value);
});
