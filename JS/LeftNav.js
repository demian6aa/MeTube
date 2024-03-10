const Nav = document.getElementById('leftNavID');
const NavBack = document.querySelector('.leftNav-background');
const menuButtons = document.querySelectorAll('.menu-button');



// Things to change on lefVar mid to big
const midLeftNav = document.querySelector('.leftNav-mid');
const bigLeftNav = document.querySelector('.leftNav-Big');
const catBar = document.querySelector('.CatBar');
const catBarButton = document.querySelector('.moveButton:last-child');
const main = document.getElementById('main');
const body = document.getElementById('body');
const videoFeed = document.querySelector('.video-feed');
// const Nav = document.querySelector('.leftNav');
let navBarOpen = false;
let navBarOpenBig = false;
let userSelect = false;
// Media phases
const smallWidthMedia = window.matchMedia('(max-width:1315px)');
const bigWidthMedia = window.matchMedia('(min-width:1315px');
const smallestWidthMedia = window.matchMedia('(max-width:765px)');
// margins for mid and big nav
const bigNavLeftMargin = '240px';
const mediumNavLeftMargin = '64px';
// 
window.addEventListener('resize',adjustMediaQueries); 




// let mouseIsInNav;
// bigLeftNav.addEventListener('mouseover', () => {
//   mouseIsInNav = true;
//   // console.log(mouseIsInNav);
//   // stopMainScroll();
  
// });
// bigLeftNav.addEventListener('mouseleave', () => {
//   mouseIsInNav = false;
//   // console.log(mouseIsInNav);  
//   // restartMainScroll(); 
  
// },{passive: false});

// bigLeftNav.addEventListener('wheel', (event) => {
//   event.stopPropagation();
//   const wheelEvent = new WheelEvent('wheel', event);
//   // Dispatch the wheel event on the other element
//   main.dispatchEvent(wheelEvent);

// });

// main.addEventListener('wheel', (event) => {
//   if(mouseIsInNav){
//     event.preventDefault();
//     console.log('evento doing');
//   }
// },{passive: false});

// body.addEventListener('wheel', (event) => {
//   event.preventDefault();
//   event.stopPropagation();
// });
// bigLeftNav.addEventListener('wheel', (event) => {
//   if(mouseIsInNav){
//     main.preventDefault();
//        event.preventDefault();
//        console.log('efecto');
//   }
// },{passive:false});


// bigLeftNav.addEventListener('wheel', (event) =>{

//   main.dispatchEvent(preventMainScrollEvent);
//   main.addEventListener('wheel', preventMainScroll, {passive:false});
//   // preventMainScroll(event);
// },{passive:false});
// function preventMainScroll(event){
//   event.preventDefault();
//   console.log('effect on main');
// };

NavBack.addEventListener('click', hideNav )
menuButtons.forEach(function(menuButtons) 
{
  menuButtons.addEventListener('click',alternateNav);
});







// funciones que resumen las funcionalidades abrir y cerrar las nav
function hideNav(){
  hideSmallNav();
  if(bigWidthMedia.matches){
    hideBigNav();
  }
  restartMainScroll();
}
function showNav(){
  if(smallWidthMedia.matches){
    showSmallNav();
    stopMainScroll();
  }else if(bigWidthMedia.matches){
    showBigNav();
  }
  
}

//Simple function to check if the nav is open or not for the MenuButtons funcionality
function alternateNav(){
  checkBigNavOpen();
  UserLeftNavSelected(window.innerWidth); 
  if(navBarOpen == true || navBarOpenBig == true){
    hideNav();
  }else{
    showNav();
  }
}

// Comprobamos si la nav grande esta abierta o no en funcion del margen de los otros elementos
function checkBigNavOpen(){
  if(parseFloat(window.getComputedStyle(main).marginLeft)>70){
    navBarOpenBig=true;
  }else{
    navBarOpenBig=false;
  }
}




// Media queries adjust
function adjustMediaQueries(){
  if(smallWidthMedia.matches){
    hideBigNav();

  }if(bigWidthMedia.matches){
    if(!userSelect){
      showBigNav();
    }
    hideSmallNav();
    restartMainScroll()
  }if(smallestWidthMedia.matches){
    hideMidNav();
  }
}


// Funciones para mostrar y ocultar las diferentes navs
function showSmallNav(){
  Nav.style.transform = 'translate3D(0, 0,0)';
  NavBack.style.opacity = '100'
  NavBack.style.pointerEvents = 'all';
  navBarOpen = true;
}
function hideSmallNav(){
  Nav.style.transform = 'translate3D(-100%, 0,0)';
  NavBack.style.opacity = '0'
  NavBack.style.pointerEvents = 'none';
  navBarOpen = false;
}
function showBigNav(){
  //Mostramos la nav grande
  bigLeftNav.style.display = 'block';
  // Recolocamos la catbar y el main al tamaño grande
  catBar.style.marginLeft = bigNavLeftMargin;
  main.style.marginLeft = bigNavLeftMargin;
  catBarButton.style.marginRight = bigNavLeftMargin;
}
function hideBigNav(){
  //Ocultamos la lefNav grannde
  bigLeftNav.style.display = 'none';
  //Y mostramos la media
  midLeftNav.style.display = 'block';
  // Recolocamos la catbar y el main al tamaño medio
  catBar.style.marginLeft = mediumNavLeftMargin;
  main.style.marginLeft = mediumNavLeftMargin;
  catBarButton.style.marginRight = mediumNavLeftMargin;
}
function hideMidNav() {
  midLeftNav.style.display = 'none';
  catBar.style.marginLeft = '0px';
  main.style.marginLeft = '0px';
  catBarButton.style.marginRight = '0px';
}



// En caso de que el usuario haya escogido en alg un momento entre las nav, anulamos parte de las media query
function UserLeftNavSelected(windowWidth){
  if (windowWidth >= bigWidthMedia.matches){
    userSelect = true;
  }
}


function stopMainScroll(){
  body.style.height = '100%';
  body.style.overflowY = 'hidden';	
}
function restartMainScroll(){
  body.style.height = '';
  body.style.overflowY = '';	
}