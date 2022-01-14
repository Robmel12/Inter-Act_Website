//toggle-nav-home


//carousel fade
const next =  document.querySelector('.next');
const prev = document.querySelector('.prev');

const slider = document.querySelector('.slider');

const slides = Array.from(slider.children);

let sectionIndex = 0;



function reset() {
  for (let i = 0; i < slider.children.length; i ++){
    slider.children[i].style.opacity = 0;
  }
 }
 const hideShowArrows = (prev, next, slides, Index) => {
   
   if(sectionIndex === 0){
     prev.classList.add('is-hidden');
     next.classList.remove('is-hidden');
     
   }else if (sectionIndex === slides.length - 1){
     prev.classList.remove('is-hidden');
     next.classList.add('is-hidden')
   }else {
     prev.classList.remove('is-hidden');
     next.classList.remove('is-hidden');
   }
 }

hideShowArrows(prev, next, slides, sectionIndex);
next.addEventListener('click', function() {
 
 reset();
 sectionIndex = sectionIndex < slides.length - 1 ? sectionIndex + 1 : slides.length-1;
 slider.children[sectionIndex].style.opacity = 1;
 const nextSlide = sectionIndex;
 hideShowArrows(prev, next, slides, nextSlide);
 

});
prev.addEventListener('click', function() {
 
 reset();
 sectionIndex = sectionIndex > 0 ? sectionIndex - 1: 0;
 slider.children[sectionIndex].style.opacity = 1;
 const prevSlide = sectionIndex;
 hideShowArrows(prev, next, slides, sectionIndex);
 return console.log(sectionIndex);
 

});
//carousel card message animation
const cardStyle =  document.querySelectorAll('.card-style');
const cardMessage = document.querySelectorAll('.message');

for(let i =0; i < cardStyle.length; i++){

  cardStyle[i].addEventListener( 'click', ()=>{
    cardMessage[i].classList.add('active');
    cardStyle[i].classList.add('deactivate');
  });
  cardMessage[i].addEventListener('click', ()=>{
    cardMessage[i].classList.remove('active');
    cardStyle[i].classList.remove('deactivate');
  })

}

//course card animation
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

