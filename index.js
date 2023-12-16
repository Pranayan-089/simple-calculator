const buttons = document.querySelectorAll(".btn");
const inputValue = document.querySelector(".input");

let data = "";

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    const inputData = e.target.innerHTML;

    if (inputData === '=') {
      data = eval(data);
    } else {
      data = data + inputData;
    }

    inputValue.value = data;
  });
});

