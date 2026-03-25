const CELL_TYPES = {
  neuron: {
    color: "yellow",
    secretion: 0.3,
    name: "Neuron",
    description: "Excitable signaling cell responsible for transmitting electrical and chemical signals in the nervous system."
  },
  astrocyte: {
    color: "magenta",
    secretion: 0.4,
    name: "Astrocyte",
    description: "Glial support cell that regulates neurotransmitters, maintains ion balance, and supports the blood–brain barrier."
  },
  microglia: {
    color: "orange",
    secretion: 0.6,
    name: "Microglia",
    description: "Resident immune cell of the central nervous system involved in synaptic pruning and neuroinflammation."
  },
  oligodendrocyte: {
    color: "#ffcc66",
    secretion: 0.25,
    name: "Oligodendrocyte",
    description: "Produces myelin sheaths around neuronal axons, enabling rapid electrical conduction."
  },
  stem: {
    color: "cyan",
    secretion: 0.5,
    name: "Stem Cell",
    description: "Undifferentiated cell capable of self-renewal and differentiation into specialized cell types."
  },
  cancer: {
    color: "red",
    secretion: 0.8,
    name: "Cancer Cell",
    description: "Aberrantly proliferating cell with altered signaling and resistance to normal growth controls."
  }
};
```javascript
// Expanded library of biologically relevant cell types
const CELL_TYPES = {
  // Stem & progenitor cells
  stem: { color: "cyan", secretion: 0.5, name: "Stem Cell" },
  neural_stem: { color: "#66ccff", secretion: 0.45, name: "Neural Stem Cell" },
  mesenchymal: { color: "#00ffaa", secretion: 0.4, name: "Mesenchymal Stem Cell" },

  // Brain & neural cells
  neuron: { color: "yellow", secretion: 0.3, name: "Neuron" },
  astrocyte: { color: "magenta", secretion: 0.4, name: "Astrocyte" },
  microglia: { color: "orange", secretion: 0.6, name: "Microglia" },
  oligodendrocyte: { color: "#ffcc66", secretion: 0.25, name: "Oligodendrocyte" },

  // Cancer & tumor biology
  cancer: { color: "red", secretion: 0.8, name: "Cancer Cell" },
  glioblastoma: { color: "#990000", secretion: 0.85, name: "Glioblastoma Cell" },

  // Immune system cells
  immune: { color: "purple", secretion: 0.7, name: "Generic Immune Cell" },
  tcell: { color: "#aa00ff", secretion: 0.65, name: "T Cell" },
  macrophage: { color: "#ff8800", secretion: 0.6, name: "Macrophage" },
  dendritic: { color: "#cc66ff", secretion: 0.55, name: "Dendritic Cell" },

  // Structural & tissue cells
  fibro: { color: "lime", secretion: 0.2, name: "Fibroblast" },
  epithelial: { color: "white", secretion: 0.1, name: "Epithelial Cell" },
  endothelial: { color: "#66ffcc", secretion: 0.15, name: "Endothelial Cell" },
  muscle: { color: "#ff6666", secretion: 0.18, name: "Muscle Cell" },

  // Organ-specific research models
  hepatocyte: { color: "#ffaa33", secretion: 0.22, name: "Hepatocyte" },
  cardiomyocyte: { color: "#ff4444", secretion: 0.3, name: "Cardiomyocyte" },
  pancreatic_beta: { color: "#33ccff", secretion: 0.28, name: "Pancreatic Beta Cell" }
};
```javascript
const CELL_TYPES = {
  stem: { color: "cyan", secretion: 0.5 },
  fibro: { color: "lime", secretion: 0.2 },
  cancer: { color: "red", secretion: 0.8 }
};
