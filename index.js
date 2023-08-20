document.querySelector('.fa-bars')
        .addEventListener('click', mobileNav);

function mobileNav() {
    document.querySelector('.mobile-nav').style.display = 'block';
    document.querySelector('.fa-x').style.display = 'block';
}

document.querySelector('.fa-x')
        .addEventListener('click', closeNav);

function closeNav() {
    document.querySelector('.mobile-nav').style.display = 'none';
}
