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

// random background image
document.addEventListener('DOMContentLoaded', function () {
  const body = document.querySelector('body');
  const imgSrc = [
    './src/images/randomImages/bg1.png',
    './src/images/randomImages/bg2.jpg',
    './src/images/randomImages/bg3.jpg',
    './src/images/randomImages/bg4.png',
    './src/images/randomImages/bg5.png',
    './src/images/randomImages/bg6.jpg',
    './src/images/randomImages/bg7.jpg',
  ];
  
  const randomImg = Math.floor(Math.random() * imgSrc.length);

  body.style.backgroundImage = `url('${imgSrc[randomImg]}')`;
});

// color changer
function colorChanger() {
  document.querySelector('.me').style.color = randomColors();
  document.querySelector('p').style.color = randomColors();
}

function randomColors() {
  return 'hsl(' + (360 * Math.random()) + ',50%,50%)';
}