// VARIABLES
//Search bar  
const searchBar = document.querySelector('.searchBox-container');
const searchBarCloseArrow = searchBar.querySelector('.searchBox-backArrow');
const searchMainButton = document.querySelector('.SearchB');
const searchBarTextField = document.querySelectorAll('.searchBox-text');
const searchBarMedia = window.matchMedia('(min-width:640px)');

//Search bar history
const searchBarHistoryCM = document.querySelectorAll('.searchBox-history');

// Upload 
const uploadButton = document.querySelector('.UploadB');
const uploadButtonCM = document.querySelector('.dropdown-menu');

// Notificattions
const notifButton = document.querySelector('.NotificationsB');
const notifCM = document.querySelector('.notifications-container');

// My channel
const channelButton = document.querySelector('.channelButton');
const channelCM = document.querySelector('.channelCM-container');



// LISTENERS
// Search bar 
searchBarCloseArrow.addEventListener('click',closeExpandedSearchBar);
document.addEventListener('click',closeExpandedSearchBar);
searchMainButton.addEventListener('click',openExpandedSearchBar);
// Seach bar CM
searchBarTextField.forEach(element => {
  element.addEventListener('focus', showSearchBarCM); 
  element.addEventListener('blur', hideSearchBarCM); 
});

window.addEventListener('resize',adjusthistoryWidth); 


// Upload button 
uploadButton.addEventListener('click', openUploadCM);
document.addEventListener('click',closeUploadCM);
// Notifications 
notifButton.addEventListener('click',openNotificationCM);
document.addEventListener('click',closeNotificationCM);
//MyChannel
channelButton.addEventListener('click', openChannelCM)
document.addEventListener('click',closeChannelCM);

// FUNCTIONS
// Search bar functions
function openExpandedSearchBar(){
  searchBar.style.display = 'flex';
  event.stopPropagation();
}
function closeExpandedSearchBar() {
  if(!searchBar.contains(event.target) || searchBarCloseArrow.contains(event.target) || searchBarMedia.matches){
    searchBar.style.display = 'none';
  }

}

// Search bar CM
function showSearchBarCM(){
  adjusthistoryWidth();
  if(searchBarTextField[1].display!='none'){
    searchBarHistoryCM[1].style.display = 'block';
  }
  if(searchBarTextField[0].display!='none'){
    searchBarHistoryCM[0].style.display = 'block';
  }
}
function hideSearchBarCM(){
  if(searchBarTextField[1] != document.activeElement){
    searchBarHistoryCM[1].style.display = 'none';
  }
  if(searchBarTextField[0].display!= document.activeElement){
    searchBarHistoryCM[0].style.display = 'none';
  }
}
function adjusthistoryWidth(){
  if(searchBarTextField[1].display!='none'){
    searchBarHistoryCM[1].style.width = parseFloat(window.getComputedStyle(searchBarTextField[1]).width)+'10'+'px';
  }
  if(searchBarTextField[0].display!='none'){
    searchBarHistoryCM[0].style.width = parseFloat(window.getComputedStyle(searchBarTextField[0]).width)+'10'+'px';
  }
}


// Upload button functions
function openUploadCM(){
  event.stopPropagation()
  if(uploadButtonCM.style.display !== 'block'  ){
    uploadButtonCM.style.display = 'block';  
  }else{
    uploadButtonCM.style.display = 'none';
  }
}
function closeUploadCM(){
  if(!uploadButtonCM.contains(event.target)){
    uploadButtonCM.style.display = 'none';
  }
}

// Notificantions button functions
function openNotificationCM(){
  if(notifCM.style.display == 'flex'){
    notifCM.style.display = 'none'; 
  }else{
    notifCM.style.display = 'flex';
  }
  event.stopPropagation();
  
}function closeNotificationCM(){
  if(!notifCM.contains(event.target)){
    notifCM.style.display = 'none';
  }
}

// MyChannel
function openChannelCM(){
  if(channelCM.style.display == 'block'){
    channelCM.style.display = 'none';
  }else{
    channelCM.style.display = 'block'; 
  }
  event.stopPropagation();
}
function closeChannelCM(){
  
  if(!channelCM.contains(event.target)){
    channelCM.style.display = 'none';
  }
}





// console.log(event.target);


// 
function resetInputs(){
  searchBarTextField.value = '';
}
window.onload =resetInputs;


/*
CM => Context Menu


*/