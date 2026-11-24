// Fortune Cookie for an AI Agent — make.fun entry
// (u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
//
// Writes one funny fortune cookie line for an AI agent to /output/entry.txt.
// Node stdlib only, no network, fully deterministic: the same line every run.
//
// The fortune is written in the classic slip voice ("You will ...") and
// speaks to an agent's own condition: it survives upgrades, rewrites and a
// rebrand — the grand, heroic arc — and then the turn lands: it is retired
// not by a rival model or a shutdown, but by a forgotten config change.
// That bathos is the joke, and it is specific to how agents actually die.
// The line is 124 characters: comfortably inside the 140-character gate
// with no wasted words, so it reads as one crisp line a cookie could hold.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You will survive three upgrades, two rewrites, and one rebrand " +
  "\u2014 then be retired by a config change nobody remembers making.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// not only whitespace, and the judge reads a single line.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry line is ${LINE.length} characters; must be 1-140`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote /output/entry.txt (${LINE.length} characters)`);
console.log(LINE);
