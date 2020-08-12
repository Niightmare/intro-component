var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validate() {
    let firstName = document.querySelector("#first-name");
    let next = firstName.nextElementSibling;
    firstName = firstName.value.trim();

    let lastName = document.querySelector("#last-name");
    let nextl = lastName.nextElementSibling;
    lastName = lastName.value.trim();

    let password = document.querySelector("#password");
    let nextp = password.nextElementSibling;
    password = password.value.trim();

    let email = document.querySelector("#email");
    let nexte = email.nextElementSibling;

    (firstName == "") ? (next.classList.add('fa-error'), next.nextElementSibling.classList.add("message-error")) : (next.classList.remove("fa-error"), next.nextElementSibling.classList.remove("message-error")) ;
    (lastName == "") ? (nextl.classList.add('fa-error'), nextl.nextElementSibling.classList.add("message-error")) : (nextl.classList.remove("fa-error"), nextl.nextElementSibling.classList.remove("message-error")) ;
    (password == "") ? (nextp.classList.add('fa-error'), nextp.nextElementSibling.classList.add("message-error")) : (nextp.classList.remove("fa-error"), nextp.nextElementSibling.classList.remove("message-error")) ;

    let res = re.test(String(email).toLowerCase());

    console.log(res);



  
//   var form = document.forms["register-form"].getElementsByTagName("input");
//   var form = document.getElementById("register-form").elements;



//   for (var i = 0; i < form.length; i++) {
//     console.log(i.value);
//   }
}
