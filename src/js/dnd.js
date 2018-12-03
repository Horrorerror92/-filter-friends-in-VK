function dnd() {

  const source = document.querySelector('.myfriends');
  const target = document.querySelector('.choicelist');
  
          
  makeDnD([source, target]);

  function makeDnD(zones) {
  let currentDrag;

    zones.forEach(zone => {
      zone.addEventListener('dragstart', (e) => {
        currentDrag = { source: zone, node: e.target };
        e.dataTransfer.setData('Text', e.target.getAttribute('id'));
      });

      zone.addEventListener('dragover', (e) => {
        e.preventDefault();
      });

      zone.addEventListener('drop', (e) => { 
        const takeId = e.dataTransfer.getData('Text');
        const currentElemButton = document.getElementById(takeId).children[2];
        if (currentDrag) {
          e.preventDefault();
          
            zone.insertBefore(currentDrag.node, zone.nextElementSibling);
            if(e.currentTarget.classList.contains('choicelist')) {
              currentElemButton.setAttribute('class', 'list__remove');
              currentElemButton.setAttribute('src', '/src/images/cross.png');              
              } 
            else if (e.currentTarget.classList.contains('myfriends')){
              currentElemButton.setAttribute('class', 'list__add');
              currentElemButton.setAttribute('src', '/src/images/add.png');
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