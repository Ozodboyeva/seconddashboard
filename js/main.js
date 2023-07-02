// aside

const sidebar = document.querySelector("aside");
const sidebarToggle = document.querySelector(".hamburger");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

if (window.innerWidth <= 1300) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}

// dark-light

const body = document.body;
const modeToggle = document.querySelector(".switch");

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});
