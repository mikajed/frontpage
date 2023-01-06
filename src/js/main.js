const span = document.getElementById("date");
const date = new Date();

if (span.textContent === "") {
    span.innerText = date.toLocaleTimeString();
}

setInterval(myTimer, 1000);

function myTimer() {
    const date = new Date();
    span.innerText = date.toLocaleTimeString();
}