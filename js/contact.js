import { validateForm } from "./functions/validate-form.js";
import { toggleMenu } from "./functions/toggle-menu.js";
import { msgReceived } from "./functions/display-message.js";
import { formSubmission } from "./api/form-submissions.js";
const form = document.querySelector("form");

toggleMenu();
validateForm();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formSubmission(event);
  msgReceived();
  form.reset();
});
