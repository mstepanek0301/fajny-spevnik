const scale = {
  "#": ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "B", "H"],
  b: ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "B", "H"],
};

const mod = (a, b) => ((a % b) + b) % b;

let currentScale = "#";
let currentTranspose = 0;

const updateScale = () => {
  for (let note = 0; note < 12; note++) {
    Array.from(document.getElementsByClassName(`chord-root-${note}`)).forEach(
      (elem) =>
        (elem.innerText = scale[currentScale][mod(note + currentTranspose, 12)])
    );
  }
};

document.getElementById("scale-sharp-flat").addEventListener("click", () => {
  event.target.innerText = currentScale;
  currentScale = currentScale === "#" ? "b" : "#";
  updateScale();
});

document.getElementById("trans-up").addEventListener("click", () => {
  currentTranspose++;
  updateScale();
});

document.getElementById("trans-down").addEventListener("click", () => {
  currentTranspose--;
  updateScale();
});
