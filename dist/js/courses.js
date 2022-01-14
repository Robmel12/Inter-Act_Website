window.addEventListener('scroll', ()=>{
  let content = document.querySelector('.courses-container');
  let fadeTitle = document.querySelector('.title-courses');
  let fadeCardsLeft = document.querySelectorAll('.courses-left');
  let fadeCardsRight = document.querySelectorAll('.courses-right');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.5;
  if(contentPosition < screenPosition){
    fadeTitle.classList.add('active');
    fadeCardsLeft.forEach(el => el.classList.add('active'));
    fadeCardsRight.forEach(el => el.classList.add('active'));
  }else{
    fadeTitle.classList.remove('active');
    fadeCardsLeft.forEach(el => el.classList.remove('active'));
    fadeCardsRight.forEach(el => el.classList.remove('active'));
    }
});
