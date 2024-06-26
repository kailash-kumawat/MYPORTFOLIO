const menuIcon = document.querySelector("#menu-icon");
const crossIcon = document.querySelector("#cross-icon");
const menu = document.querySelector(".navBar ul");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("show");
  menuIcon.style.visibility = "hidden";
  crossIcon.style.visibility = "visible";

  if (!crossIcon.style.display == "none") {
    crossIcon.style.display = "none";
  } else {
    crossIcon.style.display = "block";
  }
});

crossIcon.addEventListener("click", () => {
  menu.classList.toggle("show");
  menuIcon.style.visibility = "visible";
  crossIcon.style.visibility = "hidden";
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 767) {
    menuIcon.style.display = "none";
    crossIcon.style.display = "none";
  } else {
    if (!menu.classList.contains("show")) {
      menuIcon.style.display = "block";
    } else {
      crossIcon.style.display = "block";
    }
  }
});


