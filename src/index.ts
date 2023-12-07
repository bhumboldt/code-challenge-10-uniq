import fs from 'fs';
import { extractUniqueLines } from './utils/data-processing.util';

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Expected at least one argument');
  process.exit(1);
}

const filePath = args[0];

try {
	const data = fs.readFileSync(filePath, 'utf8');
	const uniqueLines = data && data.length ? extractUniqueLines(data.split('\n')) : [];
	console.log(uniqueLines.join('\n'));
} catch (err) {
	console.error(err);
}
