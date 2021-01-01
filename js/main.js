const grid = document.querySelector(".gridCollection");
const clear = document.querySelector(".clearButt");

clear.addEventListener("click", clearGrid);

function clearGrid() {
  grid.innerHTML = "";
  let choice = prompt(
    "How many rows/columns would you like to draw in? (1-100)"
  );
  if (choice > 100 || choice < 1) {
    alert("Invalid input! Please put in a number ranging from 1-100.");
    clearGrid();
  } else {
    createGrid(choice);
  }
}

function createGrid(nums) {
  grid.innerHTML = "";
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${nums}, 2fr)`
  );
  grid.style.setProperty(
    "grid-template-rows",
    `repeat(${nums}, 2fr)`
  );
  for (let i = 0; i < nums ** 2; i++) {
    const div = document.createElement("div");
    div.classList.add("pixel");
    div.addEventListener("mouseover", changeColor);
    grid.appendChild(div);
  }
}

function changeColor(e) {
  e.target.style.backgroundColor = "black";
}
