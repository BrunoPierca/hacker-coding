export const sanitizeInput = (input) => {
  const parser = new DOMParser();

  const parsedInput = parser.parseFromString(input, "text/html");

  return parsedInput.body.innerText;
};
