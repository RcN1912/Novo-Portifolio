const menu = document.querySelector('.Menu')
const ButtonMenu_Open = document.querySelector('.ButtonMenu_Open')
const ButtonMenu_close = document.querySelector('.ButtonMenu_close')
const MenuItem = document.querySelector('.MenuItem')

ButtonMenu_Open.addEventListener('click', function(){
    menu.classList.add('Menu_Open')
})

ButtonMenu_close.addEventListener('click', function(){
    menu.classList.remove('Menu_Open')
})
MenuItem.addEventListener('click',function(){
    menu.classList.remove('Menu_Open')
})