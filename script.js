console.log('probe');

const navSllide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    // liku petru animation 
    const navlinks = document.querySelectorAll('.nav-links li');
    //toggle nav 
    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');

        // animate links 
        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 2}s`;
            }
        });
        // burger animation 

        burger.classList.toggle('.toggle');







    });



}
navSllide();
const buton = document.querySelector('.btn09');
const daniel = function () {
    console.log('clicked');
    buton.classList.add('buton')
}
