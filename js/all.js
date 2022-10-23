const nav=document.querySelector("nav");
function navOn() {
    if (window.scrollY > 0) {
      nav.classList.add("navOn");
    } else {
      nav.classList.remove("navOn");
    }
  }
  
  window.addEventListener("scroll", navOn);
  
console.log(nav);