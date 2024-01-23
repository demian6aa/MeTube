const catBarContainer = document.querySelector('.CatBarContainer');
const catButtons = catBarContainer.querySelectorAll('.CatButton');
const MoveButtons = document.querySelectorAll('.moveButton button');

let isDragging = false;


// Side buttons








const sideButtonsVisibility = (scrollAmmount) => {
  let maxScrollAmount = catBarContainer.scrollWidth - catBarContainer.clientWidth; 
  MoveButtons[0].parentElement.style.display = scrollAmmount <= 0 ? 'none' : 'flex';
  MoveButtons[1].parentElement.style.display = maxScrollAmount - scrollAmmount <= 1 ? 'none' : 'flex';
};



MoveButtons.forEach(button => {
  button.addEventListener('click', () => {
    let scrollWidth = catBarContainer.scrollLeft += button.id === `left` ? -200 : 200; 
    sideButtonsVisibility(scrollWidth);
  });
});







// End Side buttons

catButtons.forEach(CatButton => {
  CatButton.addEventListener("click", () => {
    catBarContainer.querySelector('.active').classList.remove("active");
    CatButton.classList.add("active");
  })
});


//Dragging controls

const dragging = (e) => {
  if (!isDragging) return;
  catBarContainer.classList.add('dragging');
  catBarContainer.scrollLeft -= e.movementX;
  sideButtonsVisibility(catBarContainer.scrollLeft);
}
const stopDragging = () => {
  isDragging = false;
  catBarContainer.classList.remove('dragging');
}

//End Dragging controls

catBarContainer.addEventListener('mousedown', () => isDragging=true);
catBarContainer.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', stopDragging);