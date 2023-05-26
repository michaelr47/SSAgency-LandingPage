const hamburgerMenu = document.getElementById('hamburgerMenu');
const breakTags = document.querySelectorAll('.br');
const dropdownNav = document.querySelector('.dropdown');
const innerWidth = () => {
    let widthOfScreen = window.innerWidth;
    if (widthOfScreen <= 768) {
        hamburgerMenu.style.display = 'block';
    } else {
        hamburgerMenu.style.display = 'none';
    }

    if (widthOfScreen <= 915) {
        for (let i = 0; i < breakTags.length; i++) {
           breakTags[i].remove(); 
        } 
    }
}

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
