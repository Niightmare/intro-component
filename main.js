const submit = document.getElementById('btn-submit'); 
const firstName = document.getElementById('first-name'); 
const lastName = document.getElementById('last-name'); 
const email = document.getElementById('email'); 
const password = document.getElementById('password');

function validateEmail(email) {
  const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEx.test(email);
}

submit.addEventListener('submit', () => {
    console.log("Hola");
});