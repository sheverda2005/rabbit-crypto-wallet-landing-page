const burger = document.querySelector('.burger')
const burger_menu = document.querySelector(".burger_menu")
const body = document.querySelector("body")
burger.addEventListener("click", ()=> {
    burger.classList.toggle("active")
    burger_menu.classList.toggle("active")
    body.classList.toggle("burger_active")
})