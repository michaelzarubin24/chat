"use strict";

const app = document.querySelector("#app");

function Tag(attrs = {}) {
  const { tag, cn, id, textContent, placeholder, type } = attrs;
  const element = document.createElement(tag);
  element.className = cn;

  if (id) element.id = id;
  if (textContent) element.textContent = textContent;
  if (placeholder) element.placeholder = placeholder;
  if (type) element.type = type;
  return element;
}

const form = Tag({
  tag: "form",
  cn: "form",
});

const emailInput = Tag({
  tag: "input",
  cn: "input",
  id: "email-input",
  placeholder: "Enter your email",
});

const passwordInput = Tag({
  tag: "input",
  cn: "input",
  id: "password-input",
  placeholder: "Enter your password",
  type: "password",
});

const submitButton = Tag({
  tag: "button",
  cn: "button",
  id: "submit-btn",
  textContent: "Submit",
});

form.append(emailInput, passwordInput, submitButton);

app.append(form);
// ---------------------------------------------------------------------------HIGHLIGHTER---------------------------------------------------------------------------------------
emailInput.addEventListener("keydown", highlightText);
emailInput.addEventListener("blur", removeHighlight);
passwordInput.addEventListener("keydown", highlightText);
passwordInput.addEventListener("blur", removeHighlight);

function highlightText(event) {
  event.target.style.backgroundColor = "lightblue";
}

function removeHighlight(event) {
  event.target.style.backgroundColor = "";
}
// ---------------------------------------------------------------------------VALIDATION---------------------------------------------------------------------------------------
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  function containsLettersAndNumbers(input) {
    let hasLetters = false;
    let hasNumbers = false;

    for (let char of input) {
      if (/[a-zA-Z]/.test(char)) {
        hasLetters = true;
      } else if (/[0-9]/.test(char)) {
        hasNumbers = true;
      }

      if (hasLetters && hasNumbers) {
        return true;
      }
    }

    return false;
  }

  if (
    emailValue.length > 4 &&
    passwordValue.length > 4 &&
    containsLettersAndNumbers(emailValue) &&
    containsLettersAndNumbers(passwordValue)
  ) {
    emailInput.style.backgroundColor = "lightblue";
    passwordInput.style.backgroundColor = "lightblue";
    alert("Validation successful! Congratulations!");

    submitButton.removeAttribute("disabled");
  } else {
    // Validation failed
    if (emailValue.length <= 4 || !containsLettersAndNumbers(emailValue)) {
      emailInput.style.backgroundColor = "red";
      console.log(
        "Email validation failed: Email must have more than 4 characters and contain both letters and numbers."
      );
      emailInput.focus();
    }
    if (
      passwordValue.length <= 4 ||
      !containsLettersAndNumbers(passwordValue)
    ) {
      passwordInput.style.backgroundColor = "red";
      console.log(
        "Password validation failed: Password must have more than 4 characters and contain both letters and numbers."
      );
      passwordInput.focus();
    }
    submitButton.setAttribute("disabled", "true");
  }
});
