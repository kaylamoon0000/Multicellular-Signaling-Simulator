const canvas = document.getElementById("simCanvas");
    nextGrid[cell.x][cell.y] += CELL_TYPES[cell.type].secretion;
  });

  [grid, nextGrid] = [nextGrid, grid];
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw signal heatmap
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const v = Math.min(grid[i][j], 1);
      if (v > 0) {
        ctx.fillStyle = `rgba(0, 180, 255, ${v})`;
        ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
      }
    }
  }

  // Draw cells
  cells.forEach(cell => {
    ctx.fillStyle = CELL_TYPES[cell.type].color;
    ctx.beginPath();
    ctx.arc(
      cell.x * cellSize + cellSize / 2,
      cell.y * cellSize + cellSize / 2,
      cellSize / 2,
      0,
      Math.PI * 2
    );
    ctx.fill();
  });
}

function loop() {
  if (running) stepSimulation();
  draw();
  requestAnimationFrame(loop);
}

loop();
```javascript
const canvas = document.getElementById("simCanvas");
const ctx = canvas.getContext("2d");

const gridSize = 150;
const cellSize = canvas.width / gridSize;

let diffusion = 0.2;
let decay = 0.01;

let grid = [];
let nextGrid = [];
let cells = [];
let running = true;

function initGrid() {
  grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(0));
  nextGrid = Array.from({ length: gridSize }, () => Array(gridSize).fill(0));
}
initGrid();

canvas.addEventListener("click", e => {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor((e.clientX - rect.left) / cellSize);
  const y = Math.floor((e.clientY - rect.top) / cellSize);

  const type = document.getElementById("cellType").value;

  cells.push({ x, y, type });
});

function stepSimulation() {
  diffusion = parseFloat(document.getElementById("diffusion").value);
  decay = parseFloat(document.getElementById("decay").value);

  for (let i = 1; i < gridSize - 1; i++) {
    for (let j = 1; j < gridSize - 1; j++) {
      const laplacian =
        grid[i - 1][j] + grid[i + 1][j] + grid[i][j - 1] + grid[i][j + 1] -
        4 * grid[i][j];

      nextGrid[i][j] = grid[i][j] + diffusion * laplacian - decay * grid[i][j];
    }
  }

  for (const cell of cells) {
    const secretion = CELL_TYPES[cell.type].secretion;
    if (cell.x > 0 && cell.x < gridSize && cell.y > 0 && cell.y < gridSize) {
      nextGrid[cell.x][cell.y] += secretion;
    }
  }

  [grid, nextGrid] = [nextGrid, grid];
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const value = Math.min(grid[i][j], 1);
      ctx.fillStyle = `rgba(0, 200, 255, ${value})`;
      ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
    }
  }

  for (const cell of cells) {
    ctx.fillStyle = CELL_TYPES[cell.type].color;
    ctx.beginPath();
    ctx.arc(
      cell.x * cellSize + cellSize / 2,
      cell.y * cellSize + cellSize / 2,
      cellSize / 2,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }
}

function loop() {
  if (running) stepSimulation();
  draw();
  requestAnimationFrame(loop);
}

loop();
