const emailCheck = () => {
  const emailInput = document.getElementById('email');
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailInput.value !== '' && emailInput.value.match(emailRegex)) {
    const messageSuccess = document.querySelector('.text-message');
    const inputSuccess = document.querySelector('.notify-input');
    //remove error style  (if exists)
    inputSuccess.classList.remove('notify-input-error');
    messageSuccess.classList.remove('error-message');
    // add success style
    inputSuccess.classList.add('notify-input-success');
    //add a meessage to <small> tag
    messageSuccess.innerText = 'Done ! please check your email';
    messageSuccess.classList.add('success-message');
    // show in the DOM
    messageSuccess.style.display = 'block';
  } else {
    const messageError = document.querySelector('.text-message');
    const inputError = document.querySelector('.notify-input');
    //remove success style  (if exists)
    inputError.classList.remove('notify-input-success');
    messageError.classList.remove('success-message');
    // add error style
    inputError.classList.add('notify-input-error');
    //add a meessage to <small> tag
    messageError.innerHTML = 'Please provide a valid email adress';
    messageError.classList.add('error-message');
    // show in the DOM
    messageError.style.display = 'block';
  }
};
// listen for click event
document.querySelector('.notify-btn').addEventListener('click', emailCheck);
