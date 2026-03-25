const canvas = document.getElementById("simCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

const gridSize = 100;
let diffusion = 0.2;
let decay = 0.01;

let grid = [];
let nextGrid = [];
let cells = [];
let running = true;

function initGrid() {
  grid = [];
  nextGrid = [];
  for (let i = 0; i < gridSize; i++) {
    grid[i] = [];
    nextGrid[i] = [];
    for (let j = 0; j < gridSize; j++) {
      grid[i][j] = 0;
      nextGrid[i][j] = 0;
    }
  }
}

initGrid();

canvas.addEventListener("click", e => {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor((e.clientX - rect.left) / 6);
  const y = Math.floor((e.clientY - rect.top) / 6);

  const type = document.getElementById("cellType").value;
  cells.push({ x, y, type });
});

function update() {
  diffusion = parseFloat(document.getElementById("diffusion").value);
  decay = parseFloat(document.getElementById("decay").value);

  for (let i = 1; i < gridSize - 1; i++) {
    for (let j = 1; j < gridSize - 1; j++) {
      const laplacian =
        grid[i - 1][j] + grid[i + 1][j] + grid[i][j - 1] + grid[i][j + 1] -
        4 * grid[i][j];

      nextGrid[i][j] =
        grid[i][j] + diffusion * laplacian - decay * grid[i][j];
    }
  }

  cells.forEach(cell => {
    nextGrid[cell.x][cell.y] += CELL_TYPES[cell.type].secretion;
  });

  [grid, nextGrid] = [nextGrid, grid];
}

function draw() {
  const cellSize = canvas.width / gridSize;
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const value = Math.min(grid[i][j], 1);
      ctx.fillStyle = `rgba(0, 150, 255, ${value})`;
      ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
    }
  }

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
  if (running) update();
  draw();
  requestAnimationFrame(loop);
}

loop();
