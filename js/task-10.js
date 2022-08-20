const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");

const createBtn = document.querySelector("[data-create]");
const deleteBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", () => {
  const add = createSquares(input.value);
  boxes.append(...add);
});

deleteBtn.addEventListener("click", () => {
  destroyer.call();
});

function createSquares(amount) {
  let firstSize = 30;
  const squares = [];

  for (let i = 0; i < amount; i += 1) {
    firstSize += 10 * i;

    const box = document.createElement("div");
    box.style.backgroundColor = randomColor();
    box.style.cssText = ` background-color: ${randomColor()}; 
    height: ${firstSize + "px"}; width: ${firstSize + "px"}; margin: 10px;`;

    squares.push(box);
  }
  return squares;
}

function destroyer() {
  boxes.innerHTML = "";
  input.value = "";
}

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
