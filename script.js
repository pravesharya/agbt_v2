function isMobileOrTablet() {
  const userAgent = navigator.userAgent.toLowerCase();
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(
    userAgent
  );
}

let current = document.getElementById("currentPage").innerHTML;
console.log("script.js >> Current page : ", currentPage);

function initSatellite(size = 32) {
  const sat = new Image();
  if (current == "home") {
    sat.src = "./assets/sat.gif";
  } else {
    sat.src = "../assets/sat.gif";
  }
  let cursor = document.createElement("div");
  cursor.style.position = "fixed";
  cursor.style.width = `${size}px`;
  cursor.style.height = `${size}px`;
  cursor.style.backgroundImage = `url(${sat.src})`;
  cursor.style.backgroundSize = "contain";
  cursor.style.pointerEvents = "none";
  cursor.style.zIndex = "9999";
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX - size / 2 + "px";
    cursor.style.top = e.clientY - size / 2 + "px";
  });

let angle = 0;
let speed = 0.25; // Rotation speed in degrees per frame
function rotateCursor() {
    angle = (angle + speed) % 360;
    cursor.style.transform = `rotateZ(${angle}deg)`;
    requestAnimationFrame(rotateCursor);
}
rotateCursor();
}

function hideSatellite() {
  const cursor = document.querySelector('div[style*="sat.gif"]');
  if (cursor) {
    cursor.style.display = "none";
  }
}

function showSatellite() {
  const cursor = document.querySelector('div[style*="sat.gif"]');
  if (cursor) {
    cursor.style.display = "block";
  }
}

let isPortrait = false;
if (isMobileOrTablet()) {
  console.log("Device is mobile or tablet");
  isPortrait = true;
} else {
  console.log("Device is desktop or laptop");
  initSatellite(150);
}