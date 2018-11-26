import render from '../templates/friends.hbs';


function ApiVk() {

  const myfriends = document.querySelector('.myfriends');
  //const choicelist = document.querySelector('.choicelist');

  function auth () {

    VK.init ({
      apiId:6762647
    });

    return new Promise((resolve, reject) => {

      VK.Auth.login(data => {
        if (data.session) {
          resolve();
        } else {
          reject(new Error('Не удалось авторизироваться'));
        }
      }, 2);
    });
  }

  function callAPI(method, params) {
    params.v = '5.92';

    return new Promise((resolve, reject) => {
      VK.api(method, params, (data) => {
          if (!data.error) {
              resolve(data.response);
          } else {
              reject(new Error(`Не удалось вызвать: ${method}`));
          }
      });

  });

  }

  new Promise (resolve => window.onload = resolve)
    .then(() =>auth())
    .then(() => callAPI ('friends.get', {fields: 'photo_50' , order: 'random'}))
    .then( response => {
      myfriends.innerHTML = render(response);
    } )
   
}


export {
  ApiVk
}