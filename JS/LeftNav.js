const Nav = document.getElementById('leftNavID');
const NavBack = document.querySelector('.leftNav-background');
const menuButtons = document.querySelectorAll('.menu-button');
// const Nav = document.querySelector('.leftNav');
let navBarOpen = false;

NavBack.style

NavBack.addEventListener('click', hideNav )


menuButtons.forEach(function(menuButtons) 
{
  menuButtons.addEventListener('click',alternateNav);
});


function hideNav(){
  Nav.style.transform = 'translate3D(-100%, 0,0)';
  NavBack.style.opacity = '0'
  NavBack.style.pointerEvents = 'none';
  navBarOpen = false;
}

function showNav(){
  Nav.style.transform = 'translate3D(0, 0,0)';
  NavBack.style.opacity = '100'
  NavBack.style.pointerEvents = 'all';
  navBarOpen = true;
}

//Simple function to check if the nav is open or not for the MenuButtons funcionality
function alternateNav(){
  console.log(navBarOpen);
  if(navBarOpen == true){
    hideNav();
    console.log('entra en hide');
  }else{
    console.log('entra en show');
    showNav();
  }
}


function highlightActiveTab(){
  
}