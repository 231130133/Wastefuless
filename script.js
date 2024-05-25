let dropdown_icon = document.querySelector(".store-header__menu .menu-icon");

dropdown_icon.addEventListener("click", function(){
    if(dropdown_icon.classList.contains('active')){
        dropdown_icon.classList.remove('active')
    } else{
        dropdown_icon.classList.add('active')
    }
})