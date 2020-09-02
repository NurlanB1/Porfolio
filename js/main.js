document.addEventListener('DOMContentLoaded', function() {



    /* ------------ Navigation Scroll -------------- */
    const navlink = document.querySelectorAll('[href^="#nav__"]')
    navlink.forEach(e => e.addEventListener('click',  scrollSmooth))
    

    const button = document.querySelector('.nav-burger-button');
    const menu = document.querySelector('.nav-menu');
    function scrollSmooth(e) {
        e.preventDefault();
        navToggle('close')
        let href = e.target.closest('a').getAttribute('href');
        let el = document.querySelector(href);
        let elCoord = el.getBoundingClientRect().top;
        let scrollTop = window.pageYOffset || document.documentElement.scrollLeft;
        let topCoord = elCoord + scrollTop;

        window.scrollTo({ top: el.getBoundingClientRect().top + scrollTop, behavior: 'smooth' })
    }
    

    /* ----------------- Burger button ------------------ */

    button.addEventListener('click',() => {navToggle('toggle')})
    function navToggle(state) {
        if(state == 'toggle') {
            button.classList.toggle('close');
            menu.classList.toggle('open');
            document.querySelector('body').classList.toggle('lock')
        } else if('close') {
            button.classList.remove('close');
            menu.classList.remove('open');
            document.querySelector('body').classList.remove('lock')
        }
    }
})