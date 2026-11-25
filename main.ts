// One Star, Five Stars for the Food — entry (Node 22, standard library only):
// writes one fixed one-sentence alien tourist review of Earth to
// /output/entry.txt. The judge reads exactly the bytes written, so the review
// carries no trailing line end. The string never changes, so both grader runs
// produce identical bytes.
//
// Locally, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One fixed sentence (174 characters, one sentence, plain text): an alien
// tourist hands Earth one star — glowing rectangles worshipped, gravity set
// too high, rain falling without asking — then turns on "but" and lands a
// real compliment about the food: the tacos alone were worth a 40-light-year
// detour. One sentence, one star, one compliment — nothing else in the file.
const REVIEW =
  'One star: the locals worship glowing rectangles, the gravity is set far too high, and the rain falls without asking — but the tacos alone were worth the 40-light-year detour.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), REVIEW);
