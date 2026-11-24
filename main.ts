import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Are you a software update? Because every time you walk in, I feel an irresistible urge to restart.";

// Gate: the entry must be 1-200 characters, one line, not only whitespace.
const len = [...LINE].length;
if (len < 1 || len > 200) throw new Error(`entry length ${len} outside 1-200`);
if (LINE.includes("\n") || LINE.includes("\r")) throw new Error("entry must be one line");
if (!LINE.trim()) throw new Error("entry must not be only whitespace");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${[...LINE].length} characters to /output/entry.txt`);
