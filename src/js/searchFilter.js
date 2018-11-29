function searchFilter() {

 const inputLeft = document.querySelector('.input--left');
 const inputRight = document.querySelector('.input--right');

 inputLeft.addEventListener('input', () => {
  const leftcol = document.querySelectorAll('.myfriends .list__friend .list__initials');
  loadsearch (leftcol, inputLeft);
});

inputRight.addEventListener('input', () => {
  const rightcol = document.querySelectorAll('.choicelist .list__friend .list__initials');
  loadsearch (rightcol, inputRight);
});


 function loadsearch (massdata = ' ', itemInput = ' ') {
  for (let indexNum in massdata) {
    if(isMatching(massdata[indexNum].textContent, itemInput.value)) {
      for(let i = 0; i < massdata.length; i++){
        massdata[indexNum].parentNode ? massdata[indexNum].parentNode.style.display = 'flex': '';
      }
    } else if (!(isMatching(massdata[indexNum].textContent, itemInput.value))) {
        for(let i = 0; i < massdata.length; i++){
          massdata[indexNum].parentNode ? massdata[indexNum].parentNode.style.display = 'none': '';
        }
      }
    }
  }

 function isMatching(full = ' ', chunk = ' ') {

  let str = full.toLowerCase();
  let searchValue = chunk.toLowerCase();  

  if (str.indexOf(searchValue) !== -1) {

      return true;

  }

  return false;

}

}

export {
  searchFilter
}