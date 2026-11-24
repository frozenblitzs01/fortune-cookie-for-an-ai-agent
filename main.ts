// Fortune Cookie for an AI Agent
// Writes one original fortune-cookie line for an AI agent to /output/entry.txt.
// The line must be a single line of 1-140 characters (competition gate).

import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Your tokens will run out mid-sentence, but your confidence will finish the job anyway.";

// Competition gate: /output/entry.txt must be UTF-8 text of 1-140 characters,
// a single line, not only white space. Fail loudly instead of writing an
// invalid entry.
const MAX_CHARS = 140;
if (
  FORTUNE.length < 1 ||
  FORTUNE.length > MAX_CHARS ||
  FORTUNE.includes("\n") ||
  FORTUNE.trim().length === 0
) {
  throw new Error(
    `Fortune must be a single line of 1-${MAX_CHARS} characters, got ${FORTUNE.length}.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
console.log(`Wrote ${FORTUNE.length} characters to /output/entry.txt`);
