document.addEventListener('DOMContentLoaded', function(){ 
  "use strict";


  const modal = document.querySelector('.modal__cover');
  const form = modal.querySelector('.modal');
  const closeModalButton = document.querySelector('.modal__close');
  const orderButton = document.querySelector('.order');
  const submitButton = form.querySelector('.modal__submit')
  const inputs = Array.from(form.querySelectorAll('.modal__input'));
  const labels = Array.from(form.querySelectorAll('.modal__label'));

  // ============= Открытие/закрытие модального окна =============>
  const openModal = () => {
    modal.classList.remove('hidden');
  }  

  const closeModal = () => {
    modal.classList.add('hidden');
    form.reset();
  }

  function resetFormErrors(){
    inputs.forEach(input => {
      input.classList = 'modal__input';
    })
    labels.forEach(label => {
      label.classList = 'modal__label';
      label.style.visibility = 'hidden';
    })
  }

  orderButton.addEventListener('click', () => {
    resetFormErrors()
    openModal();
  })

  closeModalButton.addEventListener('click', closeModal);
  modal.addEventListener('click', event => {
    if(event.target == event.currentTarget){
      closeModal();
    }
  })

  // ============= Валидация формы =============>

  function showInputError(form, input){
    const error = form.querySelector(`#${input.id}-error`);
    input.classList.add('modal__input_invalid');
    error.style.visibility = 'visible';
    input.classList.remove('modal__input_valid');
  }

  function hideInputError(form, input){
    const error = form.querySelector(`#${input.id}-error`);
    input.classList.remove('modal__input_invalid');
    input.classList.add('modal__input_valid');
    error.style.visibility = 'hidden';
  }

  function isValid(form, input){
    if(!input.validity.valid){
      showInputError(form, input)
    }else{
      hideInputError(form, input);
    }
  }

  function setEventListeners(form){
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        isValid(form, input);
        toggleButtonstate();
      })
    })
  }

  function hasInvalidInput (){
    return inputs.some(input => {
      return !input.validity.valid;
    })
  }

  function toggleButtonstate(){
    if(!hasInvalidInput()){
      submitButton.disabled = false;
    }else{
      submitButton.disabled = true;
    }
  }

  setEventListeners(form);

  form.addEventListener('submit', event => {
    event.preventDefault();
    closeModal();
  })



  // <<============== document's end =================>>
});
