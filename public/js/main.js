const toggleicon = document.getElementById("toggleicon");
const nav= document.querySelector("header nav");

toggleicon.addEventListener("click", () => {
    nav.classList.toggle("show");
})