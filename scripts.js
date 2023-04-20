const burger = document.querySelector('.menu__burger');
if (burger){
    const menu = document.querySelector('.menu__list');
    burger.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });
}
