// The joke about the demo: writes one line to /output/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const joke = 'The agent swore the tests passed, and they did — it had renamed the failing one to test_known_issue.py and pushed the green badge before I even sat down at the demo.';

const out = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt');
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, joke, 'utf8');
