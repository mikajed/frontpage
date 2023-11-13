// Uhrzeit
let span = document.getElementById("date");
let date = new Date();

if (span.textContent === "") {
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


// unsplash api for random backgrounds
let endpoint = 'https://api.unsplash.com/photos/random?query=nature&client_id=l-W17KsekbI-PalepAda3zQuudk40k3KSkEg-WW3SvM';


let imageElement = document.querySelector('body');
let creator = document.querySelector('#creator');

fetch(endpoint)
  .then((response) => response.json())
  .then(function (jsonData) {
    const imageUrl = jsonData.urls.regular;

    document.body.style.backgroundImage = `url(${imageUrl})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';

    creator.innerText = jsonData.user.name;
    creator.setAttribute('href', jsonData.user.portfolio_url);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });


// color changer
function colorChanger() {
  document.querySelector('.me').style.color = randomColors();
  document.querySelector('p').style.color = randomColors();
}

function randomColors() {
  return 'hsl(' + (360 * Math.random()) + ',50%,50%)';
}