setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("date").innerHTML = d.toLocaleTimeString();
}