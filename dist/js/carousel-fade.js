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