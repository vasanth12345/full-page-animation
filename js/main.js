window.addEventListener('load',()=> {





function loaderhide() {
const loader = document.querySelector('.loader');
loader.classList.add('disp');
}

setTimeout(loaderhide, 3000);

const burger = document.querySelector('.burger');
const nav = document.querySelector('.navbar');
const atag = document.querySelectorAll('.atag');
  
burger.addEventListener('click', ()=> {
 nav.classList.toggle('active');
 burger.classList.toggle('active');
})

atag.forEach((a,index) => {
a.addEventListener('click',()=> {
 nav.classList.remove('active');
 burger.classList.remove('active');
});
});


/*  full page  */

new fullpage(".main", {
 autoScrolling:true,
 navigation: true,
 recordHistory: true,
 keyboardScrolling: true,
 controlArrows: false,
 slidesNavigation: true,
 anchors:['Home', 'Animation', 'Effects','About','Slides'],
 navigationTooltips:['Home','Animation','Effects','What WeDo','Slide'],
 showActiveTooltip: false,
 scrollingSpeed: 700,
 loopBottom: true,
 onLeave: (origin,destination,direction) => {
 	const section = destination.item;
 const h1bg = section.querySelector('.h1bg');
 const h1 = section.querySelector('.cntnt');
 const text = document.querySelector('.maintext');


 const tl = new TimelineMax({delay:0.5, ease:Power2.ease});

  tl.fromTo(h1bg,1, {y:"-30",opacity:0}, {y:0,opacity:1})


  if (destination.index === 0) {
  
  tl.fromTo(text,1, {opacity:0, x:"50"}, {opacity:1, x: "0"},'-=0.5')
  
  } 
 
  if (destination.index === 1) {
  	const banner = document.querySelector('.banner');
  tl.fromTo(banner,1, {x: "20",opacity:0}, {x: "0" ,opacity:1},'-=0.5')

  }
  
  if (destination.index === 2) {
  	const earthimg = document.querySelector('.earthimg');
  tl.fromTo(earthimg,0.5, {y: "150",opacity:0}, {y: "0" ,opacity:1},'-=1')
  }
  
  if (destination.index === 3) {
  	const earthimg = document.querySelector('.imgspace .earthimg');
  tl.fromTo(earthimg,0.5, {y: "-150",opacity:0}, {y: "0" ,opacity:1},'-=1')
  }
  
 } 
});	
});

