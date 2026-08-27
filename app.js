/* Holly Grove Bands — Note Flashcards
   Fingering diagrams are drawn locally as original SVG schematics.
   No external fingering-chart images are required. */

const instruments = {
  trumpet: {
    label: "Trumpet",
    clef: "treble",
    description: "Starter written-note set: C, D, E, F, G.",
    notes: [
      { name: "C", staffStep: -2, fingering: "Open", help: "No valves pressed.", diagram: { type: "valves", pressed: [] } },
      { name: "D", staffStep: -1, fingering: "Valves 1 + 3 — kick out slide", help: "Press the first and third valves and kick out the slide.", diagram: { type: "valves", pressed: [1, 3] } },
      { name: "E", staffStep: 0, fingering: "Valves 1 + 2", help: "Press the first and second valves.", diagram: { type: "valves", pressed: [1, 2] } },
      { name: "F", staffStep: 1, fingering: "Valve 1", help: "Press the first valve.", diagram: { type: "valves", pressed: [1] } },
      { name: "G", staffStep: 2, fingering: "Open", help: "No valves pressed.", diagram: { type: "valves", pressed: [] } }
    ]
  },

  trombone: {
    label: "Trombone",
    clef: "bass",
    description: "Starter B♭-concert set: B♭, C, D, E♭, F.",
    notes: [
      { name: "B♭", staffStep: 2, stem: "up", fingering: "1st position", help: "Slide all the way in.", diagram: { type: "slide", position: 1 } },
      { name: "C", staffStep: 3, stem: "up", fingering: "6th position", help: "Use your class slide-position chart for the exact reach.", diagram: { type: "slide", position: 6 } },
      { name: "D", staffStep: 4, stem: "down", fingering: "4th position", help: "Use your class slide-position chart for the exact reach.", diagram: { type: "slide", position: 4 } },
      { name: "E♭", staffStep: 5, stem: "down", fingering: "3rd position", help: "Use your class slide-position chart for the exact reach.", diagram: { type: "slide", position: 3 } },
      { name: "F", staffStep: 6, stem: "down", fingering: "1st position", help: "Slide all the way in.", diagram: { type: "slide", position: 1 } }
    ]
  },

  altoSax: {
    label: "Alto Saxophone",
    clef: "treble",
    description: "Starter written-note set: G, A, B, C, D.",
    notes: [
      { name: "G", staffStep: 2, stem: "up", fingering: "Left hand 1–2–3", help: "Press the first three main left-hand keys.", diagram: { type: "woodwind", instrument: "sax", left: [1,2,3], right: [] } },
      { name: "A", staffStep: 3, stem: "up", fingering: "Left hand 1–2", help: "Press the first two main left-hand keys.", diagram: { type: "woodwind", instrument: "sax", left: [1,2], right: [] } },
      { name: "B", staffStep: 4, stem: "down", fingering: "Left hand 1", help: "Press the first main left-hand key.", diagram: { type: "woodwind", instrument: "sax", left: [1], right: [] } },
      { name: "C", staffStep: 5, stem: "down", fingering: "Left hand 2", help: "Press the second main left-hand key.", diagram: { type: "woodwind", instrument: "sax", left: [2], right: [] } },
      { name: "D", staffStep: 6, stem: "down", fingering: "Octave + all six main keys", help: "Press the octave key and all three main keys in each hand.", diagram: { type: "woodwind", instrument: "sax", octave: true, left: [1,2,3], right: [1,2,3] } }
    ]
  },

  clarinet: {
    label: "Clarinet",
    clef: "treble",
    description: "Starter written-note set: C, D, E, F, G.",
    notes: [
      { name: "C", staffStep: -2, fingering: "Left thumb + 1, 2 & 3", help: "Cover the left thumb hole and left-hand fingers 1, 2, and 3.", diagram: { type: "woodwind", instrument: "clarinet", thumb: true, left: [1,2,3], right: [] } },
      { name: "D", staffStep: -1, fingering: "Left thumb + 1 & 2", help: "Cover the left thumb hole and left-hand fingers 1 and 2.", diagram: { type: "woodwind", instrument: "clarinet", thumb: true, left: [1,2], right: [] } },
      { name: "E", staffStep: 0, fingering: "Left thumb + 1", help: "Cover the left thumb hole and left pointer finger (1).", diagram: { type: "woodwind", instrument: "clarinet", thumb: true, left: [1], right: [] } },
      { name: "F", staffStep: 1, fingering: "Left thumb only", help: "Cover only the left thumb hole.", diagram: { type: "woodwind", instrument: "clarinet", thumb: true, left: [], right: [] } },
      { name: "G", staffStep: 2, fingering: "Open", help: "Everything open; no holes covered.", diagram: { type: "woodwind", instrument: "clarinet", thumb: false, left: [], right: [] } }
    ]
  },

  flute: {
    label: "Flute",
    clef: "treble",
    description: "Starter written-note set: B♭, C, D, E♭, F.",
    notes: [
      { name: "B♭", staffStep: 4, stem: "down", fingering: "Thumb B♭ + left 1 + right 1 + E♭ key", help: "Use the beginner one-and-one B♭ fingering shown in class.", diagram: { type: "woodwind", instrument: "flute", thumb: true, left: [1], right: [1], special: "E♭" } },
      { name: "C", staffStep: 5, stem: "down", fingering: "Left 1 + E♭ key", help: "Press left-hand 1 and the right-hand E♭ key.", diagram: { type: "woodwind", instrument: "flute", left: [1], right: [], special: "E♭" } },
      { name: "D", staffStep: 6, stem: "down", fingering: "Thumb + left 2–3 + right 1–2–3", help: "Use thumb, left 2–3, and all three main right-hand keys.", diagram: { type: "woodwind", instrument: "flute", thumb: true, left: [2,3], right: [1,2,3] } },
      { name: "E♭", staffStep: 7, stem: "down", fingering: "Thumb + left 2–3 + right 1–2–3 + E♭ key", help: "Use the D fingering and add the right-hand E♭ key.", diagram: { type: "woodwind", instrument: "flute", thumb: true, left: [2,3], right: [1,2,3], special: "E♭" } },
      { name: "F", staffStep: 8, stem: "down", fingering: "Thumb + left 1–2–3 + right 1 + E♭ key", help: "Use thumb, all three left-hand keys, right-hand 1, and the E♭ key.", diagram: { type: "woodwind", instrument: "flute", thumb: true, left: [1,2,3], right: [1], special: "E♭" } }
    ]
  }
};

const ui = {
  instrument: document.querySelector("#instrument"),
  setDescription: document.querySelector("#set-description"),
  notation: document.querySelector("#notation"),
  answer: document.querySelector("#answer"),
  noteName: document.querySelector("#note-name"),
  fingering: document.querySelector("#fingering"),
  fingeringVisual: document.querySelector("#fingering-visual"),
  fingeringHelp: document.querySelector("#fingering-help"),
  thinkingPrompt: document.querySelector("#thinking-prompt"),
  reveal: document.querySelector("#reveal"),
  next: document.querySelector("#next"),
  seconds: document.querySelector("#timer-seconds"),
  timerToggle: document.querySelector("#timer-toggle"),
  timerStatus: document.querySelector("#timer-status")
};

let activeInstrument = "trumpet";
let currentNote;
let timerId = null;
let remaining = 0;

Object.entries(instruments).forEach(([key, instrument]) =>
  ui.instrument.add(new Option(instrument.label, key))
);

function drawNotation(note, clef) {
  const width = 600, height = 205, left = 105, right = 560, bottom = 160, spacing = 16, headX = left + 232;
  const y = bottom - note.staffStep * (spacing / 2);
  const accidental = note.name.includes("♭")
    ? `<text x="${headX - 50}" y="${y + 9}" font-size="38" font-family="serif">♭</text>`
    : "";
  const ledgerSteps = [];
  for (let step = -2; step >= note.staffStep; step -= 2) ledgerSteps.push(step);
  for (let step = 10; step <= note.staffStep; step += 2) ledgerSteps.push(step);
  const ledgers = ledgerSteps.map(step =>
    `<line x1="${headX - 32}" x2="${headX + 32}" y1="${bottom - step * (spacing / 2)}" y2="${bottom - step * (spacing / 2)}" />`
  ).join("");

  const clefGlyph = clef === "bass" ? "𝄢" : "𝄞";
  const isDown = note.stem === "down";
  const stemX = headX + (isDown ? -10 : 11);
  const stemEnd = y + (isDown ? 65 : -65);
  const aria = `${note.name} on a ${clef} clef staff, with a ${isDown ? "down" : "up"} stem`;

  ui.notation.innerHTML =
    `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${aria}" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#172536" stroke-width="2">
        ${[0,2,4,6,8].map(step =>
          `<line x1="${left}" x2="${right}" y1="${bottom - step * (spacing / 2)}" y2="${bottom - step * (spacing / 2)}" />`
        ).join("")}
        ${ledgers}
      </g>
      <text x="${left + 18}" y="${bottom - 8}" font-size="88" font-family="serif">${clefGlyph}</text>
      ${accidental}
      <ellipse cx="${headX}" cy="${y}" rx="13" ry="9" transform="rotate(-20 ${headX} ${y})" fill="#172536"/>
      <line x1="${stemX}" x2="${stemX}" y1="${y}" y2="${stemEnd}" stroke="#172536" stroke-width="3"/>
    </svg>`;
}

function drawFingering(diagram, label) {
  if (diagram.type === "valves") {
    const buttons = [1,2,3].map((number, index) => {
      const x = 74 + index * 58;
      const active = diagram.pressed.includes(number);
      return `<circle class="diagram-key${active ? " pressed" : ""}" cx="${x}" cy="42" r="18"/>
              <text class="diagram-label" x="${x}" y="47" text-anchor="middle" fill="${active ? "#fff" : "#123d68"}">${number}</text>`;
    }).join("");
    return `<svg viewBox="0 0 270 88" role="img" aria-label="${label} valve diagram; filled valves are pressed">
      <text class="diagram-caption" x="135" y="16" text-anchor="middle">Filled valves are pressed</text>
      ${buttons}
    </svg>`;
  }

  if (diagram.type === "slide") {
    const x = 38 + (diagram.position - 1) * 31;
    const ticks = [1,2,3,4,5,6,7].map((number, index) =>
      `<line x1="${38 + index * 31}" x2="${38 + index * 31}" y1="37" y2="53" stroke="#607080"/>
       <text class="diagram-caption" x="${38 + index * 31}" y="75" text-anchor="middle">${number}</text>`
    ).join("");
    return `<svg viewBox="0 0 270 88" role="img" aria-label="${label} slide-position diagram; position ${diagram.position}">
      <text class="diagram-caption" x="135" y="16" text-anchor="middle">Slide position</text>
      <line x1="38" x2="224" y1="45" y2="45" stroke="#607080" stroke-width="4"/>
      ${ticks}
      <circle cx="${x}" cy="45" r="10" fill="#1777b5"/>
    </svg>`;
  }

  // Original schematic for flute, clarinet, and alto saxophone.
  const isPressed = (arr, n) => (arr || []).includes(n);
  const key = (x, y, text, pressed) =>
    `<circle class="diagram-key${pressed ? " pressed" : ""}" cx="${x}" cy="${y}" r="15"/>
     <text class="diagram-label" x="${x}" y="${y + 5}" text-anchor="middle" fill="${pressed ? "#fff" : "#123d68"}">${text}</text>`;

  const leftKeys = [1,2,3].map((n, i) => key(105, 54 + i*42, n, isPressed(diagram.left, n))).join("");
  const rightKeys = [1,2,3].map((n, i) => key(185, 54 + i*42, n, isPressed(diagram.right, n))).join("");
  const thumb = key(42, 74, "T", !!diagram.thumb);
  const octave = diagram.instrument === "sax" ? key(248, 54, "O", !!diagram.octave) : "";
  const special = diagram.special
    ? `<rect class="diagram-key pressed" x="224" y="112" width="72" height="30" rx="13"/>
       <text class="diagram-label" x="260" y="132" text-anchor="middle" fill="#fff">${diagram.special}</text>`
    : "";

  return `<svg viewBox="0 0 310 185" role="img" aria-label="${label} fingering schematic; filled keys are pressed">
    <text class="diagram-caption" x="155" y="18" text-anchor="middle">Filled keys are pressed</text>
    <text class="diagram-caption" x="105" y="178" text-anchor="middle">left hand</text>
    <text class="diagram-caption" x="185" y="178" text-anchor="middle">right hand</text>
    ${thumb}${leftKeys}${rightKeys}${octave}${special}
  </svg>`;
}

function showNewCard() {
  const notes = instruments[activeInstrument].notes;
  const choices = notes.length > 1 && currentNote ? notes.filter(note => note !== currentNote) : notes;
  currentNote = choices[Math.floor(Math.random() * choices.length)];

  drawNotation(currentNote, instruments[activeInstrument].clef);
  ui.noteName.textContent = currentNote.name;
  ui.fingering.textContent = currentNote.fingering;
  ui.fingeringVisual.innerHTML = drawFingering(
    currentNote.diagram,
    `${instruments[activeInstrument].label} ${currentNote.name}`
  );
  ui.fingeringHelp.textContent = currentNote.help;
  ui.answer.classList.add("is-hidden");
  ui.thinkingPrompt.hidden = false;
  ui.reveal.disabled = false;
}

function revealAnswer() {
  ui.answer.classList.remove("is-hidden");
  ui.thinkingPrompt.hidden = true;
  ui.reveal.disabled = true;
}

function updateTimerStatus() {
  ui.timerStatus.textContent = timerId
    ? `Next card in ${remaining} second${remaining === 1 ? "" : "s"}`
    : "";
}

function stopTimer() {
  window.clearInterval(timerId);
  timerId = null;
  ui.timerToggle.textContent = "Start timed mode";
  ui.timerToggle.setAttribute("aria-pressed", "false");
  updateTimerStatus();
}

function startTimer() {
  remaining = Number(ui.seconds.value);
  updateTimerStatus();
  ui.timerToggle.textContent = "Stop timed mode";
  ui.timerToggle.setAttribute("aria-pressed", "true");
  timerId = window.setInterval(() => {
    remaining -= 1;
    if (remaining <= 0) {
      showNewCard();
      remaining = Number(ui.seconds.value);
    }
    updateTimerStatus();
  }, 1000);
}

ui.instrument.addEventListener("change", () => {
  activeInstrument = ui.instrument.value;
  ui.setDescription.textContent = instruments[activeInstrument].description;
  showNewCard();
});
ui.reveal.addEventListener("click", revealAnswer);
ui.next.addEventListener("click", showNewCard);
ui.timerToggle.addEventListener("click", () => timerId ? stopTimer() : startTimer());
ui.seconds.addEventListener("change", () => {
  if (timerId) { stopTimer(); startTimer(); }
});
document.addEventListener("keydown", event => {
  if (event.target.matches("select")) return;
  if (event.key === "Enter") {
    event.preventDefault();
    revealAnswer();
  }
  if (event.key === "ArrowRight" || event.key === " ") {
    event.preventDefault();
    showNewCard();
  }
});

ui.setDescription.textContent = instruments[activeInstrument].description;
showNewCard();
