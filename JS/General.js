// General funcionalities
const YoutubeIconImg = document.querySelectorAll('.youtubeIcon img');
const YoutubeIcon = document.querySelectorAll('.youtubeIcon');

YoutubeIconImg.forEach(function(YoutubeIconImg) {
  YoutubeIconImg.addEventListener('click', reloadPage);
});





function reloadPage(){ 
  location.reload();
}