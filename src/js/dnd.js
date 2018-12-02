function dnd() {

  const source = document.querySelector('.myfriends');
  const target = document.querySelector('.choicelist');
  
          
  makeDnD([source, target]);

  function makeDnD(zones) {
  let currentDrag;

    zones.forEach(zone => {
      zone.addEventListener('dragstart', (e) => {
        currentDrag = { source: zone, node: e.target };
      });

      zone.addEventListener('dragover', (e) => {
        e.preventDefault();
      });

      zone.addEventListener('drop', (e) => {    
        if (currentDrag) {
          e.preventDefault();
            zone.insertBefore(currentDrag.node, zone.lastElementChild);
            if(e.currentTarget.classList.contains('choicelist')) {
                  console.log('choise');
               } else if(e.currentTarget.classList.contains('myfriends')){
                  console.log('friends');
                  
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