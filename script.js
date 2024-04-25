"use strict";

// Selecting the elements and also defining regex conditions
const body = document.getElementsByTagName("body")[0];
const registrationPage = document.getElementsByTagName("div")[0];
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const inputField = document.getElementsByTagName("input")[0];
const errorWarning = document.getElementsByTagName("label")[1];
const eMailFocus = document.getElementsByTagName("input")[0];
const submitBtn = document.getElementsByTagName("button")[0];
const confirmMsg = document.getElementsByClassName("confirm-msg")[0];
const dismissBtn = document.getElementsByTagName("button")[1];
const emailId = document.getElementsByTagName("b")[0];

// Checking for valid elements
const checkEmail = () => {
  if (emailRegex.test(eMailFocus.value) || eMailFocus.value === "") {
    inputField.classList.remove("error");
    errorWarning.classList.add("hide");
  } else {
    inputField.classList.add("error");
    errorWarning.classList.remove("hide");
  }
};

submitBtn.addEventListener("click", (e) => {
  if (emailRegex.test(eMailFocus.value)) {
    registrationPage.classList.add("hide");
    confirmMsg.classList.remove("hide");
    emailId.textContent = eMailFocus.value;
  }
});

dismissBtn.addEventListener("click", () => {
  confirmMsg.classList.add("hide");
  registrationPage.classList.remove("hide");
  eMailFocus.value = "";
});

const checkEmailTimeOut = setInterval(checkEmail, 100);
