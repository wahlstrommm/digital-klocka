let t = setInterval(myClock, 1000);

function myClock() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  h = document.getElementById("h");
  h.innerHTML = time;
}
myClock();
