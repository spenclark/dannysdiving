import sharp from 'sharp';
import { mkdir } from 'fs/promises';
import { join } from 'path';

const ATTACHED_ASSETS_DIR = 'attached_assets';
const OG_IMAGES_DIR = 'client/public/og-images';

async function main() {
  console.log('Creating OG images directory...');
  await mkdir(OG_IMAGES_DIR, { recursive: true });

  const imagesToConvert = [
    { input: 'hullcleanthumb_1763670375200.webp', output: 'hull-cleaning.jpg' },
    { input: 'image_1763670536282.webp', output: 'underwater-inspections.jpg' },
    { input: 'zincthumb_1763670375200.webp', output: 'zinc-changes.jpg' },
    { input: 'mooringthumb_1763670375201.webp', output: 'mooring-services.jpg' },
    { input: 'lostitemthumb_1763670375201.webp', output: 'lost-item-retrieval.jpg' },
    { input: 'image_1763686460850.webp', output: 'commercial-diving.jpg' }
  ];

  for (const { input, output } of imagesToConvert) {
    const inputPath = join(ATTACHED_ASSETS_DIR, input);
    const outputPath = join(OG_IMAGES_DIR, output);
    
    console.log(`Converting ${input} to ${output}...`);
    
    await sharp(inputPath)
      .jpeg({ quality: 85 })
      .resize(1200, 630, {
        fit: 'cover',
        position: 'center'
      })
      .toFile(outputPath);
    
    console.log(`  ✓ Created ${output}`);
  }

  console.log('\nAll OG images created successfully!');
}

main().catch(console.error);
