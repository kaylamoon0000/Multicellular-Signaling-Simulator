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
