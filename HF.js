window.addEventListener("resize", () => {
  window.location.reload();
});

function HOME() {
  window.location.href = "./index.html";
}

let currentPage = document.getElementById("currentPage").innerHTML;
console.log("Current page : ", currentPage);

const isMobile =
  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
  window.innerWidth < window.innerHeight;

// Header ==============================================================================

const header = document.getElementById("header");
header.classList.add("CC");
header.classList.add("HF");

const logoH = document.createElement("div");
const logoH_Img = document.createElement("img");
logoH.addEventListener("click", HOME);
logoH.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  window.open("./index.html", "_blank");
});

function createHeader() {
  logoH_Img.src = "./assets/logo-fM.png";
  logoH_Img.alt = "Company Logo";

  logoH.appendChild(logoH_Img);
  header.appendChild(logoH);

  logoH.classList.add("pointer");
  if (isMobile) logoH_Img.style.width = "80%";

  const links = document.createElement("div");
  const pages = [
    "Home",
    "Projects",
    "CONNECT",
  ];
  for (let i = 0; i < pages.length; i++) {
    const page = document.createElement("div");
    page.innerHTML = pages[i];
    page.id = pages[i].toLowerCase().split(" ")[0];
    console.log(page.id);

    page.classList.add("CC");
    if (isMobile) {
      page.classList.add("pageM");
    } else {
      page.classList.add("page");
    }
    links.appendChild(page);
  }

  if (isMobile) {
    links.style.width = "100%";
    const panel = document.createElement("div");
    panel.classList.add("CC");
    panel.classList.add("side-panel");
    panel.style.right = "-100%";

    const overlay = document.createElement("div");
    const menuBtn = document.createElement("div");
    const menuBtnImg = document.createElement("img");
    menuBtnImg.src = "./assets/menu.svg";
    menuBtn.appendChild(menuBtnImg);
    menuBtn.classList.add("CC");
    menuBtn.classList.add("BTN_30");
    menuBtn.classList.add("PG_0");
    menuBtn.addEventListener("click", () => {
      panel.style.right = "0";
      overlay.classList.add("overlay");
      document.body.appendChild(overlay);
    });
    header.appendChild(menuBtn);

    const closeBtn = document.createElement("div");
    const closeBtnImg = document.createElement("img");
    closeBtnImg.src = "./assets/close-white.svg";
    closeBtnImg.style.width = "60%";
    closeBtn.appendChild(closeBtnImg);

    closeBtn.classList.add("CC");
    closeBtn.classList.add("BTN_30");
    closeBtn.classList.add("PG_0");
    closeBtn.classList.add("close");
    closeBtn.classList.add("close-R");
    closeBtn.addEventListener("click", () => {
      document.body.removeChild(overlay);
      panel.style.right = "-100%";
    });
    panel.appendChild(closeBtn);
    panel.appendChild(links);

    document.body.appendChild(panel);
  } else {
    links.classList.add("CC");
    links.style.gap = "10px";
    header.appendChild(links);
  }

  // Hight light current page ---------------------------------------------------------
  if (isMobile) {
    document.getElementById(currentPage).style.backgroundColor = "var(--colorS)";
  } else {
    document.getElementById(currentPage).style.borderBottom =
      "var(--colorS) 4px solid";
    document.getElementById(currentPage).style.color = "var(--colorS)";
  }

  // Menu pages ---------------------------------------------------------

  document.getElementById("home").addEventListener("click", HOME);

  document.getElementById("services").addEventListener("click", () => {
    window.location.href = "./xServices.html";
  });

  document.getElementById("projects").addEventListener("click", () => {
    window.location.href = "./xProjects.html";
  });

  document.getElementById("media").addEventListener("click", () => {
    window.location.href = "./xMedia.html";
  });

  document.getElementById("foundation").addEventListener("click", () => {
    window.location.href = "./xFoundation.html";
  });

  document.getElementById("careers").addEventListener("click", () => {
    window.location.href = "./xCareers.html";
  });

  document.getElementById("about").addEventListener("click", () => {
    window.location.href = "./xAbout.html";
  });
}
createHeader();

// Footer ============================================================================
const footer = document.getElementById("footer");
footer.classList.add("CC");
footer.classList.add("HF");

const logoF = document.createElement("div");
const logoF_Img = document.createElement("img");
logoF.addEventListener("click", HOME);
logoF.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  window.open("./index.html", "_blank");
});

function createFooter() {
  // logoF_Img.src = isMobile ? "./assets/logo-fM.png" : "./assets/logo-f.png";
  logoF_Img.src = "./assets/logo-fM.png" ;
  logoF_Img.alt = "Company Logo";
  logoF_Img.style.width = "80%";
  logoF.appendChild(logoF_Img);
  logoF.classList.add("pointer");
  footer.appendChild(logoF);

  copyright = document.createElement("div");
  copyright.innerHTML = "All rights reserved. 2025";
  footer.appendChild(copyright);

  const socialsss = document.createElement("div");
  socialsss.classList.add("CC");
  socialsss.classList.add("PG00");
  socialsss.style.gap = "6px";

  const socialsList = ["youtube", "facebook", "instagram", "linkedin"];
  for (let i = 0; i < socialsList.length; i++) {
    const social = document.createElement("div");
    social.classList.add("CC");
    social.classList.add("PG00");
    social.classList.add("social");
    social.classList.add("pointer");
    social.id = socialsList[i];

    const img = document.createElement("img");
    img.src = `./assets/socials/${socialsList[i]}.svg`;
    img.alt = socialsList[i];
    social.appendChild(img);

    socialsss.appendChild(social);
  }
  footer.appendChild(socialsss);

  document.getElementById("youtube").addEventListener("click", () => {
    window.open(
      "https://www.youtube.com/@GreenWarriors-Goa?app=desktop",
      "_blank"
    );
  });

  document.getElementById("facebook").addEventListener("click", () => {
    window.open("https://www.facebook.com/Sampurnearth/photos", "_blank");
  });

  document.getElementById("instagram").addEventListener("click", () => {
    window.open(
      "https://www.instagram.com/sampurnearth_f0undati0n?igsh=dTJsOGNwMTBnYnIz",
      "_blank"
    );
  });

  document.getElementById("linkedin").addEventListener("click", () => {
    window.open(
      "https://www.linkedin.com/company/sampurn-e-arth-environment-solutions-pvt--ltd-/",
      "_blank"
    );
  });
}
createFooter();

// ============================================================================

let hfPadding = isMobile ? "0 20px" : "0 40px";
header.style.padding = hfPadding;
footer.style.padding = hfPadding;
