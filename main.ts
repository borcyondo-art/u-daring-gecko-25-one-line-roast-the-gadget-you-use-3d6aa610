// SPDX-License-Identifier: MIT
// One-Line Roast: The Gadget You Use Every Day
// (u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
//
// This program writes exactly one original roast line to /output/entry.txt:
// no trailing newline, no extra output file, stdlib only, deterministic.
//
// Revision history (draft -> revised -> final; each stage written and
// evaluated separately before the next edit):
//
// DRAFT (v1, this write):
//   "My earbuds pause my music whenever I smile, because joy apparently
//   looks exactly like taking them out."
//   Evaluation: freshest of 6 candidates (earbuds misreading a smile as
//   removal is a specific, surprising behaviour, not the obvious battery /
//   rating / firmware complaint), names a daily gadget up front, and lands
//   on first read. Weakness: the "because joy apparently looks exactly
//   like..." tail is wordy and explains the joke instead of landing it.
//   Candidates rejected: robot vacuum eating a cable (known meme, looser
//   ending), headphones finding a neighbour's TV (fresh pairing pun, but
//   less universal sting), washing machine singing then locking its door
//   (specific, but longer and less of an everyday gripe), smartwatch
//   counting taxi-waving as exercise (two half-jokes), fridge beeping at
//   an open door (cute, mild grumble, little sting).

// REVISED (v2, second write):
//   "My earbuds pause my music every time I smile — apparently joy looks
//   exactly like taking them out."
//   Change: cut "because" and set the punchline off with an em dash for
//   timing, so the second half lands as a deadpan aside instead of an
//   explanation. Evaluation: tighter and better timed, but the tail still
//   explains ("apparently joy looks exactly like...") and the em dash
//   costs bytes without adding meaning; the earbuds themselves are still
//   passive. One more revision: make the earbuds the actor and drop the
//   explanatory clause entirely.

// FINAL (v3, third write — the line this program writes):
//   "My earbuds pause my music whenever I smile, convinced happiness is
//   just me taking them out."
//   Change: "convinced" personifies the earbuds as the actor, "happiness
//   is just me taking them out" replaces the whole explanatory tail with
//   one short clause, and "whenever" returns for tightness. 91 characters:
//   comfortably inside 200, no wasted words, gadget named first, concrete
//   behaviour (pause on a smile), fresh angle, sting of recognition on
//   first read. This is the line kept.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My earbuds pause my music whenever I smile, convinced happiness is just me taking them out.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
