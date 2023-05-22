const fullName = document.querySelector("#your-name");
const fullNameError = document.querySelector("#name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");
const comment = document.querySelector("#comment");
const commentError = document.querySelector("#comment-error");

export function validateForm() {
  if (fullName) {
    fullName.addEventListener("keydown", () => {
      enableFormBtn();

      if (checkLength(fullName.value, 3)) {
        fullNameError.style.display = "none";
      } else {
        fullNameError.style.display = "block";
      }
    });
  }

  if (email) {
    email.addEventListener("keydown", () => {
      enableFormBtn();

      if (validateEmail(email.value)) {
        emailError.style.display = "none";
      } else {
        emailError.style.display = "block";
      }
    });
  }

  if (subject) {
    subject.addEventListener("keydown", () => {
      enableFormBtn();

      if (checkLength(subject.value, 13)) {
        subjectError.style.display = "none";
      } else {
        subjectError.style.display = "block";
      }
    });
  }

  if (message) {
    message.addEventListener("keydown", () => {
      enableFormBtn();

      if (checkLength(message.value, 23)) {
        messageError.style.display = "none";
      } else {
        messageError.style.display = "block";
      }
    });
  }

  if (comment) {
    comment.addEventListener("keydown", () => {
      enableFormBtn();
      if (checkLength(comment.value, 8)) {
        commentError.style.display = "none";
      } else {
        commentError.style.display = "block";
      }
    });
  }
}

function enableFormBtn() {
  const btn = document.querySelector(".btn-form");

  if (subject && message) {
    if (checkLength(fullName.value, 3) && validateEmail(email.value) && checkLength(subject.value, 13) && checkLength(message.value, 23)) {
      btn.disabled = false;
      btn.classList.remove("disabled-btn");
      console.log("enabled");
    } else {
      btn.disabled = true;
      console.log("disabled");
    }
  } else {
    if (checkLength(fullName.value, 3) && validateEmail(email.value) && checkLength(comment.value, 8)) {
      btn.disabled = false;
      btn.classList.remove("disabled-btn");
      console.log("enabled");
    } else {
      btn.disabled = true;
      console.log("disabled");
    }
  }
}

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(mail) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(mail);
  return patternMatches;
}
