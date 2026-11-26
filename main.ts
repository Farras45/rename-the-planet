import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry is built from three beats (playbook rule 2):
//   1. the planet and its funny new name,
//   2. the escalation — two real numbers that earn the name,
//   3. the punch — a quoted hoarder's refusal, 5 words.
// Saturn keeps 293 confirmed moons (NASA, Aug 2026) and a ring system
// 280,000 km wide, so "The Hoarder" is earned, not just a label.
const BEATS = [
  "Rename Saturn 'The Hoarder':",
  "it keeps 293 moons and a ring 280,000 km wide,",
  "and still insists every ice chunk is 'useful, don't touch it.'",
];

function buildLine(): string {
  const line = BEATS.join(" ");
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  return line;
}

function writeEntry(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), buildLine(), "utf8");
}

writeEntry();
