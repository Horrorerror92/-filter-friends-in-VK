function removeButton() {

  const myfriends = document.querySelector('.myfriends');
  const choicelist = document.querySelector('.choicelist');

  choicelist.addEventListener('click', function(event){
    if(event.target.getAttribute('class') === 'list__remove'){
      event.target.setAttribute('class', 'list__add');
      event.target.setAttribute('src', '/src/images/add.png');
      myfriends.appendChild(event.target.parentNode);       
    }
  })
}

export {
  removeButton
}