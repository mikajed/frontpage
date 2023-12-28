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

// Begrüßung
const jetzt = new Date();
const stunde = jetzt.getHours();

if (stunde >= 5 && stunde < 12) {
  document.getElementById("greeting").textContent = "Guten Morgen";
  document.querySelector('.me').style.color = randomColors();
} else if (stunde >= 12 && stunde < 18) {
  document.getElementById("greeting").textContent = "Guten Tag";
  document.querySelector('.me').style.color = randomColors();
} else if (stunde >= 18 && stunde < 22) {
  document.getElementById("greeting").textContent = "Guten Abend";
  document.querySelector('.me').style.color = randomColors();
} else {
  document.getElementById("greeting").textContent = "Gute Nacht";
}

// for dark mode
// function theme() {
//   const element = document.body;
//   element.classList.toggle("light-mode");
// }

// random background image
document.addEventListener('DOMContentLoaded', function () {
  const body = document.querySelector('body');
  const imgSrc = [
    './src/images/randomImages/bg1.webp',
    './src/images/randomImages/bg2.webp',
    './src/images/randomImages/bg3.webp',
    './src/images/randomImages/bg4.webp',
    './src/images/randomImages/bg5.webp',
    './src/images/randomImages/bg6.webp',
    './src/images/randomImages/bg7.webp',
    './src/images/randomImages/bg8.webp',
    './src/images/randomImages/bg9.webp',
    './src/images/randomImages/bg10.webp',
  ];
  
  const randomImg = Math.floor(Math.random() * imgSrc.length);

  body.style.backgroundImage = `url('${imgSrc[randomImg]}')`;
  body.style.backgroundSize = 'cover';
});

// color changer
function colorChanger() {
  document.querySelector('.me').style.color = randomColors();
  document.querySelector('p').style.color = randomColors();
}

function randomColors() {
  return 'hsl(' + (360 * Math.random()) + ',50%,50%)';
}

// wetter
let apiKey = config.MY_KEY;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lang=de&q';

const searchBar = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const errorDisplay = document.querySelector('.error');
const weatherDisplay = document.querySelector('.weather');
const cityDisplay = document.querySelector('.city');
const tempDisplay = document.querySelector('.temp');
const humidityDisplay = document.querySelector('.humidity');
const windDisplay = document.querySelector('.wind');

function displayWeather(data) {
  console.log(data);

  cityDisplay.innerHTML = data.name;
  tempDisplay.innerHTML = Math.floor(data.main.temp) + '°C';
  humidityDisplay.innerHTML = data.main.humidity + '%';
  windDisplay.innerHTML = data.wind.speed + ' km/h';

  switch (data.weather[0].main) {
    case 'Clouds':
      weatherIcon.src = 'src/images/clouds.png';
      break;
    case 'Clear':
      weatherIcon.src = 'src/images/clear.png';
      break;
    case 'Rain':
      weatherIcon.src = 'src/images/rain.png';
      break;
    case 'Drizzle':
      weatherIcon.src = 'src/images/drizzle.png';
      break;
    case 'Mist':
      weatherIcon.src = 'src/images/mist.png';
      break;
  }

  weatherDisplay.style.display = 'block';
  errorDisplay.style.display = 'none';
}

function handleFetchError() {
  errorDisplay.style.display = 'block';
  weatherDisplay.style.display = 'none';
}

function checkWeather(city) {
  if (city.trim() === "") {
    handleFetchError();
    return;
  }
  fetch(`${apiUrl}=${city}&appid=${apiKey}`)
    .then(response => {
      if (!response.ok) {
        handleFetchError();
      } else {
        return response.json();
      }
    })
    .then(data => {
      if (data) {
        displayWeather(data);
      }
    })
    .catch(error => {
      console.error(error);
      handleFetchError();
    });
}

searchBar.addEventListener('keyup', event => {
  if (event.key === 'Enter') {
    checkWeather(searchBar.value);
  }
});

searchBtn.addEventListener('click', () => {
  checkWeather(searchBar.value);
});
