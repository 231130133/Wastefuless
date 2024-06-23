let storeDropdownIcon = document.querySelector(".store-header__menu .menu-icon");

storeDropdownIcon.addEventListener("click", () => {
    storeDropdownIcon.classList.toggle("active")
})

let carouselRight = document.querySelector("body > .right")
let carouselLeft = document.querySelector("body > .left");
let carouselCounter = 0

carouselRight.addEventListener("click", () =>{
    if(document.body.classList.contains("store-main")){
        let categoryList = document.querySelector(".category-list");
        let categoryCards = Array.from(document.querySelectorAll(".category-list > a"));
        let x = window.matchMedia("(max-width: 1200px)")
        let addCounter;

        if(x.matches){
            addCounter = 3;
        } else{
            addCounter = 4;
        }
        
        categoryList.innerHTML = "";
        categoryCards = categoryCards.slice(addCounter).concat(categoryCards.slice(0, addCounter))
        categoryCards.forEach(card =>{
            categoryList.append(card)
        })
    } else if(document.body.classList.contains("store-category")){
        let foodList = document.querySelector(".food-list");
        let foodListRect = foodList.getBoundingClientRect();
        if(!(foodListRect.x-800 < -foodList.scrollWidth)){
            foodList.style.translate = foodList.style.translate.slice(0,-2) - 300 + "px";
        }
        console.log(foodList.style.translate)
    }

})

carouselLeft.addEventListener("click", () =>{
    if(document.body.classList.contains("store-main")){
        let categoryList = document.querySelector(".category-list");
        let categoryCards = Array.from(document.querySelectorAll(".category-list > a"));
        let x = window.matchMedia("(max-width: 1200px)")
        let addCounter;

        if(x.matches){
            addCounter = 3;
        } else{
            addCounter = 4;
        }
        
        categoryList.innerHTML = "";
        categoryCards = categoryCards.slice(-addCounter).concat(categoryCards.slice(0, -addCounter))
        categoryCards.forEach(card =>{
            categoryList.append(card)
        })
    } else if(document.body.classList.contains("store-category")){
        let foodList = document.querySelector(".food-list");
        let foodListRect = foodList.getBoundingClientRect();
        console.log(foodListRect.x)
        if(foodListRect.x < 83){
            foodList.style.translate = +foodList.style.translate.slice(0,-2) + 300 + "px";
        }
    }

})

let mediaCon = window.matchMedia("(max-width: 900px)")

mediaCon.addEventListener("change", () => {
    let foodList = document.querySelector(".food-list");
    if(foodList) foodList.style.translate = "0";
})