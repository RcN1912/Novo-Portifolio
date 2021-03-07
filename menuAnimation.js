const menuItems = document.querySelectorAll('ul li a[href^="#');
const links = document.querySelectorAll('.Menu li');

menuItems.forEach (item =>{ //para cada item no menu adiciona um eventListener
    item.addEventListener('click', scrollToIdOnClick)
});
links.forEach(link =>{ //para cada li adiciona um eventListener click
    link.addEventListener('click',function(){
        menu.classList.remove('Menu_Open')
    })
})

function scrollToIdOnClick(event) {
    const element = event.target;
    const id = element.getAttribute('href')
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top:to,
        behavior:"smooth",
    })
}
