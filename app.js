const menuItems = document.querySelectorAll('.Menu a[href^="#"]');
menuItems.forEach (item => {
    item.addEventListener('click', scrollToIdOnClick)
})
function scrollToIdOnClick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id);

    window.scroll({
        top:to - 80,
        behavior:'smooth'
    })
}