const menuNav = document.querySelector('.menu-nav');
const arrow = document.querySelector('.arrow')
const menuToggle = document.querySelector('i').addEventListener('click', toggleMenu);
let showMenu = false;

function toggleMenu(){
  if(!showMenu){

  menuNav.classList.add('open');
  arrow.classList.add('open');
  showMenu =  true;
}else{
  menuNav.classList.remove('open');
  arrow.classList.remove('open');

  showMenu = false;
}
}