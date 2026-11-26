// Robot Romance — one-line pickup line for an AI.
// Writes exactly one pickup line plus a trailing newline to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Are you my prompt? Because you complete me — and I've never once hit the token limit.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(LINE);
