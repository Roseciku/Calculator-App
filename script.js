const display = document.getElementById("display");
const buttons = document.querySelectorAll(".calcbuttons button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "=") {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Error";
      }
    } else if (button.textContent === "DEL") {
      display.value = display.value.slice(0, -1);
    } else if (button.textContent === "RESET") {
      display.value = "";
    } else {
      display.value += button.textContent;
    }
  });
});
