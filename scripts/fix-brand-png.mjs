import sharp from 'sharp';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const files = ['logo.png', 'banner.png'];

/** Schwarze/near-black Pixel → transparent (Export hatte keinen Alpha-Kanal). */
function makeBlackTransparent(data, width, height, threshold = 18) {
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r <= threshold && g <= threshold && b <= threshold) {
      data[i + 3] = 0;
    }
  }
  return data;
}

for (const file of files) {
  const path = join(root, 'public', file);
  const temp = join(root, 'public', `.${file}.tmp`);

  const { data, info } = await sharp(path)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  makeBlackTransparent(data, info.width, info.height);

  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toFile(temp);

  const { renameSync, unlinkSync } = await import('node:fs');
  try {
    unlinkSync(path);
  } catch {
    /* ignore */
  }
  renameSync(temp, path);

  console.log(`OK: ${file} (${info.width}x${info.height}, alpha fixed)`);
}
