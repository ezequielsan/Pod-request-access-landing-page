const form = document.forms.registration;
const submit = document.getElementById("submit");
const error = document.getElementsByClassName("error")[0];


submit.addEventListener("click", (e) => {
  e.preventDefault();
  
  const {email} = form;

  if(email.value.length === 0) {
    error.innerHTML = "<p>Oops! Please add your email</p>";
  }

  else if(email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1) {
    error.innerHTML = "<p>Oops! Please check your email</p>"
  } else {
      error.style.display = "none";
    }
});



