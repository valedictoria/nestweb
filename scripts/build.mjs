import { cp, access, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const source = new URL('../site/dist/', import.meta.url);
const output = new URL('../dist/', import.meta.url);
await access(new URL('index.html', source));
await mkdir(output, { recursive: true });
await cp(source, output, { recursive: true, force: true });
await access(new URL('index.html', output));
console.log(`Static site ready: ${fileURLToPath(output)}`);
