const cellTypeSelect = document.getElementById("cellType");
const descriptionBox = document.getElementById("cellDescription");

// Populate dropdown
for (const key in CELL_TYPES) {
  const option = document.createElement("option");
  option.value = key;
  option.textContent = CELL_TYPES[key].name;

  option.addEventListener("mouseenter", () => {
    descriptionBox.textContent = CELL_TYPES[key].description;
  });

  cellTypeSelect.appendChild(option);
}

document.getElementById("playBtn").onclick = () => {
  running = !running;
  document.getElementById("playBtn").textContent = running ? "Pause" : "Play";
};

document.getElementById("resetBtn").onclick = () => {
  cells = [];
  initGrid();
};
```javascript
const cellTypeSelect = document.getElementById("cellType");

// Populate dropdown dynamically from CELL_TYPES
for (const key in CELL_TYPES) {
  const option = document.createElement("option");
  option.value = key;
  option.textContent = CELL_TYPES[key].name;
  cellTypeSelect.appendChild(option);
}

document.getElementById("playBtn").onclick = () => {
  running = !running;
  document.getElementById("playBtn").textContent = running
    ? "Pause"
    : "Play";
};

document.getElementById("resetBtn").onclick = () => {
  cells = [];
  initGrid();
};
