import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const ATTACHED_ASSETS_DIR = 'attached_assets';
const QUALITY = 85;

interface ImageToOptimize {
  input: string;
  output: string;
  type: 'png' | 'jpg';
}

async function optimizeImage(input: string, output: string, type: 'png' | 'jpg') {
  try {
    const metadata = await sharp(input).metadata();
    console.log(`Optimizing ${basename(input)} (${metadata.width}x${metadata.height})...`);
    
    await sharp(input)
      .webp({ quality: QUALITY })
      .toFile(output);
    
    const inputStats = await stat(input);
    const outputStats = await stat(output);
    const savings = inputStats.size - outputStats.size;
    const savingsPercent = ((savings / inputStats.size) * 100).toFixed(1);
    
    console.log(`  ✓ Saved ${(savings / 1024).toFixed(1)}KB (${savingsPercent}% reduction)`);
    console.log(`  Original: ${(inputStats.size / 1024).toFixed(1)}KB → WebP: ${(outputStats.size / 1024).toFixed(1)}KB`);
  } catch (error) {
    console.error(`  ✗ Failed to optimize ${basename(input)}:`, error);
  }
}

async function main() {
  console.log('Starting image optimization...\n');

  const imagesToOptimize: ImageToOptimize[] = [
    {
      input: join(ATTACHED_ASSETS_DIR, 'hullcleanthumb_1763670375200.png'),
      output: join(ATTACHED_ASSETS_DIR, 'hullcleanthumb_1763670375200.webp'),
      type: 'png'
    },
    {
      input: join(ATTACHED_ASSETS_DIR, 'image_1763670536282.png'),
      output: join(ATTACHED_ASSETS_DIR, 'image_1763670536282.webp'),
      type: 'png'
    },
    {
      input: join(ATTACHED_ASSETS_DIR, 'zincthumb_1763670375200.png'),
      output: join(ATTACHED_ASSETS_DIR, 'zincthumb_1763670375200.webp'),
      type: 'png'
    },
    {
      input: join(ATTACHED_ASSETS_DIR, 'mooringthumb_1763670375201.png'),
      output: join(ATTACHED_ASSETS_DIR, 'mooringthumb_1763670375201.webp'),
      type: 'png'
    },
    {
      input: join(ATTACHED_ASSETS_DIR, 'lostitemthumb_1763670375201.png'),
      output: join(ATTACHED_ASSETS_DIR, 'lostitemthumb_1763670375201.webp'),
      type: 'png'
    },
    {
      input: join(ATTACHED_ASSETS_DIR, 'image_1763686460850.png'),
      output: join(ATTACHED_ASSETS_DIR, 'image_1763686460850.webp'),
      type: 'png'
    },
    {
      input: join(ATTACHED_ASSETS_DIR, 'hero-poster.jpg'),
      output: join(ATTACHED_ASSETS_DIR, 'hero-poster.webp'),
      type: 'jpg'
    },
    {
      input: join(ATTACHED_ASSETS_DIR, 'before_1763669755573.jpg'),
      output: join(ATTACHED_ASSETS_DIR, 'before_1763669755573.webp'),
      type: 'jpg'
    },
    {
      input: join(ATTACHED_ASSETS_DIR, 'After_1763669731989.jpg'),
      output: join(ATTACHED_ASSETS_DIR, 'After_1763669731989.webp'),
      type: 'jpg'
    },
    {
      input: join(ATTACHED_ASSETS_DIR, 'PHOTO-2025-11-19-20-50-16_1763614659104.jpeg'),
      output: join(ATTACHED_ASSETS_DIR, 'PHOTO-2025-11-19-20-50-16_1763614659104.webp'),
      type: 'jpg'
    }
  ];

  let totalSavings = 0;
  let totalOriginalSize = 0;

  for (const image of imagesToOptimize) {
    try {
      const inputStats = await stat(image.input);
      totalOriginalSize += inputStats.size;
      
      await optimizeImage(image.input, image.output, image.type);
      
      const outputStats = await stat(image.output);
      totalSavings += (inputStats.size - outputStats.size);
    } catch (error) {
      console.error(`Failed to process ${image.input}:`, error);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('OPTIMIZATION COMPLETE');
  console.log('='.repeat(60));
  console.log(`Total original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total savings: ${(totalSavings / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Overall reduction: ${((totalSavings / totalOriginalSize) * 100).toFixed(1)}%`);
}

main().catch(console.error);
