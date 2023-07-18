let nav = document.querySelector('nav');
let header = document.querySelector('header');
let hamburger = document.querySelector('.hamburger');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header nav a');

/*===== MENU SHOW =====*/ 
hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
});

window.onscroll = () => {
                /*===== CHANGE COLOR HEADER =====*/ 
    header.classList.toggle('header-shadow', window.scrollY > 100);

    /*========= Close Navbar after clicking a link =========*/
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-open');
        });
    });

    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
    sections.forEach(sec => {
        let top = window.scrollY; 
        let Offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= Offset && top < Offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('anchor-active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('anchor-active');
            });
        }
    });
}