let showMegaMenu = document.getElementById('showMegaMenu');
let megaMenu = document.querySelector('.mega-menu');
showMegaMenu.addEventListener('click', () => {
  megaMenu.classList.toggle('active');
})
window.addEventListener('scroll', () => {
  megaMenu.classList.remove('active')
})