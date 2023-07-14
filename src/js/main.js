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

if (stunde >= 6 && stunde < 12) {
  document.getElementById("greeting").textContent = "Guten Morgen";
} else if (stunde >= 12 && stunde < 18) {
  document.getElementById("greeting").textContent = "Guten Tag";
} else if (stunde >= 18 && stunde < 22) {
  document.getElementById("greeting").textContent = "Guten Abend"
} else {
  document.getElementById("greeting").textContent = "Gute Nacht";
}

// for dark mode
function myFunction() {
   const element = document.body;
   element.classList.toggle("light-mode");
}
