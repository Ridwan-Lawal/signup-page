"use strict";

const inputEmail = document.querySelector(".input-email");
const errorField = document.querySelector(".error");
const btnSubmit = document.querySelector(".btn-submit");
const successPage = document.querySelector(".success-container");
const signUpPage = document.querySelector(".containers");
const btnDismiss = document.querySelector(".btn-dismiss");

const errorMessage = "Valid email required";
let valid = true;

// if there is any error input will be styled this way
const errorStyling = function () {
  //   when valid is false the styled applied to invalid email
  if (!valid) {
    inputEmail.classList.remove("border-gray");
    inputEmail.classList.add("border-tomato");
    inputEmail.classList.add("bg-tomato");
    inputEmail.classList.add("bg-opacity-10");
    inputEmail.classList.remove("text-darkSlateGrey");
    inputEmail.classList.add("text-tomato");
    inputEmail.classList.remove("focus:border-darkSlateGrey");
  } else {
    inputEmail.classList.remove("border-tomato");
    inputEmail.classList.add("border-gray");
    inputEmail.classList.remove("bg-tomato");
    inputEmail.classList.remove("bg-opacity-10");
    inputEmail.classList.add("text-darkSlateGrey");
    inputEmail.classList.remove("text-tomato");
    inputEmail.classList.add("focus:border-darkSlateGrey");
  }
};

// validation for valid characters
const validCharsValidate = function (arr, inputValue) {
  const indexDot = arr.findIndex((chars) => chars === ".");
  const beforeDot = indexDot - 1;
  const afterDot = indexDot + 1;

  // counting the @
  const countAt = arr.reduce(
    (count, cur) => (cur === "@" ? ++count : count),
    0
  );

  let error;

  if (!inputValue) {
    // if there's no input value
    errorField.classList.remove("hidden");
    errorField.textContent = "Email must not be left empty";
    valid = false;
  }
  //   having two dots(.) or having a dot(.) followed by an @ error
  else if (arr[afterDot] === "@" || arr[beforeDot] === "@") {
    // special character together
    error = errorMessage;
    errorField.classList.remove("hidden");
    errorField.textContent = error;
    valid = false;
  } else if (arr[beforeDot] === "." || arr[afterDot] === ".") {
    // special character together
    error = errorMessage;
    errorField.classList.remove("hidden");
    errorField.textContent = error;
    valid = false;
  } else if (arr[0] === "." || arr[arr.length - 1] === ".") {
    // email starting or ending with dot(.)
    error = errorMessage;
    errorField.classList.remove("hidden");
    errorField.textContent = error;
    valid = false;
  } else if (countAt > 1 || countAt === 0) {
    // for the possibility of 2 @ in an email
    //   condition of having more than 1 @ or 0 @
    error = errorMessage;
    errorField.classList.remove("hidden");
    errorField.textContent = error;
    valid = false;
  } else if (!inputValue.includes(".") || !inputValue.includes("@")) {
    // if email doesn't contain . or @
    error = errorMessage;
    errorField.classList.remove("hidden");
    errorField.textContent = error;
    valid = false;
  } else {
    // if email is valid
    valid = true;
  }

  errorStyling();
};

// for invalid characters not meant to be in the a standard email
const invalidChars = function (inputValue) {
  const chars = `"~¬|$%/^[+!%^&(?:+)*+(?: #''`.split("");

  chars.forEach((char) => {
    if (inputValue.includes(char)) {
      errorField.classList.remove("hidden");
      errorField.textContent = errorMessage;
      valid = false;
      errorStyling();
    }
  });
};

// clicking event
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const emailToArr = inputEmail.value.split("");
  const emailInputValue = inputEmail.value;

  validCharsValidate(emailToArr, emailInputValue);
  invalidChars(emailInputValue);
  console.log(valid);

  if (valid) {
    signUpPage.classList.add("hidden");
    inputEmail.value = "";
    successPage.classList.remove("hidden");
    successPage.classList.add("grid");
  }
});

// // dismissing message
btnDismiss.addEventListener("click", () => {
  signUpPage.classList.remove("hidden");
  successPage.classList.add("hidden");
  successPage.classList.remove("grid");
  container;
});

// what to do
// add error border and background
/* and add the functionality of what
 happens when the email is  valid i.e redirecting to the
 success page*/
