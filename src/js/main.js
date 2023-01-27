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