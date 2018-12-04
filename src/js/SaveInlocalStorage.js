function SaveInlocalStorage () {
  const saveButton = document.querySelector('.footer__button');
  const friendsInStorage = localStorage;
  const friendsInObj = {};

  saveButton.addEventListener('click', function(){
    const choicelist = document.querySelectorAll('.choicelist li');

    for(let i = 0; i < choicelist.length; i++){
      friendsInObj[i] = choicelist[i].getAttribute('id');
    }
    friendsInStorage.data = JSON.stringify(friendsInObj);
    alert('Текущий список сохранен');
  })
}

export {
  SaveInlocalStorage
}