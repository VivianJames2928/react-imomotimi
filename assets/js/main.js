function toggleMode() {
  const themeLink = document.getElementById('themeStyle');
  const toggleIcon = document.getElementById('toggle');
  const topWhite = document.getElementById('topsmoke');
  const bottomWhite = document.getElementById('bottomsmoke');
  // const topGrey = document.getElementById('topgrey');
  // const bottomGrey = document.getElementById('bottomgrey');


  if (themeLink.getAttribute('href') === '../assets/css/light.css') {
    //Switch to Dark Mode
    themeLink.setAttribute('href', '../assets/css/dark.css');
    toggleIcon.className = "fa-solid fa-toggle-off toggleon";
    topWhite.src = '../assets/img/shape-top-dark-grey-80.png';
    bottomWhite.src = '../assets/img/shape-bottom-dark-grey-80.png';
    // topGrey.src = '../assets/img/shape-top-dark-grey-80.png';
    // bottomGrey.src = '../assets/img/shape-bottom-dark-grey-80.png';
  } else {
    // Switch to Light Mode
    themeLink.setAttribute('href', '../assets/css/light.css');
    toggleIcon.className = 'fa-solid fa-toggle-on toggleon';
    topWhite.src = '../assets/img/shape-top-grey-80.png';
    bottomWhite.src = '../assets/img/shape-bottom-grey-80.png';
    // topGrey.src = '../assets/img/shape-top-grey-80.png';
    // bottomGrey.src = '../assets/img/shape-bottom-grey-80.png';
  }
  }

  
const scrollTopButton = document.getElementById('arrow');

 scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
 })

const navbar = document.getElementById('navBar');
window.addEventListener('scroll', () => {
  const scrolly = window.scrollY;
  if (scrolly > 50) {
    //adjust offset
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove('scrolled');
  }
});

