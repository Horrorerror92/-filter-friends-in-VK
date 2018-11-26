import render from '../templates/friends.hbs';

function ApiVk() {

  console.log('index works');
 
  const containers = document.querySelector('.containers');
  
  const items = [
    {name: 'gsg',  lastname: 'lasr' , id: 0 , photo: './images/cross.png'},
    {name: 'sdds',  lastname: 'sdad', id: 1 , photo: './images/cross.png'},
    {name: 'gqeqwe',  lastname: 'lasdasdr', id: 2 , photo: './images/cross.png'},
  
  ];
  
  containers.innerHTML = render({items});
}


export {
  ApiVk
}