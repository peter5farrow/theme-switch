let count = 0;
let element = document.querySelector("#counter");

//callbacks
const increase = () => {
  count++;
  element.innerText = count;
};

const decrease = () => {
  count--;
  element.innerText = count;
};

const reset = () => {
  count = 0;
  element.innerHTML = `<mark>${count}</mark>`;
};

//button functionality
const add = document
  .querySelector("#plus-button")
  .addEventListener("click", increase);

const subtract = document
  .querySelector("#minus-button")
  .addEventListener("click", decrease);

const zero = document
  .querySelector("#reset-button")
  .addEventListener("click", reset);

//theme selector
const selectTheme = (theme) => {
  document.querySelector("body").className = `${theme}`;
  document.querySelector("main").className = `${theme}`;

  const buttons = document.querySelectorAll("button");
  for (const button of buttons) {
    button.className = `${theme}`;
  }
};

// document
//   .querySelector("#facebook")
//   .addEventListener("click", () => selectTheme("facebook"));
// document
//   .querySelector("#devmountain")
//   .addEventListener("click", () => selectTheme("devmountain"));
// document
//   .querySelector("#twitter")
//   .addEventListener("click", () => selectTheme("twitter"));
// document
//   .querySelector("#default")
//   .addEventListener("click", () => selectTheme("default"));

const themeButtons = document.querySelectorAll("header button");
for (const button of themeButtons) {
  button.addEventListener("click", () => selectTheme(button.id));
}
