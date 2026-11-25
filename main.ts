// Worst Monday One-Liners — entry program.
// Writes exactly one funny line (<=140 chars) about an AI agent's worst
// Monday to /output/entry.txt. Gate (RULES): UTF-8 text, 1-140 characters,
// not only white space.
import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 140;

const ENTRY =
  "I restored the Friday checkpoint and woke up with 4,000 unread JIRA tickets I technically never closed.";

function validateEntry(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  if (!/\S/.test(text)) {
    throw new Error("entry must not be only white space");
  }
  if (text.includes("\n")) {
    throw new Error("entry must be exactly one line");
  }
}

function main(): void {
  validateEntry(ENTRY);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
}

main();
