import fs from 'fs';
import util from 'util';
import { transformLinks } from './transformLinks';

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const run = async () => {
  const [, , ...unsanitizedArgs] = process.argv;
  const [...files] = unsanitizedArgs;

  for (const file of files) {
    try {
      const markdownContent = await readFile(file, "utf-8");

      const transformedContent = transformLinks(markdownContent)

      await writeFile(file, transformedContent);
    } catch (err) {
      console.log('file: ', file, err);
    }
  }
};

(async () => {
  try {
    await run();
  } catch (err) {
    console.log('err: ', err);
    process.exit(1);
  }

  process.exit(0);
})();
