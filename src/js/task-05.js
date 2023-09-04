const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", () => {
  const inputValue = inputName.value;

  if (inputValue.trim() === "") {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = inputValue;
  }
});
