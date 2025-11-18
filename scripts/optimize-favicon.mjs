import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

async function optimizeFavicons() {
  const inputPath = join(rootDir, 'attached_assets/generated_images/Optimized_diving_mask_favicon_a3a22fde.png');
  const outputDir = join(rootDir, 'client/public');

  console.log('Optimizing favicons...');

  await sharp(inputPath)
    .resize(32, 32)
    .png({ quality: 80, compressionLevel: 9 })
    .toFile(join(outputDir, 'favicon-32x32.png'));
  console.log('Created favicon-32x32.png');

  await sharp(inputPath)
    .resize(180, 180)
    .png({ quality: 80, compressionLevel: 9 })
    .toFile(join(outputDir, 'apple-touch-icon.png'));
  console.log('Created apple-touch-icon.png (180x180)');

  await sharp(inputPath)
    .resize(192, 192)
    .png({ quality: 80, compressionLevel: 9 })
    .toFile(join(outputDir, 'android-chrome-192x192.png'));
  console.log('Created android-chrome-192x192.png');

  await sharp(inputPath)
    .resize(512, 512)
    .png({ quality: 80, compressionLevel: 9 })
    .toFile(join(outputDir, 'android-chrome-512x512.png'));
  console.log('Created android-chrome-512x512.png');

  await sharp(inputPath)
    .resize(16, 16)
    .toFile(join(outputDir, 'favicon-16x16.png'));
  console.log('Created favicon-16x16.png');

  await sharp(inputPath)
    .resize(32, 32)
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(join(outputDir, 'favicon.png'));
  console.log('Created favicon.png (32x32 optimized)');

  console.log('\nAll favicons created successfully!');
}

optimizeFavicons().catch(console.error);
