const next=document.querySelector(".next"),prev=document.querySelector(".prev"),slider=document.querySelector(".slider"),slides=Array.from(slider.children);let sectionIndex=0;function reset(){for(let e=0;e<slider.children.length;e++)slider.children[e].style.opacity=0}slides[0].style.opacity=1;const hideShowArrows=(e,s,t,i)=>{0===sectionIndex?(e.classList.add("is-hidden"),s.classList.remove("is-hidden")):sectionIndex===t.length-1?(e.classList.remove("is-hidden"),s.classList.add("is-hidden")):(e.classList.remove("is-hidden"),s.classList.remove("is-hidden"))};hideShowArrows(prev,next,slides),next.addEventListener("click",(function(){reset(),sectionIndex=sectionIndex<slides.length-1?sectionIndex+1:slides.length-1,slider.children[sectionIndex].style.opacity=1;hideShowArrows(prev,next,slides)})),prev.addEventListener("click",(function(){reset(),sectionIndex=sectionIndex>0?sectionIndex-1:0,slider.children[sectionIndex].style.opacity=1;hideShowArrows(prev,next,slides)}));let counter=1;setInterval((()=>{if(counter>slides.length-1)reset(),sectionIndex=0,counter=1,slides[0].style.opacity=1,hideShowArrows(prev,next,slides);else{reset(),sectionIndex=sectionIndex<slides.length-1?sectionIndex+1:slides.length-1,slider.children[sectionIndex].style.opacity=1;hideShowArrows(prev,next,slides),counter++}}),8e3);const cardStyle=document.querySelectorAll(".card-style"),cardMessage=document.querySelectorAll(".message"),placeholder=document.querySelectorAll(".placeholder");for(let e=0;e<cardStyle.length;e++)placeholder[e].addEventListener("mouseenter",(()=>{cardMessage[e].classList.add("active"),cardStyle[e].classList.add("deactivate")})),cardMessage[e].addEventListener("mouseleave",(()=>{cardMessage[e].classList.remove("active"),cardStyle[e].classList.remove("deactivate")}));window.addEventListener("scroll",(()=>{let e=document.querySelector(".courses-container"),s=document.querySelector(".title-courses"),t=document.querySelectorAll(".courses-left"),i=document.querySelectorAll(".courses-right");e.getBoundingClientRect().top<window.innerHeight/1.5?(s.classList.add("active"),t.forEach((e=>e.classList.add("active"))),i.forEach((e=>e.classList.add("active")))):(s.classList.remove("active"),t.forEach((e=>e.classList.remove("active"))),i.forEach((e=>e.classList.remove("active"))))}));