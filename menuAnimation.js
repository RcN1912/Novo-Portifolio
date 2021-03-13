const links = document.querySelectorAll('.Menu li');
links.forEach(link =>{ 
    link.addEventListener('click',function(){
        menu.classList.remove('Menu_Open')
    })
})


