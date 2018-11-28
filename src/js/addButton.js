function addButton() {

  const myfriends = document.querySelector('.myfriends');
  const choicelist = document.querySelector('.choicelist');

  myfriends.addEventListener('click', function(event){
    if(event.target.getAttribute('class') === 'list__add'){
      event.target.setAttribute('class', 'list__remove');
      event.target.setAttribute('src', '/src/images/cross.png');
      choicelist.appendChild(event.target.parentNode);      
    }
  })
}

export {
  addButton
}