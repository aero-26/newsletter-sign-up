"use strict";

const body = document.getElementsByTagName("body")[0];

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const inputField = document.getElementsByTagName("input")[0];

const errorWarning = document.getElementsByTagName("label")[1];

const eMailFocus = document.getElementsByTagName("input")[0];

const submitBtn = document.getElementsByTagName("button")[0];

const checkEmail = () => {
  if (emailRegex.test(eMailFocus.value) || eMailFocus.value === "") {
    inputField.classList.remove("error");
    errorWarning.classList.add("hide");
  } else {
    inputField.classList.add("error");
    errorWarning.classList.remove("hide");
  }
};

const checkEmailTimeOut = setInterval(checkEmail, 100);
