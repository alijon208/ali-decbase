const menu = document.getElementById("menu");
const list = document.getElementById("h-list");
const gradient = document.getElementById("gradient");
const body = document.querySelector("body")

function menuOpen()  {
    menu.classList.toggle("menu-open");
    list.classList.toggle("d-block");
    body.classList.toggle("body-hidden")
    gradient.style.display = "block"
}

gradient.addEventListener("click", () => {
    menu.classList.remove("menu-open");
    list.classList.remove("d-block");
    body.classList.remove("body-hidden")
    gradient.style.display = "none"
})
