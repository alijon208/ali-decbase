const menu = document.getElementById("menu");
const list = document.getElementById("h-list");
const gradient = document.getElementById("gradient");
const open = false;

function menuOpen()  {
    menu.classList.toggle("menu-open");
    list.classList.toggle("d-block");
    gradient.style.display = "block"
}

gradient.addEventListener("click", () => {
    menu.classList.remove("menu-open");
    list.classList.remove("d-block");
    gradient.style.display = "none"
})
