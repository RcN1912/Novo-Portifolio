const menuItems = document.querySelectorAll('ul li a[href^="#');

menuItems.forEach (item =>{ //para cada item no menu adiciona um eventListener
    item.addEventListener('click', scrollToIdOnClick)
});

function scrollToIdOnClick(event) {
    const element = event.target;
    const id = element.getAttribute('href')
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top:to,
        behavior:"smooth",
    })
}
