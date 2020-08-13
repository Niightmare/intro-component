function validateEmail(email) {
  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

function validateForm(elements) {
  for (i = 0; i < elements.length; i++) {
    let input_id = elements[i].id;
    let input = document.querySelector(`#${input_id}`);
    let message = input.nextElementSibling;

    if (input_id != "email") {
      input.value == ""
        ? (message.classList.add("fa-error"),
          message.nextElementSibling.classList.add("message-error"))
        : (message.classList.remove("fa-error"),
          message.nextElementSibling.classList.remove("message-error"));
    } else {
      !validateEmail(input.value)
        ? (message.classList.add("fa-error"),
          message.nextElementSibling.classList.add("message-error"))
        : (message.classList.remove("fa-error"),
          message.nextElementSibling.classList.remove("message-error"));
    }
  }
}

function validate() {
  var inputs = document.getElementById("register-form").elements;
  validateForm(inputs);
}

let submitBtn = document.getElementById('btn-submit');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  validate();
})