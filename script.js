const firstName = document.querySelector(".firstName");
const firstNameErr = document.querySelector(".firstNameErr");
const lastName = document.querySelector(".lastName");
const lastNameErr = document.querySelector(".lastNameErr");
const email = document.querySelector(".email");
const emailErr = document.querySelector(".emailErr");
const number = document.querySelector(".number");
const numberErr = document.querySelector(".numberErr");
const options = document.querySelector(".options");
const optionsErr = document.querySelector(".optionsErr");
const textarea = document.querySelector(".textarea");
const textareaErr = document.querySelector(".textareaErr");
const button = document.querySelector(".button");

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (!firstName.value) {
    firstNameErr.innerHTML = "First name required!";
  } else if (!lastName.value) {
    lastNameErr.innerHTML = "Last name required!";
  } else if (!email.value) {
    emailErr.innerHTML = "Email is required!";
  } else if (!number.value) {
    numberErr.innerHTML = "number is required!";
  } else if (!options.value) {
    optionsErr.innerHTML = "options is required!";
  } else if (!textarea.value) {
    textareaErr.innerHTML = "Report need!";
  } else {
    alert("Form submitted successfully !");
  }
});
