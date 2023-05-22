export const formSubmission = async (event) => {
  const formElement = event.target,
    { action, method } = formElement,
    body = new FormData(formElement);

  try {
    const response = await fetch(action, {
      method,
      body,
    });
  } catch (error) {
    console.log(error);
  }
};
