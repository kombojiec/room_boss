document.addEventListener('DOMContentLoaded', function(){ 
  "use strict";


  const modal = document.querySelector('.modal');
  const inputs = modal.querySelectorAll('modal__input');

  const str = 'ghnghn.ru'
  str.match(/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm)

  modal.addEventListener('submit', event => {
    event.preventDefault();
    console.log('submit')

  })

  function validateForm(form){
    
  }


  // <<============== document's end =================>>
});
