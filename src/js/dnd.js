function dnd() {

  const source = document.querySelector('.myfriends');
  const target = document.querySelector('.choicelist');
  
          
  makeDnD([source, target]);

  function makeDnD(zones) {
  let currentDrag;

    zones.forEach(zone => {
      zone.addEventListener('dragstart', (e) => {
        currentDrag = { source: zone, node: e.target };
       console.log(y);
      });

      zone.addEventListener('dragover', (e) => {
        e.preventDefault();
      });

      zone.addEventListener('drop', (e) => {    
        if (currentDrag) {
          e.preventDefault();
            zone.insertBefore(currentDrag.node, zone.lastElementChild);
           // const imgElem = document.getElementById(takeId).children[2];
            if(e.currentTarget.classList.contains('choicelist')) {
            //  imgElem.setAttribute('class', 'list__remove');
            //  imgElem.setAttribute('src', '/src/images/cross.png');              
              } 
            else if (e.currentTarget.classList.contains('myfriends')){
            //  imgElem.setAttribute('class', 'list__add');
            //  imgElem.setAttribute('src', '/src/images/add.png');
              }
         currentDrag = null;
        }
      });
    })
  }

}

export {
  dnd
}