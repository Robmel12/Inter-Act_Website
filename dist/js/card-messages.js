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



  



console.log(cardStyle);