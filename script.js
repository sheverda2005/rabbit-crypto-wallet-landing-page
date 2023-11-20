const burger = document.querySelector('.burger')
const burger_menu = document.querySelector(".burger_menu")
const body = document.querySelector("body")
const favourite_assets_card = document.querySelectorAll(".favourite_assets_card")
const assets_cards_circle_items = document.querySelector(".assets_cards_circle_items")
const container_favourite_assets_cards = document.querySelector(".container_favourite_assets_cards")
const wrapper_favourite_assets_cards = document.querySelector(".wrapper_favourite_assets_cards")

let number_circle;
let newDivs = []


open_window()
window.addEventListener("resize", ()=> {
    if (window.innerWidth > 1190) {
        number_circle = favourite_assets_card.length/3;
        container_favourite_assets_cards.style.transform = `translateX(0px)`
        wrapper_favourite_assets_cards.style.width = favourite_assets_card[0].clientWidth*3 + 40*3 + "px" ;
        circle_active()
        if (newDivs.length > number_circle) {
           for (let i = newDivs.length; i > number_circle; i--) {
               const item = document.querySelectorAll(".assets_cards_circle_item")
               if (item.length !== 0) {
                   assets_cards_circle_items.removeChild(item[0])
                   newDivs.splice(i-1, 1);
               }
           }
            item_on_click()
            circle_active()
        }
        if (newDivs.length === 0) {
            for (let i = 0; i < number_circle; i++) {
                let newDiv = document.createElement("div")
                newDivs.push(newDiv)
                generate_circle(newDiv)
            }
            item_on_click()
            circle_active()
        }
    } else if (window.innerWidth <= 1190) {
        number_circle = favourite_assets_card.length/2;
        container_favourite_assets_cards.style.transform = `translateX(0px)`
        wrapper_favourite_assets_cards.style.width = favourite_assets_card[0].clientWidth*2 + 40*2   + "px" ;
        circle_active()
        for (let i = newDivs.length; i < number_circle; i++) {
            let newDiv = document.createElement("div")
            newDivs.push(newDiv)
            generate_circle(newDiv)
        }
        item_on_click()
        circle_active()
    }
    if (window.innerWidth < 890){
        number_circle = favourite_assets_card.length
        container_favourite_assets_cards.style.transform = `translateX(0px)`
        wrapper_favourite_assets_cards.style.width = favourite_assets_card[0].clientWidth + 40 + "px" ;
        circle_active()
        for (let i = newDivs.length; i < number_circle; i++) {
            let newDiv = document.createElement("div")
            newDivs.push(newDiv)
            generate_circle(newDiv)
        }
        item_on_click()
        circle_active()
    }
    if (window.innerWidth < 721){
        container_favourite_assets_cards.style.transform = `translateX(0px)`
        wrapper_favourite_assets_cards.style.width = favourite_assets_card[0].clientWidth + 20 + "px" ;
        circle_active()
        for (let i = newDivs.length; i < number_circle; i++) {
            let newDiv = document.createElement("div")
            newDivs.push(newDiv)
            generate_circle(newDiv)
        }
        item_on_click()
        circle_active()
    }
    if (window.innerWidth < 370){
        container_favourite_assets_cards.style.transform = `translateX(0px)`
        wrapper_favourite_assets_cards.style.width = favourite_assets_card[0].clientWidth + 10 + "px" ;
        circle_active()
        for (let i = newDivs.length; i < number_circle; i++) {
            let newDiv = document.createElement("div")
            newDivs.push(newDiv)
            generate_circle(newDiv)
        }
        item_on_click()
        circle_active()
    }
 })

function open_window() {
    if (window.innerWidth > 1190) {
        number_circle = favourite_assets_card.length/3;
        wrapper_favourite_assets_cards.style.width = favourite_assets_card[0].clientWidth*3 + 40*3 + "px" ;
        for (let i = 0; i < number_circle; i++) {
            let newDiv = document.createElement("div")
            newDivs.push(newDiv)
            generate_circle(newDiv)
        }
    } else if (window.innerWidth > 890) {
        number_circle = favourite_assets_card.length/2;
        wrapper_favourite_assets_cards.style.width = favourite_assets_card[0].clientWidth*2 + 40*2 + "px" ;
        for (let i = 0; i < number_circle; i++) {
            let newDiv = document.createElement("div")
            newDivs.push(newDiv)
            generate_circle(newDiv)
        }
        item_on_click()
        circle_active()
        return;
    }
    if (window.innerWidth > 721) {
        number_circle = favourite_assets_card.length;
        wrapper_favourite_assets_cards.style.width = favourite_assets_card[0].clientWidth + 40 + "px" ;
            for (let i = 0; i < number_circle; i++) {
                let newDiv = document.createElement("div")
                newDivs.push(newDiv)
                generate_circle(newDiv)
            }
        item_on_click()
        circle_active()
        return;
    }
    if (window.innerWidth > 370) {
        number_circle = favourite_assets_card.length;
        container_favourite_assets_cards.style.transform = `translateX(0px)`
        wrapper_favourite_assets_cards.style.width = favourite_assets_card[0].clientWidth + 20 + "px" ;
        circle_active()
        for (let i = 0; i < number_circle; i++) {
            let newDiv = document.createElement("div")
            newDivs.push(newDiv)
            generate_circle(newDiv)
        }
        item_on_click()
        circle_active()
        return;
    }
    if (window.innerWidth < 370) {
        number_circle = favourite_assets_card.length;
        container_favourite_assets_cards.style.transform = `translateX(0px)`
        wrapper_favourite_assets_cards.style.width = favourite_assets_card[0].clientWidth + 10 + "px" ;
        circle_active()
        for (let i = 0; i < number_circle; i++) {
            let newDiv = document.createElement("div")
            newDivs.push(newDiv)
            generate_circle(newDiv)
        }
        item_on_click()
        circle_active()
        return;
    }

    circle_active()
    item_on_click()
}

function generate_circle(newDiv) {
    newDiv.classList.add("assets_cards_circle_item")
    assets_cards_circle_items.appendChild(newDiv)
}


burger.addEventListener("click", ()=> {
    burger.classList.toggle("active")
    burger_menu.classList.toggle("active")
    body.classList.toggle("burger_active")
})


function item_on_click() {
    let assets_cards_circle_item = document.querySelectorAll(".assets_cards_circle_item")
    assets_cards_circle_item.forEach((item, index) => {
        item.addEventListener("click", ()=> {
            assets_cards_circle_item.forEach(item => {
                item.classList.remove("active")
            })
            item.classList.add("active")
            let width = container_favourite_assets_cards.offsetWidth
            container_favourite_assets_cards.style.transform = `translateX(-${width*index}px)`
            container_favourite_assets_cards.style.transition = "1s ease"
        })
    })
}

function circle_active() {
    let assets_cards_circle_item = document.querySelectorAll(".assets_cards_circle_item")
    assets_cards_circle_item.forEach((item, index) => {
        if (index === 0) {
            item.classList.add('active')
            return;
        }
        item.classList.remove('active')
    })
}