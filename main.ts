// The One-Line Exit: one funny resignation letter, exactly one line.
//
// The joke works by reversal. The writer is a zookeeper, a job with a
// clear picture, and the resignation itself has been taken over by the
// animals: the parrots have already memorized the farewell speech. The
// punchline lands at the very end, in the comparison, so the line reads
// like something a person could actually send and still be repeated by
// a colleague.
import { mkdirSync, writeFileSync } from "node:fs";

const RESIGNATION =
  "I hereby resign from the zoo: the parrots have already memorized my farewell speech and deliver it better than I ever could.";

function checkLetter(text: string): void {
  if (text.length < 1 || text.length > 140) {
    throw new Error(`resignation letter must be 1 to 140 characters, got ${text.length}`);
  }
  if (text.trim() !== text || text.trim().length === 0) {
    throw new Error("resignation letter must not start or end with whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("resignation letter must be exactly one line");
  }
}

function main(): void {
  checkLetter(RESIGNATION);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", RESIGNATION, "utf8");
}

main();
