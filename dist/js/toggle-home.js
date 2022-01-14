const click = document.querySelector('#click');
const menu = document.querySelector('.toggle')
let showMenu = false;
click.addEventListener('click', ()=>{
if(showMenu === false){
click.classList.add('active');
menu.classList.add('active');
showMenu = true;
}else{click.classList.remove('active');
menu.classList.remove('active');
showMenu = false;}


});
