// One Line of Earned Pride: a quiet, earned moment of pride for one
// person in a concrete scene — a long effort finally landing, seen
// happening rather than summarised. The line is assembled from its beats
// and written verbatim to /output/entry.txt.
//
// The beats carry the effort (four failed tests), the scene (rain, the
// parked car, the engine going off) and the quiet payoff (a grin with no
// audience). Restructuring how the beats join never changes the words.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = "/output";
const ENTRY_FILE = "entry.txt";

// Each beat is one clause of the scene, in the order the reader sees it.
const BEATS: string[] = [
  "After four failed tests",
  "he parallel-parked in the rain on the fifth try",
  "switched the engine off",
  "and sat there a second longer, grinning at nobody.",
];

function assemble(beats: string[]): string {
  // The first beat is a dependent clause, so it joins with a comma;
  // the remaining beats are the main clause, joined the same way.
  return beats.join(", ");
}

function entryText(): string {
  return assemble(BEATS);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, ENTRY_FILE), entryText(), "utf8");
