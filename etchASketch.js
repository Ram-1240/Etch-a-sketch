const container = document.querySelector("#container");
const resetButton = document.querySelector("#resetButton");

function createGrid(gridSize) {
    container.style.setProperty('--grid-size', gridSize);
    container.innerHTML = ''; // Clear previous grid

    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
    }
}

resetButton.addEventListener('click', () => {
  let gridSize = prompt("Enter the number of squares per side for the new grid (max 100):");
  if (gridSize === null || gridSize === "") {
      gridSize = 16; // Default value
  } else {
      gridSize = Math.min(Math.max(parseInt(gridSize), 1), 100); // Limit between 1 and 100
  }
  createGrid(gridSize);
});

// Initial grid creation
createGrid(16); // Initial grid size: 16x16
