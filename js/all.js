const nav = document.querySelector("nav");
const logo = document.querySelector("#logo");

function navOn() {
  if (window.scrollY > 0) {
    nav.classList.add("navOn");
  } else {
    nav.classList.remove("navOn");
  }
}

window.addEventListener("scroll", navOn);

window.onload = () => {
  logo.classList.add("logoBigOn");
};

// window.addEventListener("scroll", logoOn);
