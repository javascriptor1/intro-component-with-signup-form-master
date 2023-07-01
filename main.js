"use strict";

const subscribeform = document.getElementsByTagName("form");
const errorMessages = document.querySelectorAll(".error-message");
const errorIcons = document.querySelectorAll('[src="images/icon-error.svg"]');
let firstNameStatus = false;
let lastNameStatus = false;
let emailStatus = false;
let passowrdStatus = false;

subscribeform[0].addEventListener("submit", (event) => {
  // prevent form to submit - stop the default behavior
  event.preventDefault();

  // get all input value
  const firstName = document.querySelector('[placeholder="First Name"]').value;
  const lastName = document.querySelector('[placeholder="Last Name"]').value;
  const email = document.querySelector('[placeholder="Email Address"]').value;
  const password = document.querySelector('[placeholder="Password"]').value;

  // throw error message if field is empty string
  if (firstName == "" || firstName == " " || firstName == null) {
    errorMessages[0].classList.remove("hidden");
    errorIcons[0].classList.remove("hidden");
     // this is needed to reset Error status message for clicks after the first click - read comments below
    firstNameStatus = false;
  } else {
    errorIcons[0].classList.add("hidden");
    errorMessages[0].classList.add("hidden");
    firstNameStatus = true;
  }

  if (lastName == "" || lastName == null) {
    errorMessages[1].classList.remove("hidden");
    errorIcons[1].classList.remove("hidden");
    lastNameStatus = false;
  } else {
    errorIcons[1].classList.add("hidden");
    errorMessages[1].classList.add("hidden");
    lastNameStatus = true;
  }
  if (password == "" || password == null) {
    errorMessages[3].classList.remove("hidden");
    errorIcons[3].classList.remove("hidden");
    passowrdStatus = false;
  } else {
    errorIcons[3].classList.add("hidden");
    errorMessages[3].classList.add("hidden");
    passowrdStatus = true;
  }

  // check for password field
  const regex_pattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex_pattern.test(email)) {
    errorIcons[2].classList.add("hidden");
    errorMessages[2].classList.add("hidden");
    emailStatus = true; // this is needed to reset Error status message for clicks after the first click
  } else {
    errorMessages[2].classList.remove("hidden");
    errorIcons[2].classList.remove("hidden");
    emailStatus = false;
  }

  // if all forms filled with correct value , a post request will be sent to httpbing.org test server
  // this is not required in the challenge , I just did it as it was nice excercie to do.
  
  if (firstNameStatus && lastNameStatus && emailStatus && passowrdStatus) {
    subscribeform[0].submit();
  }
});


/*
when we submit the form for first time with all required fields entered correctly, things works well. 

However , let's imagine a scenario where if we leave one field empty and other 3 fields filled correctly then try to
submit for first time , the status variable  will be set [true] for the 3 fields filled correctly.

if the user fill in the 4th field he did not fill first time , but clear any of other 3 fields filled with first try ,
then all status variable will be true despite one field is empty.  Hence with every submit , we have to reset status
variable so we make sure we submit only when all 4 are true.

*/