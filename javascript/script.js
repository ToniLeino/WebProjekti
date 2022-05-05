    // Author : Eetu Huttula
    //header toggle buttoni
    const TOGGLE_BUTTON = document.getElementsByClassName('toggle-button')[0]
const NAVBAR_LINK = document.getElementsByClassName('navbar-links')[0]

TOGGLE_BUTTON.addEventListener('click', () => {
  NAVBAR_LINK.classList.toggle('active')
})