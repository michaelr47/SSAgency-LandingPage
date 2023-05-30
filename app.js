const hamburgerMenu = document.getElementById('hamburgerMenu');
const navbarDesktop = document.querySelector('.navContainer');
const breakTags = document.querySelectorAll('.br');
const dropdownNav = document.querySelector('.dropdown');
const innerWidth = () => {
    let widthOfScreen = window.innerWidth;
    if (widthOfScreen <= 768) {
        hamburgerMenu.style.display = 'block';
        navbarDesktop.classList.add('hidden');
    
       
    } else {
        hamburgerMenu.style.display = 'none';
        navbarDesktop.classList.remove('hidden');
    
    }

    if (widthOfScreen <= 915) {
        for (let i = 0; i < breakTags.length; i++) {
           breakTags[i].remove(); 
        } 
    }
}

window.addEventListener('load', innerWidth);
window.addEventListener('resize', innerWidth);

hamburgerMenu.addEventListener('click', () => {
    if (dropdownNav.classList.contains('hidden')) {
        dropdownNav.classList.add('show');
        dropdownNav.classList.remove('hidden');
    } else {
        dropdownNav.classList.add('hidden');
        dropdownNav.classList.remove('show');
    }
})
