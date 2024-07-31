const form = document.querySelector('#form')
const emailInput = document.querySelector('#email')
const emailErrorMsg = document.querySelector('#email-error')
const submitBtn = document.querySelector('#btn__submit-form')
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


function handleEmailInput(e) {
  if(e.target.value.length === 0) {
    emailErrorMsg.textContent = ''
    emailErrorMsg.classList.remove('invalid-email')
    emailInput.classList.remove('invalid')
  }
}


function handleSubmit(e) {
  // e.preventDefault();

  const isValid = emailInput.value.length === 0 || emailRegExp.test(emailInput.value)
  if(emailInput.value.length === 0)  {
    emailErrorMsg.textContent = 'Please entered an invalid email address'
    emailErrorMsg.classList.add('invalid-email')
    emailInput.classList.add('invalid')
  }
  else if(!isValid) {
    emailErrorMsg.textContent = 'Valid Email Required'
    emailErrorMsg.classList.add('invalid-email')
    emailInput.classList.add('invalid')
  } else {
    emailErrorMsg.textContent = ''
    emailErrorMsg.classList.remove('invalid-email')
    emailInput.classList.remove('invalid')
  }
}



emailInput.addEventListener('input', handleEmailInput)

form.addEventListener('submit', handleSubmit)