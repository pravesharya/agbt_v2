window.addEventListener("resize", () => {
  window.location.reload();
});

function HOME() {
  window.location.href = "../index.html";
}

let currentPage = document.getElementById("currentPage").innerHTML;
console.log("Current page : ", currentPage);

// Header ==============================================================================

const header = document.getElementById("header");
header.classList.add("CC");
header.classList.add("HF");
header.classList.add("space-between");

header.addEventListener("mouseover", () => {
  if (typeof hideSatellite === "function") {
    hideSatellite();
    header.style.cursor = "default";
  }
});
header.addEventListener("mouseout", () => {
  if (typeof showSatellite === "function") {
    showSatellite();
  }
});

const logoH = document.createElement("div");
const logoH_Img = document.createElement("img");

logoH.classList.add("CC");
logoH.classList.add("PG00");
logoH.classList.add("logo");
logoH.classList.add("pointer");

logoH_Img.src = "../assets/logo2.svg";
logoH_Img.alt = "Company Logo";
logoH.appendChild(logoH_Img);

const links = document.createElement("div");
const overlay = document.createElement("div");
const menuBtn = document.createElement("div");
const menuBtnImg = document.createElement("img");

logoH.addEventListener("click", HOME);
logoH.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  window.open("../index.html", "_blank");
});

function createHeader() {
  logoH.id = "logo_H";
  header.appendChild(logoH);

  const pages = ["Home", "Services", "Projects", "About Us"];
  for (let i = 0; i < pages.length; i++) {
    const page = document.createElement("div");
    page.innerHTML = pages[i];
    page.id = pages[i].toLowerCase().split(" ")[0];
    console.log(page.id);

    page.classList.add("CC");
    if (isPortrait) {
      page.classList.add("pageM");
    } else {
      page.classList.add("page");
    }
    links.appendChild(page);
  }

  // Side Panel =========================================================
  if (isPortrait) {
    links.style.width = "100%";
    const panel = document.createElement("div");
    panel.classList.add("CC");
    panel.id = "side-panel";
    panel.style.right = "-100%";

    menuBtnImg.src = "../assets/menu.svg";
    menuBtn.appendChild(menuBtnImg);
    menuBtn.classList.add("CC");
    menuBtn.classList.add("btn_32s");
    menuBtn.classList.add("PG00");
    menuBtn.addEventListener("click", () => {
      panel.style.right = "0";
      overlay.classList.add("overlay");
      document.body.appendChild(overlay);
    });
    header.appendChild(menuBtn);

    const closeBtn = document.createElement("div");
    const closeBtnImg = document.createElement("img");
    closeBtnImg.src = "../assets/menu_X.svg";
    closeBtn.appendChild(closeBtnImg);
    closeBtn.classList.add("CC");
    closeBtn.classList.add("PG00");
    closeBtn.classList.add("btn_32s");
    closeBtn.classList.add("btn_X");
    closeBtn.addEventListener("click", () => {
      document.body.removeChild(overlay);
      panel.style.right = "-100%";
    });
    panel.appendChild(closeBtn);
    panel.appendChild(links);
    document.body.appendChild(panel);
  } else {
    links.classList.add("CC");
    header.appendChild(links);
  }

  // Hight light current page ---------------------------------------------------------
  if (isPortrait) {
    document.getElementById(currentPage).style.backgroundColor =
      "var(--prpl_1)";
  } else {
    document.getElementById(currentPage).style.borderBottom =
      "var(--prpl_1) 4px solid";
    document.getElementById(currentPage).style.color = "var(--prpl_1)";
  }

  // Menu pages ---------------------------------------------------------

  document.getElementById("home").addEventListener("click", HOME);

  document.getElementById("services").addEventListener("click", () => {
    window.location.href = "./services.html";
  });

  document.getElementById("projects").addEventListener("click", () => {
    window.location.href = "./projects.html";
  });

  document.getElementById("about").addEventListener("click", () => {
    window.location.href = "./about.html";
  });
}
createHeader();

// Footer ============================================================================
const footer = document.getElementById("footer");
footer.classList.add("CC");
footer.classList.add("HF");
footer.classList.add("space-between");

footer.addEventListener("mouseover", () => {
  if (typeof hideSatellite === "function") {
    hideSatellite();
    footer.style.cursor = "default";
  }
});
footer.addEventListener("mouseout", () => {
  if (typeof showSatellite === "function") {
    showSatellite();
  }
});

const copyright = document.createElement("div");
const socialsss = document.createElement("div");

function createFooter() {
  copyright.innerHTML = "ATC | All rights reserved 2025";
  copyright.classList.add("CC");
  copyright.id = "copyright";
  
  socialsss.classList.add("CC");
  socialsss.id = "socials";
  
  footer.appendChild(copyright);
  footer.appendChild(socialsss);

  const socialsList = ["WhatsApp", "Email", "linkedin"];
  for (let i = 0; i < socialsList.length; i++) {
    const social = document.createElement("div");
    social.classList.add("CC");
    social.classList.add("PG00");
    social.classList.add("social");
    social.classList.add("pointer");
    social.id = socialsList[i].toLowerCase();

    const img = document.createElement("img");
    // img.src = `../assets/socials/${socialsList[i]}.svg`;
    img.src = `../assets/socials/social-${i+1}.svg`;
    img.alt = socialsList[i];
    social.appendChild(img);

    socialsss.appendChild(social);
  }

  document.getElementById("whatsapp").addEventListener("click", () => {
    window.open("https://wa.me/919904082117", "_blank");
  });

  document.getElementById("email").addEventListener("click", () => {
    window.open("mailto:contact@agboost.in", "_blank");
  });

  document.getElementById("linkedin").addEventListener("click", () => {
    window.open(
      "https://www.linkedin.com/company/agboost-tech-consultancy/ ",
      "_blank"
    );
  });
}
createFooter();



// ============================================================================

let hfPadding = isPortrait ? "0 20px" : "0 40px";
header.style.padding = hfPadding;
footer.style.padding = hfPadding;
footer.style.paddingRight = "9rem"

const whatsapp = document.getElementById("whatsapp");
whatsapp.style.display = "none"; // Hide WhatsApp icon for now