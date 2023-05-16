const hamburgerMenu = document.getElementById('hamburgerMenu');

const innerWidth = () => {
    let widthOfScreen = window.innerWidth;
    if (widthOfScreen <= 768) {
        hamburgerMenu.style.display = 'block';
    } else {
        hamburgerMenu.style.display = 'none';
    }
}

window.addEventListener('resize', innerWidth);
