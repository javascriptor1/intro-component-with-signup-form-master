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
    errorMessages[0].classList.toggle("hidden");
    errorIcons[0].classList.toggle("hidden");
  } else {
    errorIcons[0].classList.add("hidden");
    errorMessages[0].classList.add("hidden");
    firstNameStatus = true;
  }

  if (lastName == "" || lastName == null) {
    errorMessages[1].classList.toggle("hidden");
    errorIcons[1].classList.toggle("hidden");
  } else {
    errorIcons[1].classList.add("hidden");
    errorMessages[1].classList.add("hidden");
    lastNameStatus = true;
  }
  if (password == "" || password == null) {
    errorMessages[3].classList.toggle("hidden");
    errorIcons[3].classList.toggle("hidden");
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
    emailStatus = true;
  } else {
    errorMessages[2].classList.toggle("hidden");
    errorIcons[2].classList.toggle("hidden");
  }

  // if all forms filled with correct value , a post request will be sent to httpbing.org test server
  if (firstNameStatus && lastNameStatus && emailStatus && passowrdStatus) {
    subscribeform[0].submit();
  } else {
    alert("An error eccured. Try again later ⛔");
  }
});
