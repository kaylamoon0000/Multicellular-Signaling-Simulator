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
